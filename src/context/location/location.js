import React, { createContext, useState } from "react"

export const LocationContext = createContext(null)

const LocationProvider = ({ children }) => {
  const location = useState({})
  return (
    <LocationContext.Provider value={location}>
      {children}
    </LocationContext.Provider>
  )
}

export default LocationProvider
