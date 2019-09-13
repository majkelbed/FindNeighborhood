import React from "react"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import MapWithMarkers from "@components/mapWithMarkers/mapWithMarkers"

import { StyledDetails, Info, Cover } from "../estate-presentation"

const EstateDetails = ({ pageContext }) => {
  const {
    name = "Estate not found",
    description = "We couldn't find anything, sorry.",
    thumbnailUrl = "NO PHOTO URL",
    city = "",
    street = "",
    lat = 60,
    lng = 18,
  } = pageContext
  return (
    <>
      <StyledDetails className="estate">
        <Info>
          <h2 className="estate_name">{name}</h2>
          <div className="estate_description">
            {documentToReactComponents(description.json)}
          </div>
        </Info>
        <Cover src={thumbnailUrl} alt={name} />
      </StyledDetails>
      <MapWithMarkers markers={[{ key: name, thumbnailUrl, lat, lng }]} />
    </>
  )
}

export default EstateDetails
