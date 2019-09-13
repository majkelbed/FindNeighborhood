import React, { createContext, useState } from "react"

export const SearchParamsContext = createContext({})

const SearchParamsProvider = ({ children }) => {
  const paramsContext = useState({ city: "", street: "" })
  return (
    <>
      <SearchParamsContext.Provider value={paramsContext}>
        {children}
      </SearchParamsContext.Provider>
    </>
  )
}

export default SearchParamsProvider
