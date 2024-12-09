import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Sample from "./Pages/Sample"
import Hello from "./Pages/Hello"
import Hai from "./Pages/Hai"
import { useState } from "react"
import axios from "axios"


function App(){  

  const abc=createBrowserRouter([
    {
      path:"/",
      element:<Sample/>
    },
    {
      path:"/hai",
      element:<Hai/>
    },
    {
      path:"/hello",
      element:<Hello/>
    },
  
  ])

  return (
    <>
<RouterProvider router={abc}></RouterProvider>
    </>
  )
}

export default App



