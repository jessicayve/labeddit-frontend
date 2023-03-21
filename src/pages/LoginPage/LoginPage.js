import { Container, Input, Button, BtnContinuar, Linha } from "./LoginPageStyled"
import logoLab from "../../assets/logoLab.png"
import { useState } from "react"
import axios from "axios"
import { BASE_URL } from "../../constants/url"
import { goToFeedPage, goToSignupPage } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"
import CircularProgress from '@mui/material/CircularProgress'

export const LoginPage = () => {


  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const onChangeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }



  const login = async () => {
    try {

      setIsLoading(true)

      const body = {
        email: form.email,
        password: form.password
      }
      const response = await axios.post(
        `${BASE_URL}/users/login`,
        body
      )
      window.localStorage.setItem("labeddit-token", response.data.token)
      setIsLoading(false)
      
      goToFeedPage(navigate)


    } catch (error) {
      console.log(error.response.data)
      setIsLoading(false)
    }

  }

  return (
    <>

      <Container>
        <div>
          <img src={logoLab}></img>
          <p>O projeto de rede social da Labenu</p>
        </div>
      </Container>
      <form onSubmit={login} autoComplete="off"> 
      <Input
        value={form.email}
        onChange={onChangeForm}
        name="email"
        placeholder="E-mail"

      />


      <Input
        value={form.password}
        onChange={onChangeForm}
        name="password"
        type={"password"}
        placeholder="Senha"

      />
      
      </form>

      <BtnContinuar onClick={() => goToFeedPage(navigate)} >  {isLoading ?  <CircularProgress color="inherit"  /> : "Continuar"} </BtnContinuar>

      <Linha></Linha>

      <Button onClick={() => goToSignupPage(navigate)} >Crie uma conta!</Button>

    </>
  )
}

export default LoginPage