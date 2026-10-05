import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Section = styled.div`
  width: min(100% - 2.5rem, ${({ theme }) => theme.layout.content});
  margin-inline: auto;
`

export const Header = styled.header`
  position: sticky; top: 0; z-index: 50;
  background: rgba(13, 5, 10, 0.93);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  backdrop-filter: blur(18px);
`

export const Progress = styled(motion.div)`
  position: absolute; inset: auto 0 -1px; height: 2px;
  background: ${({ theme }) => theme.colors.accent}; transform-origin: left;
`

export const HeaderInner = styled.div`
  width: min(100% - 2.5rem, ${({ theme }) => theme.layout.content});
  min-height: 4.75rem; margin-inline: auto;
  display: flex; align-items: center; justify-content: space-between; gap: 2rem;
  > a:last-child { min-height: 2.65rem; padding-inline: 1.25rem; font-size: 0.7rem; }
`

export const Logo = styled.a`
  color: ${({ theme }) => theme.colors.accent};
  font-family: ${({ theme }) => theme.typography.display};
  font-size: 1.15rem; letter-spacing: -0.05em; text-decoration: none; white-space: nowrap;
`

export const Nav = styled.nav`
  display: flex; align-items: center; gap: clamp(1rem, 2vw, 2rem);
  a { color: ${({ theme }) => theme.colors.textMuted}; font-size: 0.72rem; text-decoration: none; transition: color 180ms ease; }
  a:hover, a:focus-visible { color: ${({ theme }) => theme.colors.text}; }
  @media (max-width: 980px) { display: none; }
`

export const Button = styled.a`
  min-height: 3.35rem; display: inline-flex; align-items: center; justify-content: center;
  padding: 0.9rem 1.75rem; border: 1px solid transparent; border-radius: 999px;
  background: ${({ theme }) => theme.colors.accent}; color: #fff;
  font-size: 0.76rem; font-weight: 800; letter-spacing: 0.08em;
  text-align: center; text-decoration: none; text-transform: uppercase;
  box-shadow: 0 18px 50px rgba(255, 31, 130, 0.2);
  transition: transform 180ms ease, background 180ms ease, box-shadow 180ms ease;
  &:hover { background: ${({ theme }) => theme.colors.accentStrong}; box-shadow: 0 22px 60px rgba(255, 31, 130, 0.32); transform: translateY(-2px); }
`

export const SecondaryButton = styled.a`
  min-height: 3.35rem; display: inline-flex; align-items: center; justify-content: center; gap: 0.55rem;
  padding: 0.85rem 1.55rem; border: 1px solid ${({ theme }) => theme.colors.borderStrong}; border-radius: 999px;
  background: rgba(255, 255, 255, 0.035); color: ${({ theme }) => theme.colors.text};
  font-size: 0.76rem; font-weight: 800; letter-spacing: 0.04em; text-align: center; text-decoration: none;
  transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;
  svg { flex: 0 0 auto; color: ${({ theme }) => theme.colors.accent}; font-size: 1.15rem; }
  &:hover { border-color: ${({ theme }) => theme.colors.accent}; background: rgba(255, 31, 130, 0.09); transform: translateY(-2px); }
`

export const Hero = styled.section`
  position: relative; overflow: clip; background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid rgba(255, 255, 255, 0.055);
  &::before {
    content: ''; position: absolute; width: min(86vw, 76rem); aspect-ratio: 1.35;
    top: -21rem; right: -16rem;
    background: radial-gradient(ellipse at center, rgba(157, 60, 178, 0.52) 0%, rgba(255, 31, 130, 0.24) 32%, rgba(255, 31, 130, 0.08) 52%, transparent 74%);
    filter: blur(18px); pointer-events: none;
  }
`

export const HeroContent = styled(Section)`
  min-height: 44rem; display: grid; grid-template-columns: minmax(0, 0.94fr) minmax(30rem, 1.06fr);
  align-items: center; gap: clamp(2rem, 4vw, 5rem); padding-block: clamp(4rem, 8vw, 7rem) 2rem;
  @media (max-width: 900px) { grid-template-columns: 1fr; padding-top: 3.5rem; }
`

