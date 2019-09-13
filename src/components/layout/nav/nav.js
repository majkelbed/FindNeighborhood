import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

const Nav = () => {
  return (
    <StyledNav>
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
    </StyledNav>
  )
}

export default Nav

const StyledNav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 2em;
`
