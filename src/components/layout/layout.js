import React from "react"
import theme from "@components/layout/theme"
import Nav from "@components/layout/nav/nav"
import { createGlobalStyle, ThemeProvider } from "styled-components"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Nav />
        <Global />
        <main>{children}</main>
      </>
    </ThemeProvider>
  )
}

export default Layout

const Global = createGlobalStyle`
  ${({ theme }) => theme.fonts.import};

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.secondary};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${({ theme }) => theme.fonts.primary};
  }

  a,
  button {
    cursor: pointer;
  }
`
