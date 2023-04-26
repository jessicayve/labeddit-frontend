import { ContainerHeader } from "./HeaderStyled"
import logoPequena from "../assets/logoPequena.png"
import { goToLoginPage } from "../routes/coordinator"
import { useLocation, useNavigate } from "react-router-dom"

const Header = () => {

  const location = useLocation()
  const navigate = useNavigate()

  return (

    <ContainerHeader>
      
      <div>
        {location.pathname === "/signup" ?

          <h2 onClick={() => goToLoginPage(navigate)}>Login</h2>
          :
          <h2 onClick={() => goToLoginPage(navigate)}>Logout</h2>

        }

      </div>
    </ContainerHeader>

  )
}

export default Header

