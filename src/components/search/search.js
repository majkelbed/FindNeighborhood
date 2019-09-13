import React, { useContext, useState } from "react"
import { equals } from "ramda"

import { EstatesContext } from "@context/estates/estates"
import { SearchParamsContext } from "@context/searchParams/searchParams"

import Select from "./select/select"
import { Form } from "./search-presentation"
import { usePropMapUniqBy, renderPropFromData } from "./search-functions"

const Search = ({ render = () => {} }) => {
  const estates = useContext(EstatesContext)
  const [{ city: currCity, street: currStreet }, setParams] = useContext(
    SearchParamsContext
  )
  const cityOptions = usePropMapUniqBy(estates, "city", renderPropFromData)
  const streetOptionsBasedOnSelectedCity = usePropMapUniqBy(
    estates.filter(({ city }) => equals(city, currCity)),
    "street",
    renderPropFromData
  )
  function resetSearchParams() {
    setParams({ city: "", street: "" })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setParams({ city: currCity, street: currStreet })
  }

  function handleReset() {
    resetSearchParams()
    setParams({ city: "", street: "" })
  }

  // TODO: Make custom,accesible select dropdowns.
  return (
    <Form
      onSubmit={e => handleSubmit(e)}
      onReset={() => handleReset()}
      className="search"
    >
      <Select
        state={[currCity, value => setParams({ city: value, street: "" })]}
        placeholder="City"
        className="search_select--city"
      >
        {cityOptions}
      </Select>
      <Select
        state={[
          currStreet,
          value => setParams({ city: currCity, street: value }),
        ]}
        placeholder="Street"
        className="search_select--street"
      >
        {streetOptionsBasedOnSelectedCity}
      </Select>
      {render()}
    </Form>
  )
}

export default Search
