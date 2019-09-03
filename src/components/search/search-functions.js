import React from "react"
import { uniqBy } from "ramda"

export function renderPropFromData(data, prop) {
  return data.map(entry => (
    <option key={entry[prop]} value={entry[prop]}>
      {entry[prop]}
    </option>
  ))
}

export function usePropMapUniqBy(data, prop, render) {
  const result = uniqBy(entry => entry[prop], data)
  return render(result, prop)
}
