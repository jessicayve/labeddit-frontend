import { Container, Input, Button, TextoContainer, Titulo } from "../SignUpPage/SignUpPageStyled"
import Header from "../../components/Header"
import { useEffect, useState, useContext } from 'react'
import { useNavigate } from "react-router"
import axios from "axios"
import { BASE_URL } from "../../constants/url"
import { goToFeedPage } from "../../routes/coordinator"
import CircularProgress from '@mui/material/CircularProgress'
import { GlobalContext } from '../../context/GlobalContext'
import logoShare from '../../assets/logoShare.png'

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

    return (
        <>
        <Container>
            <Header />

            <Titulo>
                Welcome to LabEddit ;)
                
            </Titulo>
           
            <Input
                value={form.name}
                onChange={onChangeForm}
                name="name"
                placeholder="Nickname"
                autoComplete='off' />


            <Input
                value={form.email}
                name={"email"}
                onChange={onChangeForm}
                placeholder="E-mail"
                autoComplete='off' />

            <Input
                name={"password"}
                value={form.password}
                onChange={onChangeForm}
                type={"password"}
                placeholder="Password" />


            <TextoContainer>
                <div>
                    <p>By continuing, you are agreeing to our
                        <span className="textocolorido">  User agreement </span>
                        and our <span className="textocolorido">  Privacy Policy </span> <br /> </p>

                    <p> <input type="checkbox"></input> I agree to receive emails about cool stuff <br /> from LabEddit  </p>
                </div>

            </TextoContainer>

            <Button onClick={signup} autoComplete="off"> {isLoading ? <CircularProgress color="inherit" size={30} /> : "Cadastrar"}</Button>
            </Container>
        </>
    )
}

export default SignupPage
