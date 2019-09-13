import React, { useContext, useState } from "react"
import Search from "@components/search/search"
import MarkersAndEstatesBinder from "@components/markersAndEstatesBinder/markersAndEstatesBinder"
import { EstatesContext } from "@context/estates/estates"
import { SearchParamsContext } from "@context/searchParams/searchParams"
import { isEmpty, equals } from "ramda"

function equalOrEmpty(target, toCompare) {
  return isEmpty(target) || equals(target, toCompare)
}

const SearchAndEstatesBinder = () => {
  const estates = useContext(EstatesContext)
  const [searchParams] = useContext(SearchParamsContext)

  const estatesFiltredBySearchParams = estates.filter(
    ({ street, city }) =>
      equalOrEmpty(searchParams.city, city) &&
      equalOrEmpty(searchParams.street, street)
  )

  return (
    <div>
      <Search />
      <MarkersAndEstatesBinder estates={estatesFiltredBySearchParams} />
    </div>
  )
}

export default SearchAndEstatesBinder