export const HeroCopy = styled.div`
  position: relative; z-index: 3;
  h1 { max-width: 15ch; margin: 1rem 0 1.5rem; font-family: ${({ theme }) => theme.typography.display}; font-size: clamp(2.65rem, 4.15vw, 4.15rem); font-weight: 400; line-height: 0.98; letter-spacing: -0.045em; }
  p { max-width: 36rem; margin: 0; color: ${({ theme }) => theme.colors.textMuted}; font-size: clamp(1rem, 1.25vw, 1.16rem); line-height: 1.65; }
`

export const Kicker = styled.span`
  color: ${({ theme }) => theme.colors.accent}; font-size: 0.72rem; font-weight: 800;
  letter-spacing: 0.2em; text-transform: uppercase;
`
export const Highlight = styled.span`color: ${({ theme }) => theme.colors.accent};`

export const HeroActions = styled.div`
  display: flex; align-items: center; gap: 0.75rem; margin-top: 2rem;
  @media (max-width: 560px) { align-items: stretch; flex-direction: column; }
`

export const HeroVisual = styled.div`
  position: relative; min-height: 38rem;
  &::before {
    content: ''; position: absolute; inset: 2rem -5rem -4rem;
    background: radial-gradient(ellipse at 58% 48%, rgba(205, 56, 176, 0.46) 0%, rgba(255, 31, 130, 0.16) 42%, transparent 72%);
    filter: blur(15px);
  }
  .portrait { position: absolute; top: -1rem; right: 8%; width: 72%; aspect-ratio: 2 / 3; }
  .phones { position: absolute; inset: 0; }
  .phone { position: absolute; width: 27%; border: 0.45rem solid #08080a; border-radius: 2rem; box-shadow: ${({ theme }) => theme.shadows.phone}; }
  .phone-one { left: 0; bottom: -7%; transform: rotate(-8deg); }
  .phone-two { left: 36%; bottom: -11%; width: 29%; transform: rotate(2deg); }
  .phone-three { right: 0; bottom: -3%; transform: rotate(8deg); }
  @media (max-width: 900px) { min-height: 35rem; width: min(100%, 42rem); margin-inline: auto; }
  @media (max-width: 560px) { min-height: 28rem; .portrait { top: 0; right: 11%; width: 76%; } .phone { width: 31%; border-width: 0.3rem; border-radius: 1.35rem; } .phone-two { left: 34%; width: 33%; } }
`

export const HeroImage = styled.img`
  width: 100%; height: 100%; object-fit: cover; object-position: center top;
  border-radius: 2.5rem 2.5rem 1.2rem 1.2rem; filter: saturate(0.92) contrast(1.02); opacity: 0.9;
`
export const StoryVisual = styled.img`display: block; aspect-ratio: 9 / 18; object-fit: cover; background: #08080a;`

export const TrustRow = styled(Section)`
  display: flex; align-items: center; gap: clamp(1.5rem, 4vw, 4rem); padding-block: 1.3rem 2rem;
  &.offer-trust { width: 100%; margin-top: 1.6rem; padding: 0; gap: 1.2rem; flex-wrap: wrap; }
  @media (max-width: 700px) { display: grid; grid-template-columns: 1fr 1fr; }
`

export const TrustItem = styled.div`
  display: flex; align-items: center; gap: 0.65rem; color: ${({ theme }) => theme.colors.textMuted};
  > svg { flex: 0 0 auto; color: ${({ theme }) => theme.colors.accent}; font-size: 1.6rem; }
  span { display: grid; } strong { color: ${({ theme }) => theme.colors.text}; font-size: 0.75rem; }
  small { margin-top: 0.1rem; font-size: 0.68rem; }
`

export const SectionHeading = styled.h2`
  margin: 0.8rem 0 1.3rem; font-family: ${({ theme }) => theme.typography.display};
  font-size: clamp(2.7rem, 4.7vw, 4.8rem); font-weight: 400; line-height: 0.99; letter-spacing: -0.045em;
`

export const Pain = styled.section`
  background: #080608; border-bottom: 1px solid rgba(255, 255, 255, 0.055);
  ${Section} { min-height: 43rem; padding-block: clamp(5rem, 9vw, 8rem); }
`
export const PainCopy = styled.div`
  max-width: 58rem; margin: 0 auto 4rem; text-align: center;
  p { max-width: 46rem; margin-inline: auto; color: ${({ theme }) => theme.colors.textMuted}; font-size: 1.05rem; line-height: 1.65; }
`
export const PainGallery = styled.div`
  width: min(100%, 48rem); margin-inline: auto; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); align-items: end; gap: clamp(0.75rem, 2vw, 1.5rem);
  @media (max-width: 560px) { gap: 0.55rem; }
`

