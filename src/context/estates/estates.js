import React, { createContext } from "react"
import { useStaticQuery, graphql } from "gatsby"

export const EstatesContext = createContext({})

const EstatesProvider = ({ children }) => {
  const query = useStaticQuery(graphql`
    query estates {
      allContentfulEstate {
        edges {
          node {
            city
            name
            street
            thumbnailUrl
            contentful_id
            price
            offertType
            location {
              lat
              lon
            }
            childContentfulEstateDescriptionRichTextNode {
              json
            }
          }
        }
      }
    }
  `)
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
