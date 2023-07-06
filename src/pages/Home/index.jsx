import styled from "styled-components"
import Hero from "../../components/Hero"
import Features from "../../components/Features"

const MainStyled = styled.main`
  flex: 1;
`

function Home(props) {
  return (
    <MainStyled>
      <Hero />
      <Features />
    </MainStyled>
  )
}

export default Home
