import React, { createContext } from "react"
import { useEstates } from "./useEstates"

export const EstatesContext = createContext({})

const EstatesProvider = ({ children }) => {
  const query = useEstates()
  return (
    <>
      <EstatesContext.Provider
        value={query.allContentfulEstate.edges.map(({ node }) => node)}
      >
        {children}
      </EstatesContext.Provider>
    </>
  )
}

export default EstatesProvider
