import React from "react"
import styled from "styled-components"

const Select = ({
  children,
  state = [{}, () => {}],
  placeholder = "",
  ...rest
}) => {
  const [value, setValue] = state
  return (
    <StyledSelect
      value={value}
      onChange={e => {
        e.preventDefault()
        setValue(e.target.value)
      }}
      {...rest}
    >
      <option value="">{placeholder}</option>
      {children}
    </StyledSelect>
  )
}

export default Select

const StyledSelect = styled.select`
  width: 250px;
  height: 40px;

  padding: 0.5em;
  margin: 0.25em;

  border: none;
`
