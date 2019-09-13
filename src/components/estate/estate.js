import React, { useContext } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { HoverContext } from "@context/hoverEstate/hoverEstate"
import { Info, Cover, Details } from "./estate-presentation"

const Estate = ({
  name = "Estate not found",
  offertType = "Rent",
  price = "50000",
  thumbnailUrl = "NO PHOTO URL",
  city = "",
  street = "",
  contentful_id = "redirect",
  index,
}) => {
  const formatedURL = `/${city}/${street}/${contentful_id}`
  const displayPriceAndOfferType = `${price}$${
    offertType === "Rent" ? "/month" : ""
  }`

  const [hoverIndex, setHoverIndex] = useContext(HoverContext)

  return (
    <StyledEstate
      onMouseEnter={() => setHoverIndex(index)}
      onMouseLeave={() => setHoverIndex(-1)}
      isHover={-hoverIndex === -index}
      className="estate"
    >
      <Cover
        className="estate_thumbnail"
        src={thumbnailUrl} //TODO:Development purpose, later use thumbnailUrl prop [Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)]
        alt={name}
      />
      <Info>
        <Link to={formatedURL} className="estate_name">
          {name}
        </Link>
        <Details>
          {city}, {street}
        </Details>
        {displayPriceAndOfferType}
      </Info>
    </StyledEstate>
  )
}

export default Estate

const StyledEstate = styled.div`
  display: grid;
  grid-template-rows: 200px auto;
  align-items: center;

  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.15);
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  border: none;

  overflow: hidden;

  transform: ${props => (props.isHover ? "scale(1.2)" : "scale(1)")};
`