export const StoryCard = styled.figure`
  position: relative; margin: 0; text-align: center;
  > svg { position: absolute; z-index: 2; top: -1rem; right: -0.5rem; color: ${({ theme }) => theme.colors.danger}; font-size: clamp(2rem, 4vw, 3.5rem); filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3)); }
  img { width: 100%; aspect-ratio: 9 / 17; object-fit: cover; border: 0.3rem solid #171019; border-radius: clamp(1rem, 2.5vw, 2rem); box-shadow: ${({ theme }) => theme.shadows.phone}; }
  span { display: block; margin-top: 0.8rem; color: ${({ theme }) => theme.colors.textMuted}; font-size: 0.7rem; line-height: 1.4; }
`

export const CompareSection = styled.section`
  position: relative; overflow: hidden; background: ${({ theme }) => theme.colors.surfaceDeep}; border-bottom: 1px solid rgba(255, 255, 255, 0.055);
  &::before {
    content: ''; position: absolute; width: 68rem; aspect-ratio: 1.25; left: -31rem; bottom: -31rem;
    background: radial-gradient(ellipse at center, rgba(176, 45, 171, 0.44) 0%, rgba(255, 31, 130, 0.15) 42%, transparent 73%);
    filter: blur(18px);
  }
`
export const CompareGrid = styled.div`
  position: relative; min-height: 46rem; display: grid; grid-template-columns: 0.72fr 0.72fr 1.35fr; align-items: center; gap: clamp(1rem, 3vw, 3rem); padding-block: clamp(5rem, 9vw, 8rem);
  > div:last-child p { color: ${({ theme }) => theme.colors.textMuted}; font-size: 1.05rem; line-height: 1.7; }
  > div:last-child ${Button} { margin-top: 1.2rem; }
  @media (max-width: 900px) { grid-template-columns: 1fr 1fr; > div:last-child { grid-column: 1 / -1; } }
`
export const CompareCard = styled.figure`
  position: relative; margin: 0;
  img { width: 100%; aspect-ratio: 9 / 17; object-fit: cover; border: 0.4rem solid #0b090c; border-radius: 2rem; box-shadow: ${({ theme }) => theme.shadows.phone}; }
  > svg { position: absolute; top: -1rem; right: -1rem; color: ${({ theme }) => theme.colors.danger}; font-size: 3.3rem; }
  &.after > svg { color: ${({ theme }) => theme.colors.success}; }
  span { position: absolute; left: 50%; bottom: 1.3rem; width: max-content; max-width: 85%; transform: translateX(-50%); padding: 0.5rem 0.7rem; border-radius: 0.4rem; background: #fff; color: #111; font-size: 0.68rem; font-weight: 800; text-align: center; }
`

export const How = styled.section`background: ${({ theme }) => theme.colors.background}; padding-block: clamp(5rem, 9vw, 8rem); border-bottom: 1px solid rgba(255, 255, 255, 0.055);`
export const HowIntro = styled.div`
  max-width: 60rem; margin: 0 auto 4rem; text-align: center;
  p { margin: -0.35rem auto 0; color: ${({ theme }) => theme.colors.textMuted}; font-size: 1.05rem; }
`
export const HowGrid = styled.div`
  display: grid; grid-template-columns: repeat(3, 1fr); gap: clamp(1rem, 2.5vw, 2.5rem);
  @media (max-width: 760px) { grid-template-columns: 1fr; }
`
export const Step = styled.article`
  position: relative; min-height: 100%; padding: 1.3rem; border: 1px solid ${({ theme }) => theme.colors.border}; border-radius: 1.4rem; background: #100a0f;
  img { width: 100%; aspect-ratio: 4 / 3; object-fit: contain; border-radius: 0.8rem; background: #171017; }
  h3 { margin: 1.25rem 0 0.65rem; font-size: 1rem; line-height: 1.35; }
  p { margin: 0; color: ${({ theme }) => theme.colors.textMuted}; font-size: 0.86rem; line-height: 1.55; }
`
export const StepNumber = styled.span`
  position: absolute; z-index: 2; top: 2rem; left: 2rem; width: 2.6rem; aspect-ratio: 1; display: grid; place-items: center; border-radius: 50%; background: ${({ theme }) => theme.colors.accent}; color: #fff; font-size: 0.78rem; font-weight: 800;
`

