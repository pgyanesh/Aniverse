import React from 'react'
import FirstPage from './Pages/FirstPage/FirstPage'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Series from './Pages/Series/Series'

const App = () => {
  return (
    <div>
     <BrowserRouter>
      <Routes>
      <Route path='/' element={<FirstPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/series' element={<Series/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
