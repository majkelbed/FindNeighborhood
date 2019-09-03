import React, { useContext, useState } from "react"
import styled from "styled-components"
import { isEmpty, equals } from "ramda"
import Estate from "@components/estate/estate"
import { EstatesContext } from "@context/estates/estates"
import Search from "@components/search/search"

function renderEstates(data) {
  return data.map((estate, index) => (
    <Estate key={estate.contentful_id} {...estate} index={index} />
  ))
}

const AllEstates = () => {
  const estates = useContext(EstatesContext)
  const [searchParams, setSearchParams] = useState({})
  return (
    <>
      <Search passSearchParams={data => setSearchParams(data)} />
      <StyledGrid>
        {renderEstates(
          isEmpty(searchParams)
            ? estates
            : estates.filter(
                ({ street, city }) =>
                  equals(street, searchParams.street) ||
                  (isEmpty(searchParams.street) &&
                    equals(city, searchParams.city)) ||
                  isEmpty(searchParams.city)
              )
        )}
      </StyledGrid>
    </>
  )
}

export default AllEstates

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2em;

  padding: 2em;
`
