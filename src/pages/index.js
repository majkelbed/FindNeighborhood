import React, { useContext } from "react"
import { navigate } from "@reach/router"
import styled from "styled-components"
import { useSpring, animated, config } from "react-spring"
import bg from "@img/indexBG.jpg"
import Search from "@components/search/search"
import { Button } from "@components/search/search-presentation"
import { SearchParamsContext } from "@context/searchParams/searchParams"

function calculateOffset(mouseX, mouseY, windowX, windowY) {
  return [(mouseX / windowX) * 20, (mouseY / windowY) * 20]
}

const IndexPage = () => {
  const [{ xy }, setXY] = useSpring(() => ({
    xy: [0.5, 0.5],
    config: config.gentle,
  }))
  function handleMouseMove(x, y) {
    setXY({
      xy: calculateOffset(x, y, window.innerWidth, window.innerHeight),
    })
  }
  const translateBG = {
    transform: xy.interpolate((x, y) => `translate(${x}px,${y}px) scale(1.2)`),
  }
  const [, setParams] = useContext(SearchParamsContext)
  return (
    <>
      <FullPageWrap
        onMouseMove={({ clientX: x, clientY: y }) => handleMouseMove(x, y)}
      >
        <ParallaxBG style={translateBG} />
        <Content>
          <GridArea area={"info"}>
            <h1>Find your home today</h1>
            <p>
              Cheesecake soufflé dessert. Donut apple pie I love caramels
              topping.
            </p>
          </GridArea>
          <GridArea area={"search"}>
            <Search
              render={() => (
                <>
                  <Button type="submit" onClick={() => navigate("/search")}>
                    Find
                  </Button>
                </>
              )}
            />
          </GridArea>
        </Content>
      </FullPageWrap>
    </>
  )
}

export default IndexPage

const AnimatedBG = animated.div
const ParallaxBG = styled(AnimatedBG)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -10;
  width: 100%;
  height: 100%;

  background: url(${bg}) no-repeat;
  background-size: cover;
  background-position: center;
`
const FullPageWrap = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`
const Content = styled.div`
  display: grid;
  grid-template-rows: 1fr auto 2fr auto 1fr;
  grid-template-areas: "..." "info" "..." "search" "...";
  z-index: 10;

  padding: 0 3em;

  height: 100%;
  color: ${({ theme }) => theme.colors.white};
`
const GridArea = styled.div`
  grid-area: ${({ area }) => area};
`
