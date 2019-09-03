import styled from "styled-components"

export const Form = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin: 2em;
  padding: 1em;

  background: ${({ theme }) => theme.gradients.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
`
export const Button = styled.button`
  height: 40px;

  padding: 0 2.5em;

  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
`
