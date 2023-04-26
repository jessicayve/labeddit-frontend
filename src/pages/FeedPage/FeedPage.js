import Header from "../../components/Header"
import { useNavigate } from "react-router-dom"
import {GlobalContext} from "../../context/GlobalContext"
import { useContext, useEffect, useState } from "react";
import { goToLoginPage } from "../../routes/coordinator"
import { PostBox } from "./FeedPageStyled"
import axios from "axios"
import { Line } from "../LoginPage/LoginPageStyled"
import { BASE_URL } from "../../constants/url"
import CardPost from "../../components/CardPost"



const FeedPage = () => {

  const navigate = useNavigate()

  const context = useContext(GlobalContext)

  const {posts, fetchPosts} = context 

  const [isLoading, setIsLoading] = useState(false)

  const [postContent, setPostContent] = useState("")

  useEffect(() => {
    const token = window.localStorage.getItem("labeddit-token");

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
      const token = window.localStorage.getItem("labeddit-token")

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
  
    <PostBox  >
   <form onSubmit={createPost}>
      <section>
        <input 
        value={postContent} 
        onChange={(e) => setPostContent(e.target.value)}
        placeholder="Write your post..."  />

      </section>

      <button onClick={createPost} disabled={isLoading}>Post</button>

      </form>
    <Line/>

    
    {posts.map((post) => {
      return <CardPost key={post.id} post={post}  />
    })}
 </PostBox>

</>

  )
}

export default FeedPage