import styled from "styled-components"
import chat from "../assets/images/icon-chat.png"
import money from "../assets/images/icon-money.png"
import security from "../assets/images/icon-security.png"
import FeatureItem from "./FeatureItem"

const datas = [
  {
    img: chat,
    alt: "Chat icon",
    title: "You are our #1 priority",
    text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  },
  {
    img: money,
    alt: "Money icon",
    title: "More savings means higher rates",
    text: "The more you save with us, the higher your interest rate will be!",
  },
  {
    img: security,
    alt: "Security icon",
    title: "Security you can trust",
    text: "We use top of the line encryption to make sure your data and money is always safe.",
  },
]

const SectionStyleed = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 920px) {
    flex-direction: row;
  }
`

function Features() {
  return (
    <SectionStyleed>
      <h2 className="sr-only">Features</h2>
      {datas &&
        datas.map((item, index) => {
          return (
            <FeatureItem
              key={index}
              img={item.img}
              alt={item.alt}
              title={item.title}
              text={item.text}
            />
          )
        })}
    </SectionStyleed>
  )
}

export default Features
