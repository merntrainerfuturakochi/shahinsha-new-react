import {BrowserRouter,Route,Routes} from 'react-router'
import Detailpage from "./Pages/Detailpage"
import Home from "./Pages/Home"
import Single from "./Pages/Single"
import Order from './Pages/Order'

function App(){  
  return (
    <BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/abc/:dishName' element={<Single/>}/>
  <Route path='/xyz/:id' element={<Detailpage/>}/>
  <Route path='/success' element={<Order/>}/>
</Routes>
</BrowserRouter>
  )
}

export default App



