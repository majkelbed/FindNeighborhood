import React from "react"
import { Link } from "gatsby"

import { StyledEstate, Info, Cover, Details } from "./estate-presentation"

const Estate = ({
  name = "Estate not found",
  offertType = "Rent",
  price = "50000",
  thumbnailUrl = "NO PHOTO URL",
  city = "",
  street = "",
  contentful_id = "redirect",
}) => {
  const formatedURL = `/${city}/${street}/${contentful_id}`
  const displayPrice = `${price}$${offertType === "Rent" ? "/month" : ""}`

  return (
    <StyledEstate className="estate">
      <Cover
        className="estate_thumbnail"
        src={[Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)]} //TODO:Development purpose, later use thumbnailUrl prop
        alt={name}
      />
      <Info>
        <Link to={formatedURL} className="estate_name">
          {name}
        </Link>
        <Details>
          {city}, {street}
        </Details>
        {displayPrice}
      </Info>
    </StyledEstate>
  )
}

export default Estate
