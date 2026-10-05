import { chromium } from 'playwright'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const outputDirectory = path.resolve('qa')
const baseUrl = 'http://127.0.0.1:4173/'

await mkdir(outputDirectory, { recursive: true })

const browser = await chromium.launch({ executablePath: chromePath, headless: true })
const report = { consoleErrors: [], interactions: {} }

try {
  for (const viewport of [
    { name: 'desktop', width: 1440, height: 1000 },
    { name: 'mobile', width: 390, height: 844 },
  ]) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      deviceScaleFactor: 1,
      reducedMotion: 'reduce',
    })
    const page = await context.newPage()
    page.on('console', (message) => {
      if (message.type() === 'error') report.consoleErrors.push(`${viewport.name}: ${message.text()}`)
    })
    page.on('pageerror', (error) => report.consoleErrors.push(`${viewport.name}: ${error.message}`))

    await page.goto(baseUrl, { waitUntil: 'networkidle' })
    report[`${viewport.name}Metrics`] = await page.evaluate(() => ({
      viewportWidth: window.innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      pageHeight: document.documentElement.scrollHeight,
      brokenImages: [...document.images]
        .filter((image) => !image.complete || image.naturalWidth === 0)
        .map((image) => image.src),
    }))
    await page.screenshot({
      path: path.join(outputDirectory, `implementation-${viewport.name}-hero.png`),
    })
    await page.screenshot({
      path: path.join(outputDirectory, `implementation-${viewport.name}.png`),
      fullPage: true,
    })

    if (viewport.name === 'desktop') {
      const faq = page.locator('details').first()
      await faq.locator('summary').click()
      report.interactions.faqOpened = await faq.evaluate((element) => element.open)
      const cta = page.locator('a[href*="hotmart.com"]').first()
      report.interactions.ctaHref = await cta.getAttribute('href')
      await page.locator('a[href="#conteudo"]').click()
      await page.waitForTimeout(300)
      report.interactions.navigationTargetVisible = await page.locator('#conteudo').isVisible()
    }

    await context.close()
  }

  const source = await readFile(path.resolve('design-reference/selected-direction.png'))
  const implementation = await readFile(path.join(outputDirectory, 'implementation-desktop.png'))
  const compare = await browser.newPage({ viewport: { width: 1500, height: 1000 } })
  await compare.setContent(`
    <!doctype html>
    <html>
      <head>
        <style>
          * { box-sizing: border-box; }
          body { margin: 0; padding: 24px; background: #090909; color: white; font: 15px system-ui; }
          main { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; align-items: start; }
          figure { margin: 0; }
          figcaption { position: sticky; top: 0; z-index: 2; padding: 10px 12px; background: #191919; font-weight: 700; }
          img { display: block; width: 100%; height: auto; }
        </style>
      </head>
      <body>
        <main>
          <figure><figcaption>Fonte visual selecionada</figcaption><img src="data:image/png;base64,${source.toString('base64')}" alt=""></figure>
          <figure><figcaption>Implementação</figcaption><img src="data:image/png;base64,${implementation.toString('base64')}" alt=""></figure>
        </main>
      </body>
    </html>
  `)
  await compare.waitForFunction(() => [...document.images].every((image) => image.complete))
  await compare.screenshot({ path: path.join(outputDirectory, 'reference-vs-implementation.png'), fullPage: true })
  await compare.close()

  const sourceHero = await readFile(path.resolve('design-reference/selected-direction.png'))
  const implementationHero = await readFile(path.join(outputDirectory, 'implementation-desktop-hero.png'))
  const heroCompare = await browser.newPage({ viewport: { width: 1500, height: 1000 } })
  await heroCompare.setContent(`
    <!doctype html>
    <html>
      <head>
        <style>
          * { box-sizing: border-box; }
          body { margin: 0; padding: 24px; background: #090909; color: white; font: 15px system-ui; }
          main { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; align-items: start; }
          figure { margin: 0; height: 910px; overflow: hidden; background: #111; }
          figcaption { padding: 10px 12px; background: #191919; font-weight: 700; }
          img { display: block; width: 100%; height: auto; }
        </style>
      </head>
      <body><main>
        <figure><figcaption>Hero da fonte visual</figcaption><img src="data:image/png;base64,${sourceHero.toString('base64')}" alt=""></figure>
        <figure><figcaption>Hero da implementação</figcaption><img src="data:image/png;base64,${implementationHero.toString('base64')}" alt=""></figure>
      </main></body>
    </html>
  `)
  await heroCompare.waitForFunction(() => [...document.images].every((image) => image.complete))
  await heroCompare.screenshot({ path: path.join(outputDirectory, 'hero-reference-vs-implementation.png') })
  await heroCompare.close()

  await writeFile(path.join(outputDirectory, 'browser-report.json'), JSON.stringify(report, null, 2))
} finally {
  await browser.close()
}