export const Benefits = styled.section`background: ${({ theme }) => theme.colors.surfaceDeep}; padding-block: clamp(5rem, 9vw, 8rem); border-bottom: 1px solid rgba(255, 255, 255, 0.055);`
export const BenefitsHeader = styled.div`
  max-width: 52rem; margin-bottom: 3.5rem;
  p { color: ${({ theme }) => theme.colors.textMuted}; font-size: 1.05rem; line-height: 1.65; }
`
export const BenefitsGallery = styled.div`
  display: grid; grid-template-columns: 1.35fr 0.65fr; gap: clamp(2rem, 6vw, 6rem); align-items: center;
  @media (max-width: 860px) { grid-template-columns: 1fr; }
`
export const StoryRail = styled.div`
  display: grid; grid-template-columns: repeat(3, 1fr); align-items: center;
  img { width: 112%; border-radius: 1.1rem; box-shadow: ${({ theme }) => theme.shadows.card}; }
  img:nth-child(1) { transform: rotate(-5deg); } img:nth-child(2) { position: relative; z-index: 2; transform: scale(1.08); } img:nth-child(3) { transform: rotate(5deg); }
`
export const BenefitList = styled.ul`
  display: grid; gap: 1.25rem; margin: 0; padding: 0; list-style: none;
  li { display: flex; align-items: flex-start; gap: 0.75rem; color: ${({ theme }) => theme.colors.textMuted}; font-size: 0.92rem; line-height: 1.5; }
  svg { flex: 0 0 auto; margin-top: 0.1rem; color: ${({ theme }) => theme.colors.success}; font-size: 1.5rem; }
`

export const Proof = styled.section`
  background: #080608; padding-block: clamp(5rem, 9vw, 8rem); border-bottom: 1px solid rgba(255, 255, 255, 0.055);
  ${Section} > div:first-child { text-align: center; }
  ${SectionHeading} { max-width: 18ch; margin-inline: auto; }
`
export const ProofGrid = styled.div`
  display: grid; grid-template-columns: 0.9fr 0.9fr 1.2fr; gap: 1rem; margin-top: 2.5rem;
  blockquote { min-height: 100%; display: flex; align-items: center; margin: 0; padding: 2rem; border: 1px solid ${({ theme }) => theme.colors.borderStrong}; border-radius: 1.25rem; background: ${({ theme }) => theme.colors.surface}; color: ${({ theme }) => theme.colors.text}; font-size: 1.25rem; font-weight: 700; line-height: 1.5; }
  @media (max-width: 800px) { grid-template-columns: 1fr 1fr; blockquote { grid-column: 1 / -1; } }
`
export const ProofMessage = styled.figure`
  min-height: 100%; display: grid; place-items: center; margin: 0; padding: 1.5rem; border: 1px solid rgba(45, 197, 120, 0.32); border-radius: 1.25rem; background: #0f2119;
  img { width: 100%; }
`

export const Offer = styled.section`
  position: relative; overflow: hidden; background: ${({ theme }) => theme.colors.surfaceDeep}; padding-block: clamp(5rem, 9vw, 8rem); border-bottom: 1px solid rgba(255, 255, 255, 0.055);
  &::after {
    content: ''; position: absolute; width: 72rem; aspect-ratio: 1.3; right: -33rem; top: -32rem;
    background: radial-gradient(ellipse at center, rgba(184, 51, 177, 0.42) 0%, rgba(255, 31, 130, 0.14) 43%, transparent 74%);
    filter: blur(20px);
  }
`
export const OfferContent = styled.div`
  position: relative; z-index: 2; display: grid; grid-template-columns: 0.9fr 1.1fr; align-items: center; gap: clamp(3rem, 7vw, 7rem);
  > div:first-child > p { max-width: 36rem; color: ${({ theme }) => theme.colors.textMuted}; line-height: 1.65; }
  @media (max-width: 860px) { grid-template-columns: 1fr; }
`
export const OfferPrice = styled.div`
  display: grid; margin: 0.8rem 0 1rem;
  span { color: ${({ theme }) => theme.colors.textMuted}; font-size: 1.05rem; }
  strong { color: ${({ theme }) => theme.colors.accent}; font-family: ${({ theme }) => theme.typography.display}; font-size: clamp(4rem, 8vw, 7rem); font-weight: 400; line-height: 1; letter-spacing: -0.04em; }
`
export const OfferActions = styled.div`
  display: flex; align-items: center; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.4rem;
  @media (max-width: 560px) { align-items: stretch; flex-direction: column; }
`
export const OfferGallery = styled.div`
  display: flex; align-items: flex-end; justify-content: center; min-height: 30rem;
  img { width: 27%; aspect-ratio: 9 / 17; object-fit: cover; border: 0.32rem solid #09070a; border-radius: 1.6rem; box-shadow: ${({ theme }) => theme.shadows.phone}; }
  img:nth-child(1) { transform: rotate(-10deg) translateX(2rem); } img:nth-child(2) { position: relative; z-index: 2; transform: rotate(-3deg) translateY(-2rem); } img:nth-child(3) { position: relative; z-index: 3; transform: rotate(4deg); } img:nth-child(4) { transform: rotate(10deg) translateX(-2rem) translateY(-1rem); }
`

