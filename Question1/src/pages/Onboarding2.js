import React from 'react'
import { Link, Route, Redirect } from 'react-router-dom';
import './css/onbord.css'
import place from '../image/best.jpg'
export default function Onboarding2() {
  return (
    <div>
        <h1>Onboarding2</h1>
        <Link to='/Onboarding3'><button >Skip</button></Link><br></br>
        <img src={place} id='onbord1' alt="" srcset="" />
    </div>
  )
}
