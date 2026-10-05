import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html { color-scheme: dark; font-family: ${({ theme }) => theme.typography.body}; background: ${({ theme }) => theme.colors.background}; color: ${({ theme }) => theme.colors.text}; scroll-behavior: smooth; scroll-padding-top: 5.5rem; }
  body { margin: 0; min-width: 320px; min-height: 100vh; background: ${({ theme }) => theme.colors.background}; color: ${({ theme }) => theme.colors.text}; font-size: 16px; -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; }
  button, input, textarea, select { font: inherit; }
  img, svg, video { display: block; max-width: 100%; }
  a, summary { -webkit-tap-highlight-color: transparent; }
  :focus-visible { outline: 2px solid ${({ theme }) => theme.colors.focus}; outline-offset: 4px; }
  ::selection { background: ${({ theme }) => theme.colors.accent}; color: #fff; }
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
  }
`
