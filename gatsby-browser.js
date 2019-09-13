import React from "react"
import EstatesProvider from "@context/estates/estates"
import SearchParamsProvider from "@context/searchParams/searchParams"
import HoverEstateProvider from "@context/hoverEstate/hoverEstate"
// import LocationProvider, { LocationContext } from "@context/location/location"

export const wrapRootElement = ({ element }) => {
  return (
    <HoverEstateProvider>
      <SearchParamsProvider>{element}</SearchParamsProvider>
    </HoverEstateProvider>
  ) //TODO:Uncomment for build
}

export const wrapPageElement = ({ element }) => {
  return <EstatesProvider>{element}</EstatesProvider>
}

// export const onRouteUpdate = ({ location }) => {
//   const [, setLoc] = useContext(LocationContext)
//   setLoc(location)
// }
