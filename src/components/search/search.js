import React from "react"
import "./search.scss"

const Search = () => {
  return (
    <form action="" className="search">
      <select className="search_select--city"></select>
      <select className="search_select--street"></select>
      <select className="search_select--area"></select>
    </form>
  )
}

export default Search
