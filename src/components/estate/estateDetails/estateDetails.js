import React, { useState } from "react"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import { StyledEstate, Info, Cover } from "../estate-presentation"

import GoogleMapReact from "google-map-react"

const EstateDetails = ({
  pageContext: {
    name = "Estate not found",
    description = "We couldn't find anything, sorry.",
    thumbnailUrl = "NO PHOTO URL",
    city = "",
    street = "",
    location: { lat, lon },
  },
}) => {
  const Marker = () => <StyledMarker></StyledMarker>
  const StyledMarker = styled.div`
    cursor: pointer;
    width: 15px;
    height: 15px;
    background: transparent;
    border-radius: 30px;
    border: 5px solid red;
    :hover {
      background: gray;
    }
  `

  return (
    <>
      <StyledEstate className="estate">
        <Info>
          <h2 className="estate_name">{name}</h2>
          <div className="estate_description">
            {documentToReactComponents(description.json)}
          </div>
        </Info>
        <Cover src={thumbnailUrl} alt={name} />
      </StyledEstate>

      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          defaultCenter={{ lat: lat, lng: lon }}
          defaultZoom={12}
          onChildClick={(e, a, c) => console.log(e, a, c, "test")}
        >
          <Marker lat={lat} lng={lon} />
        </GoogleMapReact>
      </div>
    </>
  )
}

export default EstateDetails
