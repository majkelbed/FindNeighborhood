const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const estateTemplate = path.resolve(
    `src/components/estate/estateDetails/estateDetails.js`
  )

  return graphql(`
    query MyQuery {
      allContentfulEstate {
        edges {
          node {
            city
            name
            street
            thumbnailUrl
            contentful_id
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
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allContentfulEstate.edges.forEach(
      ({
        node: {
          name,
          city,
          street,
          contentful_id,
          thumbnailUrl,
          location: { lat, lon: lng },
          childContentfulEstateDescriptionRichTextNode: description,
        },
      }) => {
        createPage({
          path: `/${city}/${street}/${contentful_id}`,
          component: estateTemplate,
          context: {
            name,
            city,
            street,
            thumbnailUrl,
            lat,
            lng,
            description,
          },
        })
      }
    )
  })
}
