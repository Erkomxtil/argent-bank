import React, { useEffect } from "react"
import Logo from "../assets/images/argentBankLogo.png"
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getToken } from "../utils/store"

const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;

  a {
    font-weight: bold;
    color: #2c3e50;
  }
`

const MainNavLogo = styled(NavLink)`
  display: flex;
  align-items: center;
`

const MainNavItem = styled(NavLink)`
  text-decoration: none;
  margin-right: 0.5rem;

  span {
    margin-left: 6px;
  }

  span:hover {
    text-decoration: underline;
  }
`

const MainNavLogoImage = styled.img`
  max-width: 100%;
  width: 200px;
`

function Header() {
  const token = useSelector((state) => state.token)
  const firstName = useSelector((state) => state.firstName)
  const dispatch = useDispatch()

  const deleteToken = () => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token")
    }
    dispatch(getToken(null))
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(getToken(localStorage.getItem("token")))
    }
  }, [dispatch])

  return (
    <NavStyled>
      <MainNavLogo to="/">
        <MainNavLogoImage src={Logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </MainNavLogo>
      <div>
        {token ? (
          <MainNavItem to="/">
            <i className="fa fa-user-circle"></i>&nbsp;{firstName}&nbsp;
            <i className="fa fa-sign-out"></i>
            <span onClick={() => deleteToken()}>Sign Out</span>
          </MainNavItem>
        ) : (
          <MainNavItem to="/sign-in">
            <i className="fa fa-user-circle"></i>
            <span>Sign In</span>
          </MainNavItem>
        )}
      </div>
    </NavStyled>
  )
}

export default Header
