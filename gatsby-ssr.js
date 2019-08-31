import React from "react"
import EstatesProvider from "@context/estatesProvider/estatesProvider"

export const wrapRootElement = ({ element }) => {
  return <EstatesProvider>{element}</EstatesProvider>
}
