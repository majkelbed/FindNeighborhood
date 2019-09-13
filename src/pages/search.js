import React from "react"
import styled from "styled-components"
import SearchAndEstatesBinder from "@components/searchAndEstatesBinder/searchAndEstatesBinder"

const SearchPage = () => (
  <Wraper>
    <SearchAndEstatesBinder />
  </Wraper>
)

export default SearchPage

const Wraper = styled.div`
  margin-top: 2em;
  padding: 3em;
`
