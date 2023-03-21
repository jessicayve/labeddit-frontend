import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import {GlobalContext} from "../../context/GlobalContext"
import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import { TOKEN_NAME,   BASE_URL } from '../../constants/url'
import Header from '../../components/Header'
import { goToLoginPage } from '../../routes/coordinator'
import { CardContainer } from '../../components/CardPostStyled'
import likeIcon from "../../assets/likeIcon.png"
import dislikeIcon from "../../assets/dislikeIcon.png"
import comentario from "../../assets/comentario.png"
import { Linha } from '../LoginPage/LoginPageStyled'
import { PostBox } from '../FeedPage/FeedPageStyled'
import CardPost from '../../components/CardPost'





const DetailsPage = (props) => {

  const navigate = useNavigate()

  const context = useContext(GlobalContext)

  const {posts, fetchPosts} = context 

  const [isLoading, setIsLoading] = useState(false)

  const [postContent, setPostContent] = useState("")

  useEffect(() => {
    const token = window.localStorage.getItem(TOKEN_NAME);

    if (!token) {
      goToLoginPage(navigate);
    } else {
      fetchPosts();
    }
  }, [])

  const createPost = async (e) =>{
    e.preventDefault()
    setIsLoading(true)

    try {
      const token = window.localStorage.getItem(TOKEN_NAME)

      const config = {
        headers: {
          Authorization: token
        }
      }

      const body = {
        content: postContent
      }

      await axios.post(BASE_URL + "/posts", body, config)

      setPostContent("")
      setIsLoading(false)
      fetchPosts()
    } catch (error) {
      console.error(error?.response?.data)
    }
  }

  return (
   <>
   <Header/>
   <PostBox>
   <form onSubmit={createPost}>
      <section>
        <input 
        value={postContent} 
        onChange={(e) => setPostContent(e.target.value)}
        placeholder="Escreva seu post..."  />

      </section>

      <button disabled={isLoading}>Postar</button>

      </form>
    <Linha/>

    </PostBox>
    {posts.map((post) => {
      return <CardPost key={post.id} post={post}  />;
    })}
    
   </>
  )
}

export default DetailsPage