import React, { createContext } from "react"
import { useStaticQuery, graphql } from "gatsby"

export const EstatesContext = createContext({})

const EstatesProvider = ({ children }) => {
  const query = useStaticQuery(graphql`
    query MyQuery {
      allContentfulEstate {
        edges {
          node {
            thumbnailUrl
            name
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
      <EstatesContext.Provider value={query.allContentfulEstate.edges}>
        {children}
      </EstatesContext.Provider>
    </>
  )
}

export default EstatesProvider
