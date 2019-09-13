import React, { createContext, useState } from "react"

export const HoverContext = createContext(null)

const HoverEstateProvider = ({ children }) => {
  const onHover = useState(-1)
  return (
    <HoverContext.Provider value={onHover}>{children}</HoverContext.Provider>
  )
}

export default HoverEstateProvider
