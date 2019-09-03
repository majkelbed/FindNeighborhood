import React, { useContext, useState } from "react"
import { equals } from "ramda"

import { EstatesContext } from "@context/estates/estates"

import Select from "./select/select"
import { Button, Form } from "./search-presentation"
import { usePropMapUniqBy, renderPropFromData } from "./search-functions"

const Search = ({ passSearchParams }) => {
  const estates = useContext(EstatesContext)
  const [currentCity, setCurrentCity] = useState("")
  const [currentStreet, setCurrentStreet] = useState("")
  const cityOptions = usePropMapUniqBy(estates, "city", renderPropFromData)
  const streetOptionsBasedOnSelectedCity = usePropMapUniqBy(
    estates.filter(({ city }) => equals(city, currentCity)), //streets only for current city
    "street",
    renderPropFromData
  )
  function resetSearchParams() {
    setCurrentCity("")
    setCurrentStreet("")
  }

  function handleSubmit(e) {
    e.preventDefault()
    passSearchParams({ city: currentCity, street: currentStreet })
  }

  function handleReset() {
    resetSearchParams()
    passSearchParams({ city: "", street: "" })
  }

  // TODO: Make custom,accesible select dropdowns.
  return (
    <Form
      onSubmit={e => handleSubmit(e)}
      onReset={() => handleReset()}
      className="search"
    >
      <Select
        state={[currentCity, setCurrentCity]}
        placeholder="City"
        className="search_select--city"
      >
        {cityOptions}
      </Select>
      <Select
        state={[currentStreet, setCurrentStreet]}
        placeholder="Street"
        className="search_select--street"
      >
        {streetOptionsBasedOnSelectedCity}
      </Select>
      <Button type="submit" className="search_submit">
        Find
      </Button>
      <Button type="reset" className="search_reset">
        Clear
      </Button>
    </Form>
  )
}

export default Search
