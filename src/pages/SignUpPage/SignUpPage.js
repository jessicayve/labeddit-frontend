import { Input, Button, TextoContainer, Titulo } from "../SignUpPage/SignUpPageStyled"
import  Header  from "../../components/Header"
import { useEffect, useState, useContext } from 'react'
import { useNavigate } from "react-router"
import axios from "axios"
import { BASE_URL } from "../../constants/url"
import { goToFeedPage } from "../../routes/coordinator"
import CircularProgress from '@mui/material/CircularProgress'
import { GlobalContext } from '../../context/GlobalContext'

const SignupPage = () => {



  const context = useContext(GlobalContext)
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)

  const [form, setForm] = useState({
      name: "",
      email: "",
      password: ""
  })


  const onChangeForm = (event) => {
      setForm({ ...form, [event.target.name]: event.target.value })
  }

  const signup = async () => {

  

      try {
          setIsLoading(true)

          const body = {
              name: form.name,
              email: form.email,
              password: form.password
          }

          const response = await axios.post(
              `${BASE_URL}/users/signup`,
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

  return(
    <>
<Header/> 

 <Titulo>  
Olá, boas vindas ao LabEddit ;)
</Titulo> 
<form onSubmit={signup}>
    <Input 
   value={form.name}
   onChange={onChangeForm}
   name="name"
   placeholder="Apelido"
   autoComplete='off'/>


    <Input
    value={form.email}  
    name={"email"} 
    onChange={onChangeForm} 
    placeholder="E-mail"
    autoComplete='off'/>

    <Input 
    name={"password"}
    value={form.password}  
    onChange={onChangeForm} 
    type={"password"} 
    placeholder="Senha"/>
</form>
<TextoContainer>
    <div>
  <p>Ao continuar, você concorda com o nosso
  <span className="textocolorido">  Contrato de usuário </span> 
  e nossa <span className="textocolorido"> Política de Privacidade </span> <br/> </p>
   
 <p> <input type="checkbox"></input> Eu concordo em receber emails sobre coisas legais <br/> no LabEddit  </p>
 </div>
  
</TextoContainer>

    <Button onClick={() => goToFeedPage(navigate)} autoComplete="off"> {isLoading ?  <CircularProgress color="inherit"  /> : "Cadastrar"}</Button>

</>
)
}

export default SignupPage
