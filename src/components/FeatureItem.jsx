import styled from "styled-components"

const FeatureItemStyled = styled.div`
  flex: 1;
  padding: 2.5rem;
`
const FeatureIcon = styled.img`
  width: 100px;
  border: 10px solid #00bc77;
  border-radius: 50%;
  padding: 1rem;
`
const FeatureItemTitle = styled.h3`
  color: #222;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`

function FeatureItem({ img, alt, title, text }) {
  return (
    <FeatureItemStyled>
      <FeatureIcon src={img} alt={alt} />
      <FeatureItemTitle>{title}</FeatureItemTitle>
      <p>{text}</p>
    </FeatureItemStyled>
  )
}

export default FeatureItem
