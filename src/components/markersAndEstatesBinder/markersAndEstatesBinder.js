import React from "react"
import styled from "styled-components"
import MapWithMarkers from "@components/mapWithMarkers/mapWithMarkers"
import AllEstates from "@components/allEstates/allEstates"

function mapEstatesPropsToMarkersProps(estates) {
  return estates.map(
    ({ location: { lat, lon: lng }, name, thumbnailUrl, price }, index) => ({
      name,
      lat,
      lng,
      thumbnailUrl,
      price,
      index,
    })
  )
}

const MarkersAndEstatesBinder = ({ estates }) => {
  const markersProps = mapEstatesPropsToMarkersProps(estates)
  return (
    <StyledGrid>
      <MapWithMarkers markers={markersProps} />
      <AllEstates estates={estates} />
    </StyledGrid>
  )
}

export default MarkersAndEstatesBinder

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2em;

  padding: 2em;
`
