import React from 'react'
import { Link, Route, Redirect } from 'react-router-dom';
import './css/onbord.css'
import selfie from '../image/selfie.jpg'
export default function Onboarding3() {
  return (
    <div>
        <h1>Onboarding3</h1>
        <Link to='/login'><button >Skip</button></Link><br></br>
        <img src={selfie} id='onbord1' alt="" srcset="" />
    </div>
  )
}
