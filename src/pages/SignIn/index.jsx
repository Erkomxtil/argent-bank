import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { getUser, postForm } from "../../Services/requestApi"
import { getLastName, getToken, getfirstName } from "../../utils/store"

const MainStyled = styled.main`
  background-color: #12002b;
  display: flex;
  flex: 1;
`

const SectionStyled = styled.section`
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 2rem;
  height: 100%;

  i.sign-in-icon {
    font-size: 5rem;
  }
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;

  label {
    font-weight: bold;
  }

  input {
    padding: 5px;
    font-size: 1.2rem;
  }
`

const InputRemember = styled.div`
  display: flex;
`
const ButtonStyled = styled.button`
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
const ErrorMessage = styled.p`
  color: #ff0000;
`

function SignIn() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [status, setStatus] = useState()
  const [checkBox, setCheckBox] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = await postForm(userName, password)
    setStatus(data.status)

    if (data.status === 200) {
      const user = await getUser(data.body.token)
      if (checkBox === "on") {
        localStorage.setItem("token", data.body.token)
        dispatch(getToken(data.body.token))
      }
      dispatch(getToken(data.body.token))
      dispatch(getfirstName(user.firstName))
      dispatch(getLastName(user.lastName))
      navigate("/profile")
    }
  }

  return (
    <MainStyled>
      <SectionStyled>
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <InputWrapper>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </InputWrapper>
          <InputRemember>
            <input
              type="checkbox"
              id="remember-me"
              onClick={(e) => setCheckBox(e.target.value)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </InputRemember>
          <ButtonStyled type="submit">Sign In</ButtonStyled>
          {status === 400 && (
            <ErrorMessage>Invalid Username or Password</ErrorMessage>
          )}
        </form>
      </SectionStyled>
    </MainStyled>
  )
}

export default SignIn
