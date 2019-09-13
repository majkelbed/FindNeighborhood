import styled from "styled-components"

const StyledEstate = styled.div`
  display: grid;
  grid-template-rows: 200px auto;
  align-items: center;

  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.15);
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  border: none;

  overflow: hidden;

  transform: ${props => (props.isHover ? "scale(1.2)" : "scale(1)")};
`

const StyledDetails = styled(StyledEstate)`
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
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
  background: gray ${({ src }) => `url(${src})`} no-repeat;
  background-size: cover;
  background-position: center;
`

export { StyledEstate, StyledDetails, Info, Cover, Details }
