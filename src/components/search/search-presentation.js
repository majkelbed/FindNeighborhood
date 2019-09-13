import styled from "styled-components"

export const Form = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 1em;

  background: ${({ theme }) => theme.colors.white + "55"};
  border: none;
`
export const Button = styled.button`
  height: 40px;

  padding: 0 2.5em;

  border: none;
`
