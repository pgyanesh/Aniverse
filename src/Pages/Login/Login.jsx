import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
const LoginSignup = () => {
  const[showPassword,setShowPassword]=useState(false)
  const handleTogglePassword=()=>{
    setShowPassword(!showPassword);
  }

  return (
    <div className='login-container'>
      <div className="login-heading">
        <h1>Aniverse</h1>
      </div>
      <div className="login-box">
        <div id="login-title"><h2>Login</h2></div>
        <input id='login-email' type='email' placeholder='Email'/>
        <input id='login-password' type={showPassword?"text":"password"} onChange={handleTogglePassword} placeholder='Password' />
        <div className="login-showPassword">
        <input id='login-check' onChange={handleTogglePassword} type='checkbox'/><p>Show password</p>
        </div>
        <button id='login-button'>Login</button>
        <div className="login-link">
        <Link to='/register'>Create an account</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
