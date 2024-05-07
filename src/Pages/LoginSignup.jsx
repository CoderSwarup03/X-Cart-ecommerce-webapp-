import React from 'react'
import './Css/loginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Enter Your Name'/>
          <input type="email" placeholder='Enter Email Address'/>
          <input type="password" placeholder='Enter Password'/>
        </div>
        <button>Submit</button>
        <p className="loginsignup-login">
          Already have an account?<span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup