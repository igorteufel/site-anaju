import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import {
  PiArrowDown, PiCheckCircleFill, PiCopy, PiCreditCard, PiInfinity,
  PiLightning, PiLockKey, PiTarget, PiWhatsappLogo, PiXCircleFill,
} from 'react-icons/pi'
import {
  About, AboutCopy, AboutImage, BenefitList, Benefits, BenefitsGallery,
  BenefitsHeader, Button, CompareCard, CompareGrid, CompareSection,
  CreatorEyebrow, Faq, FaqGrid, FaqList, Footer, FooterInner, Header,
  HeaderInner, Hero, HeroActions, HeroContent, HeroCopy, HeroImage,
  HeroVisual, Highlight, How, HowGrid, HowIntro, Kicker, Logo, Nav,
  Offer, OfferActions, OfferContent, OfferGallery, OfferPrice, Pain, PainCopy,
  PainGallery, Progress, Proof, ProofGrid, ProofMessage, Section,
  SecondaryButton, SectionHeading, Step, StepNumber, StoryCard, StoryRail,
  StoryVisual, TrustItem, TrustRow, WhatsAppButton,
} from './styles/site.js'

const checkoutUrl = 'https://pay.hotmart.com/T106920722G'
const whatsappUrl = 'https://wa.me/5512988841870?text=Oi%2C%20Ana!%20Tenho%20uma%20d%C3%BAvida%20sobre%20o%20Story%20que%20Vende.'

const storyExamples = [
  { src: '/assets/story-cafe.png', alt: 'Story com foto de café e mensagem Bom dia', label: 'Rotina sem intenção' },
  { src: '/assets/story-academia.png', alt: 'Story no espelho da academia', label: 'Postar só para aparecer' },
  { src: '/assets/story-trabalho.png', alt: 'Story do computador com mensagem Trabalhando muito', label: 'Conteúdo sem estratégia' },
]

const processSteps = [
  { title: 'Escolha o modelo que combina com o seu dia.', text: 'Encontre uma estrutura pronta para o momento que você já está vivendo.', image: '/assets/modelo-cafe.png' },
  { title: 'Copie e adapte para o seu serviço.', text: 'Personalize o texto com a sua voz, seu nicho e a sua realidade.', image: '/assets/story-resultado.png' },
  { title: 'Poste com intenção de venda.', text: 'Mostre o valor do seu trabalho e conduza o público para o próximo passo.', image: '/assets/story-estrategia.png' },
]

const benefits = [
  '30 modelos de story prontos para copiar e adaptar',
  'Scripts de Direct para conduzir respostas até a venda',
  'Banco de referências visuais para não depender de aparecer',
  'Calendário de postagem para planejar a semana em 2 minutos',
]

const faqs = [
  ['Como recebo o material?', 'Depois da confirmação do pagamento, o acesso ao material é enviado para o e-mail usado na compra.'],
  ['Preciso de algum aplicativo específico?', 'Não. Os modelos foram organizados para você consultar, copiar e adaptar com as ferramentas que já usa no dia a dia.'],
  ['Posso usar os modelos em qualquer nicho?', 'Sim. As estruturas são adaptáveis para diferentes serviços e nichos. Você ajusta exemplos, vocabulário e contexto.'],
  ['Preciso aparecer nos stories?', 'Não. O banco de referências mostra formas de criar autoridade usando ambiente, objetos e bastidores do trabalho.'],
  ['Por quanto tempo terei acesso?', 'O acesso segue as condições apresentadas na página de pagamento da Hotmart.'],
]

