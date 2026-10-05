# Design QA — Story que Vende

## Evidence

- Source visual truth: `design-reference/selected-direction.png`
- Rendered desktop: `qa/implementation-desktop.png`
- Rendered mobile: `qa/implementation-mobile.png`
- Full-view comparison: `qa/reference-vs-implementation.png`
- Focused hero comparison: `qa/hero-reference-vs-implementation.png`
- Browser report: `qa/browser-report.json`
- Source pixels: 786 × 2001
- Desktop implementation pixels: 1440 × 7958
- Mobile implementation pixels: 390 × 9732
- Desktop CSS viewport: 1440 × 1000 at device scale factor 1
- Mobile CSS viewport: 390 × 844 at device scale factor 1
- State: default page state with reduced motion enabled for stable capture

The generated source is a compressed full-page concept rather than a literal
same-height specification. The comparison therefore normalizes both images to
equal displayed width and evaluates hierarchy, section order, palette, imagery,
type treatment, responsive composition and interaction intent. The focused hero
comparison uses the same two-column display scale and first-viewport state.

## Findings

No actionable P0, P1 or P2 findings remain.

- Fonts and typography: Archivo Black reproduces the source's heavy display
  voice, while Manrope provides the clean supporting text. Final hero wrapping
  matches the source hierarchy without clipping on desktop or mobile.
- Spacing and layout rhythm: the asymmetric hero, image-led transformation,
  three-step explanation, benefit band, proof, offer, creator and FAQ sections
  preserve the selected direction's chapter-based rhythm. The implementation is
  intentionally taller because it contains readable production copy rather than
  compressed mockup text.
- Colors and tokens: near-black, deep wine, hot pink, white and semantic
  red/green are consistently mapped through shared theme tokens.
- Image quality and fidelity: all visible product examples and Ana Julia's photo
  use the original source assets. No image is broken, stretched or replaced by
  CSS/SVG placeholder art.
- Copy and content: the source mock's generated placeholder-like small text was
  replaced with the coherent copy from the original Story que Vende page. The
  offer remains R$37 and all primary CTAs use the original Hotmart URL.
- Icons: all functional icons come from one outlined icon family and have
  consistent scale, color and alignment.
- Responsiveness: measured document width equals viewport width at 1440px and
  390px; no horizontal overflow or clipped controls were found.
- Accessibility: semantic headings, navigation, native FAQ disclosure controls,
  alt text, visible focus, reduced-motion handling and practical mobile targets
  are present.

## Comparison History

### Pass 1

- [P2] Hero title wrapped into too many lines compared with the selected mock,
  making the first viewport denser and pushing the visual hierarchy downward.
- [P2] The creator portrait sat too low behind the phone collage, obscuring more
  of the face than the selected direction.

Fixes:

- Reduced the desktop display scale and widened the heading measure.
- Shifted the portrait upward, adjusted its crop and lowered the phone layers.

Post-fix evidence:

- `qa/hero-reference-vs-implementation.png`
- `qa/implementation-desktop-hero.png`
- `qa/implementation-mobile-hero.png`

### Pass 2

- No actionable P0/P1/P2 differences remained.
- The use of the original rectangular portrait rather than a generated cutout is
  accepted as a fidelity-preserving production choice.

## Interaction and Browser Checks

- Primary checkout CTA resolves to `https://pay.hotmart.com/T106920722G`.
- In-page navigation reaches `#conteudo`.
- FAQ opens and reveals its answer.
- Console and page errors: none.
- Broken images: none.
- Production build: passed.

## Follow-up Polish

- [P3] A future photo session could provide a transparent creator portrait that
  matches the mock's cutout composition even more closely without synthesizing
  the creator's identity.

## Implementation Checklist

- [x] Desktop visual comparison
- [x] Mobile responsive capture
- [x] Primary CTA verification
- [x] Navigation verification
- [x] FAQ interaction verification
- [x] Console and image checks
- [x] Production build

final result: passed
