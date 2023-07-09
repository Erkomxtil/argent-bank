import React from "react"
import styled from "styled-components"

const ErrorWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Error404 = styled.span`
  font-size: 60px;
  color: #00bc77;
  font-weight: bold;
`

function Error() {
  return (
    <ErrorWrapper>
      <Error404>404</Error404> <br />
      Error,
      <br />
      Sorry this page does not exist!
    </ErrorWrapper>
  )
}

export default Error
