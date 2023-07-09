import { styled } from "styled-components"
import Account from "../../components/Account"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { changeUserProfil } from "../../Services/requestApi"
import { getLastName, getfirstName } from "../../utils/store"

const MainStyled = styled.main`
  background-color: #12002b;
  display: flex;
  flex: 1;
  justify-content: flex-start;
  flex-direction: column;
`
const Header = styled.div`
  color: #fff;
  margin-bottom: 2rem;
`
const EditButton = styled.button`
  border: none;
  background-color: #00bc77;
  color: #ffffff;
  font-weight: bold;
  padding: 10px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &.on {
    display: none;
  }
  &.off {
    text-align: center;
  }
`
const FormStyled = styled.form`
  display: none;

  &.on {
    display: block;
  }
`
const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 10px;
`

const InputStyled = styled.input`
  height: 36px;
  color: ##2c3e50;
  padding-left: 6px;
  box-sizing: border-box;
  font-weight: bold;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`

const ButtonAction = styled.button`
  width: 100px;
  border: 0;
  background: #00bc77;
  color: #ffffff;
  padding: 10px 0;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`

function Profile() {
  const stateToken = useSelector((state) => state.token)
  const firstName = useSelector((state) => state.firstName)
  const lastName = useSelector((state) => state.lastName)
  const [buttonAction, setButtonAction] = useState("off")
  const [newFirstName, setNewFirstName] = useState(firstName)
  const [newLastName, setNewLastName] = useState(lastName)
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : stateToken

  const saveForm = (e) => {
    e.preventDefault()
    setButtonAction("off")
    changeUserProfil(token, newFirstName, newLastName)
    dispatch(getfirstName(newFirstName))
    dispatch(getLastName(newLastName))
  }

  const resetForm = () => {
    document.getElementById("myform").reset()
  }

  if (!token) {
    return <p>You are not allowed to view this page</p>
  }

  return (
    <MainStyled>
      <Header>
        <h1>
          Welcome back
          <br />
          {firstName} {lastName}!
        </h1>
        <FormStyled id="myform" className={buttonAction}>
          <InputWrapper>
            <InputStyled
              type="text"
              id="firstName"
              placeholder={firstName}
              onChange={(e) => setNewFirstName(e.target.value)}
            />
            <InputStyled
              type="text"
              id="lastName"
              placeholder={lastName}
              onChange={(e) => setNewLastName(e.target.value)}
            />
          </InputWrapper>
          <ButtonWrapper>
            <ButtonAction type="submit" onClick={(e) => saveForm(e)}>
              Save
            </ButtonAction>
            <ButtonAction type="reset" onClick={() => resetForm()}>
              Cancel
            </ButtonAction>
          </ButtonWrapper>
        </FormStyled>
        <EditButton
          className={buttonAction}
          onClick={() => setButtonAction("on")}
        >
          Edit Name
        </EditButton>
      </Header>
      <h2 className="sr-only">Accounts</h2>
      <Account
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      />
      <Account
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
      />
      <Account
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance"
      />
    </MainStyled>
  )
}

export default Profile
