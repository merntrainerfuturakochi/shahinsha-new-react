import {BrowserRouter,Route,Routes} from 'react-router'
import Detailpage from "./Pages/Detailpage"
import Home from "./Pages/Home"
import Single from "./Pages/Single"

function App(){  
  return (
    <BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/abc/:foodname' element={<Single/>}/>
  <Route path='/xyz/:id' element={<Detailpage/>}/>
</Routes>
</BrowserRouter>
  )
}

export default App



