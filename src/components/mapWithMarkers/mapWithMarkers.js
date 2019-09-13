import React, { useContext } from "react"
import styled from "styled-components"
import GoogleMapReact from "google-map-react"

import { HoverContext } from "@context/hoverEstate/hoverEstate"

const MapWithMarkers = ({ markers }) => {
  const [hoverIndex, setHoverIndex] = useContext(HoverContext)

  return (
    <>
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          yesIWantToUseGoogleMapApiInternals
          defaultCenter={{ lat: 51, lng: 20.5 }}
          defaultZoom={6}
          onChildMouseEnter={index => setHoverIndex(index)}
          onChildMouseLeave={() => setHoverIndex(-1)}
        >
          {markers.map(({ index, thumbnailUrl, ...rest }) => (
            <Marker
              key={index}
              index={index}
              src={thumbnailUrl}
              isHover={-hoverIndex === -index}
              {...rest}
            />
          ))}
        </GoogleMapReact>
      </div>
    </>
  )
}

export default MapWithMarkers

const Marker = props => <StyledEstateInfo {...props}></StyledEstateInfo>

const StyledMarker = styled.div`
  position: relative;
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
const StyledEstateInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 30px;
  height: 30px;
  background: ${({ src }) => `url(${src})`};
  background-size: cover;
  ${({ $hover, isHover }) =>
    $hover || isHover
      ? "transform: scale(3);z-index:10;"
      : "transform: scale(1);z-index:0;"};
`
