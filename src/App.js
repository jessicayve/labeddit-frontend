import React, { useEffect, useState } from 'react'
import { GlobalContext } from "./context/GlobalContext"
import { ChakraProvider } from '@chakra-ui/react'
import Router from "./routes/Router"
import axios from "axios"
import { BASE_URL, TOKEN_NAME } from './constants/url'
import { GlobalStyle } from './GlobalStyle'


function App() {


const [posts, setPosts] = useState([]);

  useEffect(() => {
    const token = window.localStorage.getItem(TOKEN_NAME);

    if (token) {
      fetchPosts()
    }
  }, [])

  const fetchPosts = async () => {
    try {
      const token = window.localStorage.getItem(TOKEN_NAME);

      const config = {
        headers: {
          Authorization: token
        }
      };

      const response = await axios.get(BASE_URL + "/posts", config);

      setPosts(response.data)
    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data)
    }
  }

const context = {
  posts,
  fetchPosts
 
}
  return (
   
    <GlobalContext.Provider value={context}>
    <ChakraProvider>
    <GlobalStyle />
        <Router />
    </ChakraProvider>
</GlobalContext.Provider>
      
     
   
  );
}

export default App;
