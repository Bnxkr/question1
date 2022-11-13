import React from 'react'
import { Link, Route, Redirect } from 'react-router-dom';

export default function Forgot() {
  return (
    <div>
        <h1>Forgot Password</h1><br></br>
        <Link to='./login'><button>Back</button></Link><br></br>
        <p>Please select option to send link to reset password</p><br></br>
        <Link to='./login'><button>Send to your email</button></Link><br></br>
        <Link to='./login'><button>Send to your phone number</button></Link><br></br>


    </div>
  )
}
