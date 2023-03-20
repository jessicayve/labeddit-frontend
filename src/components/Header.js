import { ContainerHeader } from "./HeaderStyled"
import logoPequena from "../assets/logoPequena.png"
import { goToLoginPage } from "../routes/coordinator"
import { useLocation, useNavigate } from "react-router-dom"

const Header = () => {

  const location = useLocation()
  const navigate = useNavigate()

  return (

    <ContainerHeader>
      <img src={logoPequena} alt="logo"></img>
      <div>
        {location.pathname === "/signup" ?

          <h2 onClick={() => goToLoginPage(navigate)}>Entrar</h2>
          :
          <h2 onClick={() => goToLoginPage(navigate)}>Logout</h2>

        }

      </div>
    </ContainerHeader>

  )
}

export default Header

