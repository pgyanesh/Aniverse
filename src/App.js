import React from 'react'
import FirstPage from './Pages/FirstPage/FirstPage'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Pages/Login/Login'

const App = () => {
  return (
    <div>
     <BrowserRouter>
      <Routes>
      <Route path='/'element={<FirstPage/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
