import styled from "styled-components"

const StyledEstate = styled.div`
  display: grid;
  grid-template-rows: 200px auto;
  align-items: center;

  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.15);
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  border: none;

  overflow: hidden;
`
const Info = styled.div`
  padding: 1.2em 1em;
`

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Cover = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  background: gray
    ${({ src: [a, b] }) =>
      `url(https://source.unsplash.com/160${a}x90${b}/?kitchen,bedroom,livingroom )`}
    no-repeat;
  background-size: cover;
  background-position: center;
`

export { StyledEstate, Info, Cover, Details }
