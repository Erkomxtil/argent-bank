import styled from "styled-components"
import background from "../assets/images/bank-tree.jpeg"

const HeroStyled = styled.div`
  background-image: url(${background});
  background-position: 0 33%;
  background-size: cover;
  background-repeat: no-repeat;
  height: 400px;
  position: relative;
`

const HeroContent = styled.section`
  position: absolute;
  top: 50px;
  right: 50px;
  width: 300px;
  margin: 2rem;
  padding: 2rem;
  background: white;
`
const Subtitle = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0;
  text-align: left;
`
const Text = styled.p`
  margin-bottom: 0;
  font-size: 1.2rem;
  text-align: left;
`

function Hero() {
  return (
    <HeroStyled>
      <HeroContent className="hero-content">
        <h2 className="sr-only">Promoted Content</h2>
        <Subtitle>No fees.</Subtitle>
        <Subtitle>No minimum deposit.</Subtitle>
        <Subtitle>High interest rates.</Subtitle>
        <Text>Open a savings account with Argent Bank today!</Text>
      </HeroContent>
    </HeroStyled>
  )
}

export default Hero
