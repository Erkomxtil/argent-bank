import { styled } from "styled-components"

const AccountStyled = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 2rem;

  @media (min-width: 720px) {
    flex-direction: row;
  }
`
const AccoutContentWrapper = styled.div`
  width: 100%;
  flex: 1;

  &.cta {
    flex: 0;
  }
`
const AccoutTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: normal;
`
const AccoutAmount = styled.p`
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
`
const AccountDescription = styled.p`
  margin: 0;
`
const TransactionButtom = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border: none;
  background-color: #00bc77;
  color: #fff;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

function Account({ title, amount, description }) {
  return (
    <AccountStyled>
      <AccoutContentWrapper>
        <AccoutTitle>{title}</AccoutTitle>
        <AccoutAmount>{amount}</AccoutAmount>
        <AccountDescription>{description}</AccountDescription>
      </AccoutContentWrapper>
      <AccoutContentWrapper className="cta">
        <TransactionButtom className="transaction-button">
          View&nbsp;transactions
        </TransactionButtom>
      </AccoutContentWrapper>
    </AccountStyled>
  )
}

export default Account
