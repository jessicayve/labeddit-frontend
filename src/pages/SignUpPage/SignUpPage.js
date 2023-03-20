import { Input, Button, TextoContainer, Titulo } from "../SignUpPage/SignUpPageStyled"
import  Header  from "../../components/Header"
import { useState } from "react"

const SignupPage = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });


  const changeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  }


  const signup = () =>{
    console.log(form)
    
  }

  return(
    <>
<Header/> 

 <Titulo>  
Olá, boas vindas ao LabEddit ;)
</Titulo> 

    <Input 
    value={form.name} 
    name={"name"} 
    onChange={changeForm}  
    placeholder="Apelido" />

    <Input 
    value={form.email}  
    name={"email"} 
    onChange={changeForm} 
    placeholder="E-mail"/>

    <Input 
    name={"password"}
    value={form.password}  
    onChange={changeForm} 

    type={"password"} 
    placeholder="Senha"/>

<TextoContainer>
    <div>
  <p>Ao continuar, você concorda com o nosso
  <span className="textocolorido">  Contrato de usuário </span> e nossa <span className="textocolorido"> Política de Privacidade </span> <br/> </p>
   
     <p> <input type="checkbox"></input> Eu concordo em receber emails sobre coisas legais <br/> no LabEddit  </p>
 </div>
</TextoContainer>

    <Button onClick={()=>signup()} >Cadastrar</Button>

</>
)
}

export default SignupPage