function Reveal({ children, delay = 0, ...props }) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 34 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const portraitY = useTransform(scrollYProgress, [0, 0.2], [0, reduceMotion ? 0 : 70])
  const phonesY = useTransform(scrollYProgress, [0, 0.22], [0, reduceMotion ? 0 : -56])

  return (
    <>
      <Header>
        <Progress style={{ scaleX: scrollYProgress }} />
        <HeaderInner>
          <Logo href="#inicio" aria-label="Story que Vende — início">Story que Vende</Logo>
          <Nav aria-label="Navegação principal">
            <a href="#transformacao">Como funciona</a>
            <a href="#conteudo">O que você recebe</a>
            <a href="#ana">Quem é a Ana</a>
            <a href="#investimento">Investimento</a>
            <a href="#perguntas">Perguntas</a>
          </Nav>
          <Button href={checkoutUrl} target="_blank" rel="noreferrer">Quero meus 30 modelos</Button>
        </HeaderInner>
      </Header>

      <main>
        <Hero id="inicio">
          <HeroContent>
            <HeroCopy>
              <Reveal>
                <Kicker>30 modelos prontos para profissionais de serviço</Kicker>
                <h1>Transforme sua rotina em stories que <Highlight>geram desejo pelo seu serviço.</Highlight></h1>
                <p>Saiba o que postar e como falar do seu trabalho com estratégia, sem virar blogueirinha, sem se expor demais e sem perder horas criando conteúdo.</p>
                <HeroActions>
                  <Button href={checkoutUrl} target="_blank" rel="noreferrer">Quero meus 30 modelos</Button>
                  <SecondaryButton href="#como-funciona"><PiArrowDown aria-hidden="true" /> Ver como funciona</SecondaryButton>
                </HeroActions>
              </Reveal>
            </HeroCopy>

            <HeroVisual aria-label="Exemplos reais de stories estratégicos">
              <motion.div style={{ y: portraitY }} className="portrait">
                <HeroImage src="/assets/ana-julia.jpg" alt="Ana Julia criando conteúdo no celular" />
              </motion.div>
              <motion.div style={{ y: phonesY }} className="phones">
                <StoryVisual className="phone phone-one" src="/assets/story-trabalho.png" alt="Exemplo de story de trabalho" />
                <StoryVisual className="phone phone-two" src="/assets/story-resultado.png" alt="Exemplo de story com resultado de cliente" />
                <StoryVisual className="phone phone-three" src="/assets/story-duvida.png" alt="Exemplo de story respondendo uma dúvida" />
              </motion.div>
            </HeroVisual>
          </HeroContent>
          <TrustRow>
            <TrustItem><PiLightning aria-hidden="true" /><span><strong>Acesso imediato</strong><small>comece hoje</small></span></TrustItem>
            <TrustItem><PiCopy aria-hidden="true" /><span><strong>30 modelos prontos</strong><small>é só adaptar</small></span></TrustItem>
            <TrustItem><PiTarget aria-hidden="true" /><span><strong>Mais estratégia</strong><small>para atrair clientes</small></span></TrustItem>
          </TrustRow>
        </Hero>

        <Pain>
          <Section>
            <PainCopy>
              <Reveal>
                <Kicker>Seus stories podem fazer mais</Kicker>
                <SectionHeading>Pare de postar só para <Highlight>manter o perfil ativo.</Highlight></SectionHeading>
                <p>Stories aleatórios apenas mostram a sua rotina. Stories estratégicos mostram por que vale a pena contratar você. Você não precisa postar mais — precisa postar com intenção.</p>
              </Reveal>
            </PainCopy>
            <PainGallery>
              {storyExamples.map((story, index) => (
                <Reveal key={story.src} delay={index * 0.09}>
                  <StoryCard>
                    <PiXCircleFill aria-hidden="true" />
                    <img src={story.src} alt={story.alt} />
                    <span>{story.label}</span>
                  </StoryCard>
                </Reveal>
              ))}
            </PainGallery>
          </Section>
        </Pain>

        <CompareSection id="transformacao">
          <Section>
            <CompareGrid>
              <Reveal><CompareCard className="before"><img src="/assets/story-cafe.png" alt="Story de rotina sem estratégia" /><PiXCircleFill aria-hidden="true" /><span>Mais um dia corrido...</span></CompareCard></Reveal>
              <Reveal delay={0.08}><CompareCard className="after"><img src="/assets/story-resultado.png" alt="Story mostrando resultado e autoridade" /><PiCheckCircleFill aria-hidden="true" /><span>Resultado que importa</span></CompareCard></Reveal>
              <Reveal delay={0.15}>
                <div>
                  <Kicker>Estratégia que cabe na rotina</Kicker>
                  <SectionHeading>Você não precisa de uma rotina interessante. <Highlight>Precisa da mensagem certa.</Highlight></SectionHeading>
                  <p>Use os momentos que já fazem parte do seu dia para mostrar autoridade, despertar desejo e conduzir quem assiste até o seu serviço.</p>
                  <Button href={checkoutUrl} target="_blank" rel="noreferrer">Quero postar com estratégia</Button>
                </div>
              </Reveal>
            </CompareGrid>
          </Section>
        </CompareSection>

        <How id="como-funciona">
          <Section>
            <HowIntro><Kicker>Simples de usar</Kicker><SectionHeading>Em menos de 5 minutos, <Highlight>seu story pronto para postar.</Highlight></SectionHeading><p>Você não começa de uma tela em branco. Escolhe, adapta e publica.</p></HowIntro>
            <HowGrid>
              {processSteps.map((step, index) => (
                <Reveal key={step.title} delay={index * 0.1}>
                  <Step><StepNumber>{String(index + 1).padStart(2, '0')}</StepNumber><img src={step.image} alt="" /><h3>{step.title}</h3><p>{step.text}</p></Step>
                </Reveal>
              ))}
            </HowGrid>
          </Section>
        </How>

        <Benefits id="conteudo">
          <Section>
            <BenefitsHeader><Reveal><Kicker>O pacote completo</Kicker><SectionHeading>Você recebe tudo para <Highlight>parar de improvisar.</Highlight></SectionHeading><p>Um material prático para transformar ideias soltas em conteúdo estratégico, mesmo nos dias em que você não sabe o que postar.</p></Reveal></BenefitsHeader>
            <BenefitsGallery>
              <StoryRail><img src="/assets/modelo-cafe.png" alt="Modelo de story estratégico para o café" /><img src="/assets/modelo-academia.png" alt="Modelo de story estratégico para academia" /><img src="/assets/modelo-caixinha.png" alt="Modelo de story para caixa de perguntas" /></StoryRail>
              <BenefitList>{benefits.map((benefit) => <li key={benefit}><PiCheckCircleFill aria-hidden="true" />{benefit}</li>)}</BenefitList>
            </BenefitsGallery>
          </Section>
        </Benefits>

        <Proof aria-labelledby="proof-title">
          <Section>
            <Reveal><Kicker>Resultados reais</Kicker><SectionHeading id="proof-title">Profissionais que já acessaram o <Highlight>Story que Vende:</Highlight></SectionHeading></Reveal>
            <ProofGrid>
              <ProofMessage><img src="/assets/depoimentos-1.png" alt="Depoimentos de clientes sobre o Story que Vende" /></ProofMessage>
              <ProofMessage><img src="/assets/depoimentos-2.png" alt="Mais depoimentos de clientes" /></ProofMessage>
              <blockquote>“Eu sempre ficava pensando horas o que postar e acabava não postando nada... vai ajudar demais!”</blockquote>
            </ProofGrid>
          </Section>
        </Proof>

        <Offer id="investimento">
          <Section>
            <OfferContent>
              <Reveal>
                <Kicker>Oferta especial</Kicker>
                <OfferPrice><span>Por apenas</span><strong>R$37,00</strong></OfferPrice>
                <p>Tenha 30 modelos de stories, scripts de Direct e referências visuais para divulgar seu serviço com mais clareza e intenção.</p>
                <OfferActions>
                  <Button href={checkoutUrl} target="_blank" rel="noreferrer">Quero acessar agora</Button>
                  <SecondaryButton href={whatsappUrl} target="_blank" rel="noreferrer"><PiWhatsappLogo aria-hidden="true" /> Tirar dúvida no WhatsApp</SecondaryButton>
                </OfferActions>
                <TrustRow className="offer-trust">
                  <TrustItem><PiLightning aria-hidden="true" /><span><strong>Acesso imediato</strong></span></TrustItem>
                  <TrustItem><PiLockKey aria-hidden="true" /><span><strong>Pagamento seguro</strong></span></TrustItem>
                  <TrustItem><PiCreditCard aria-hidden="true" /><span><strong>Compra única</strong></span></TrustItem>
                  <TrustItem><PiInfinity aria-hidden="true" /><span><strong>Material prático</strong></span></TrustItem>
                </TrustRow>
              </Reveal>
              <OfferGallery><img src="/assets/story-cafe.png" alt="Exemplo de story sobre café" /><img src="/assets/story-trabalho.png" alt="Exemplo de story sobre trabalho" /><img src="/assets/story-academia.png" alt="Exemplo de story sobre academia" /><img src="/assets/story-resultado.png" alt="Exemplo de story com resultado" /></OfferGallery>
            </OfferContent>
          </Section>
        </Offer>

        <About id="ana">
          <Section>
            <AboutImage><img src="/assets/ana-julia.jpg" alt="Ana Julia, criadora do Story que Vende" /></AboutImage>
            <AboutCopy>
              <Reveal><CreatorEyebrow>Quem é a criadora</CreatorEyebrow><SectionHeading>Quem é a responsável pelo <Highlight>Story que Vende?</Highlight></SectionHeading><p>Eu sou a Ana Júlia, sou formada em Rádio, TV e Internet e trabalho com marketing de conteúdo há mais de 6 anos.</p><p>Já atuei para diversos nichos do mercado com produção de conteúdo até empreender como Social Media.</p><p>Hoje, eu ajudo profissionais a saírem do postar por postar para uma comunicação que gera valor real, conexão com a audiência e impacto no faturamento.</p></Reveal>
            </AboutCopy>
          </Section>
        </About>

        <Faq id="perguntas">
          <Section>
            <FaqGrid>
              <div><Kicker>Antes de começar</Kicker><SectionHeading>Perguntas <Highlight>frequentes</Highlight></SectionHeading><p>Tire suas dúvidas sobre o Story que Vende.</p></div>
              <FaqList>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</FaqList>
            </FaqGrid>
          </Section>
        </Faq>
      </main>

      <WhatsAppButton href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Tirar uma dúvida sobre o Story que Vende pelo WhatsApp"><PiWhatsappLogo aria-hidden="true" /><span>Tirar uma dúvida</span></WhatsAppButton>
      <Footer><FooterInner><div><Logo href="#inicio">Story que Vende</Logo><p>Conteúdo estratégico sem virar influencer.</p></div><Button href={checkoutUrl} target="_blank" rel="noreferrer">Quero meus 30 modelos</Button></FooterInner></Footer>
    </>
  )
}
