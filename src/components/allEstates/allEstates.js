import React from "react"
import styled from "styled-components"
import Estate from "@components/estate/estate"

function renderEstates(data) {
  return data.map((estate, index) => (
    <Estate key={index} {...estate} index={index} />
  ))
}

const AllEstates = ({ estates }) => {
  return (
    <>
      <StyledEstatesGrid>{renderEstates(estates)}</StyledEstatesGrid>
    </>
  )
}

export default AllEstates

const StyledEstatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2em;
`
