import {BrowserRouter,Route,Routes} from 'react-router'
import First from './pages/First'
import Second from './pages/Second'
import Third from './pages/Third'
import { createContext } from 'react'

export let Appcontext=createContext()

function App(){ 
  
  let a={
    name:"shahinsha",
    age:23,
    place:"thrissur"
  }

  return (
    <BrowserRouter>
    <Appcontext.Provider value={a}>
<Routes>
<Route path='/' element={<First/>}/>
<Route path='/second' element={<Second/>}/>
<Route path='/third' element={<Third/>}/>
</Routes>
</Appcontext.Provider>
</BrowserRouter>
  )
}

export default App



