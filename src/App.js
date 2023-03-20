import React, { useEffect, useState } from 'react'
import { GlobalContext } from "./context/GlobalContext"
import { ChakraProvider } from '@chakra-ui/react'
import Router from "./routes/Router"



function App() {
  
  const [ isAuth, setIsAuth ] = useState(false)

    useEffect(() => {
        const token = window.localStorage.getItem("labeddit-token")

        if (token) {
            setIsAuth(true)
        }
    }, [])

    const context = {
        isAuth: isAuth,
        setIsAuth: setIsAuth
    }

  return (
   
    <GlobalContext.Provider value={context}>
    <ChakraProvider>
        <Router />
    </ChakraProvider>
</GlobalContext.Provider>
      
     
   
  );
}

export default App;
