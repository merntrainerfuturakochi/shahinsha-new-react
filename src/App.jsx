import {BrowserRouter,Route,Routes} from 'react-router'
import First from './pages/First'
import Second from './pages/Second'
import Form from './pages/Form'


function App(){ 
  
  return (
    <BrowserRouter>
<Routes>
<Route path='/' element={<First/>}/>
<Route path='/second' element={<Second/>}/>
<Route path='/form' element={<Form/>}/>
</Routes>
</BrowserRouter>
  )
}

export default App



