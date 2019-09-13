import { useStaticQuery, graphql } from "gatsby"

export function useEstates() {
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
  return query
}
