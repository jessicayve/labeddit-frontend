import { CardContainer } from "./CardPostStyled"
import likeIcon from "../assets/likeIcon.png"
import dislikeIcon from "../assets/dislikeIcon.png"
import comentario from "../assets/comentario.png"
import { useContext, useState } from "react"
import { GlobalContext } from "../context/GlobalContext"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BASE_URL, TOKEN_NAME } from "../constants/url"
import {goToDetailsPage} from "../routes/coordinator"



const CardPost = (props) => {
    const navigate = useNavigate()

    const { post } = props

    const context = useContext(GlobalContext)

    const { fetchPosts } = context

    const [isLoading, setIsLoading] = useState(false)

    const like = async () => {
        setIsLoading(true)

        try {
            const token = window.localStorage.getItem(TOKEN_NAME)

            const config = {
                headers: {
                    Authorization: token
                }
            }

            const body = {
                like: true
            }

            await axios.put(BASE_URL + `/posts/${post.id}/like`, body, config)
            setIsLoading(false)
            fetchPosts()
        } catch (error) {
            console.error(error?.response?.data)
        }
    }

    const dislike = async () => {
        setIsLoading(true)

        try {
            const token = window.localStorage.getItem(TOKEN_NAME)

            const config = {
                headers: {
                    Authorization: token
                }
            }

            const body = {
                like: false
            }

            await axios.put(BASE_URL + `/posts/${post.id}/like`, body, config)
            setIsLoading(false)
            fetchPosts()
        } catch (error) {
            console.error(error?.response?.data)
        }
    }

    

    return (
        <CardContainer >
            <div>
                <h2>Enviado por:{props.post.creator.creatorName} </h2>
                <p>{props.post.content} </p>

                <div>
                    <span className="likes" >

                        <img
                            src={likeIcon}
                            onClick={() => like(post.id)}
                            style={{ cursor: "pointer" }}
                            alt="like" />

        {" "}  {post.likes}

                        <img
                            src={dislikeIcon}
                            alt="dislike"
                            onClick={() => dislike(post.id)}
                            style={{ cursor: "pointer" }} />
                
                          

                    </span>

                    <span className="comentario">
                        <img src={comentario}
                            alt="comentario" 
                           
                            />
                        

                    </span>
                </div>
            </div>
        </CardContainer>
    )

}
export default CardPost