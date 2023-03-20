import {Container, Input,Button, BtnContinuar, Linha} from "./LoginPageStyled"
import logoLab from "../../assets/logoLab.png"
import { useState } from "react"

export const LoginPage = () => {

  const [form, setForm] = useState({
    email:"",
    password:""
  })

  const onChangeForm = (event) =>{
    setForm({ ...form, [event.target.name]: event.target.value });
  }

 

  const login = () =>{
    console.log(form)
    
  }
  
  return(
    <>
    
<Container>
<div>
    <img src={logoLab}></img>
    <p>O projeto de rede social da Labenu</p>  
</div>
</Container>

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

   <BtnContinuar onClick={login}  >Continuar</BtnContinuar>

   <Linha></Linha>
   
   <Button >Crie uma conta!</Button>

</>
)
}

export default LoginPage