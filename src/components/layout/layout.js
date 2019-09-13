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
  

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.secondary};
    overflow-x:hidden;
    font-size:calc(18px+1vw);
  }
  h1{
    font-size:5em;
  }
  p{
    font-size:1.4em;
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
