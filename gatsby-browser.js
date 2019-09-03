import React from "react"
import Layout from "@components/layout/layout"
import EstatesProvider from "@context/estates/estates"

export const wrapRootElement = ({ element }) => {
  return <EstatesProvider>{element}</EstatesProvider>
}

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>
}