export const About = styled.section`
  position: relative; overflow: hidden; background: ${({ theme }) => theme.colors.background};
  &::before {
    content: ''; position: absolute; width: 72rem; aspect-ratio: 1.35; left: -34rem; bottom: -35rem;
    background: radial-gradient(ellipse at center, rgba(166, 42, 170, 0.42) 0%, rgba(255, 31, 130, 0.13) 44%, transparent 75%);
    filter: blur(20px);
  }
  ${Section} { position: relative; display: grid; grid-template-columns: 0.85fr 1.15fr; align-items: center; gap: clamp(3rem, 7vw, 8rem); padding-block: clamp(5rem, 9vw, 8rem); }
  @media (max-width: 800px) { ${Section} { grid-template-columns: 1fr; } }
`
export const AboutImage = styled.figure`
  margin: 0; img { width: 100%; aspect-ratio: 4 / 5; object-fit: cover; border-radius: 2rem; box-shadow: ${({ theme }) => theme.shadows.card}; }
`
export const AboutCopy = styled.div`p { max-width: 42rem; color: ${({ theme }) => theme.colors.textMuted}; line-height: 1.7; }`
export const CreatorEyebrow = styled(Kicker)``

export const Faq = styled.section`background: #080608; padding-block: clamp(5rem, 9vw, 8rem);`
export const FaqGrid = styled.div`
  display: grid; grid-template-columns: 0.65fr 1.35fr; gap: clamp(3rem, 8vw, 8rem);
  > div:first-child p { color: ${({ theme }) => theme.colors.textMuted}; }
  @media (max-width: 780px) { grid-template-columns: 1fr; }
`
export const FaqList = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  details { border-bottom: 1px solid ${({ theme }) => theme.colors.border}; }
  summary { display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding-block: 1.35rem; color: ${({ theme }) => theme.colors.text}; font-weight: 700; cursor: pointer; list-style: none; }
  summary::-webkit-details-marker { display: none; } summary span { color: ${({ theme }) => theme.colors.accent}; font-size: 1.5rem; transition: transform 180ms ease; } details[open] summary span { transform: rotate(45deg); }
  p { max-width: 55rem; margin: -0.35rem 0 1.4rem; color: ${({ theme }) => theme.colors.textMuted}; line-height: 1.65; }
`

export const Footer = styled.footer`background: ${({ theme }) => theme.colors.surfaceDeep}; border-top: 1px solid ${({ theme }) => theme.colors.border};`
export const FooterInner = styled(Section)`
  min-height: 12rem; display: flex; align-items: center; justify-content: space-between; gap: 2rem;
  p { margin: 0.5rem 0 0; color: ${({ theme }) => theme.colors.textMuted}; }
  @media (max-width: 620px) { align-items: flex-start; flex-direction: column; justify-content: center; }
`

export const WhatsAppButton = styled.a`
  position: fixed; z-index: 45; right: clamp(1rem, 2vw, 1.75rem); bottom: clamp(1rem, 2vw, 1.75rem);
  min-height: 3.35rem; display: inline-flex; align-items: center; gap: 0.6rem; padding: 0.8rem 1.15rem;
  border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 999px; background: #20b75a; color: #fff;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.38); font-size: 0.78rem; font-weight: 800; text-decoration: none;
  transition: transform 180ms ease, background 180ms ease;
  svg { font-size: 1.35rem; }
  &:hover { background: #169c49; transform: translateY(-2px); }
  @media (max-width: 560px) { width: 3.5rem; padding: 0; justify-content: center; span { display: none; } }
`
