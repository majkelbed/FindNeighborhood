import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Nav = () => {
  return (
    <StyledNav>
      <Link to="/">Home</Link>
    </StyledNav>
  )
}

export default Nav

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em;
`
