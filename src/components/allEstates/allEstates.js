import React, { useContext } from "react"
import Estate from "@components/estate/estate"
import { EstatesContext } from "@context/estatesProvider/estatesProvider"

const AllEstates = () => {
  const data = useContext(EstatesContext)
  return (
    <>
      {console.log(data)
      /* {data.map(({ node }) => (
        <Estate key={node.name} {...node} />
      ))} */
      }
    </>
  )
}

export default AllEstates
