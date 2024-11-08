import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Detailpage from "./Pages/Detailpage"
import Effect from "./Pages/Effect"


function App(){

  const abc=createBrowserRouter([
    {
      path:"/",
      element:<Effect/>
    },
    {
      path:"/detailpage/:name",
      element:<Detailpage/>
    }
  ])

  return (
    <>
<RouterProvider router={abc}></RouterProvider>
    </>
  )
}

export default App



