import React from 'react'
import FirstPage from './Pages/FirstPage/FirstPage'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Series from './Pages/Series/Series'
import Movies from './Pages/Movies/Movies'

const App = () => {
  return (
    <div>
     <BrowserRouter>
      <Routes>
      <Route path='/' element={<FirstPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/series' element={<Series/>}/>
      <Route path='/movies' element={<Movies/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
