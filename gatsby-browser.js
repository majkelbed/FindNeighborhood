import React from "react"
import Layout from "@components/layout/layout"
import EstatesProvider from "@context/estates/estates"

export const wrapPageElement = ({ element }) => {
  return (
    <Layout>
      <EstatesProvider>{element}</EstatesProvider>
    </Layout>
  )
}

/* TODO: for build use wrapRootElement, it is working correctly. On dev it is causing errors with fetching query. 

OR

fetch data once and send it to localStorage
*/
