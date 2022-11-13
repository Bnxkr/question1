import React from 'react'
import { Link, Route, Redirect } from 'react-router-dom';
import room from '../image/room.jpg'
import './css/onbord.css'
export default function Onboarding1() {
  return (
    
        <div>
        <h1>Onboarding1</h1>
        <Link to='/Onboarding2'><button >Skip</button></Link><br></br>
        <img src={room} id='onbord1' alt="" srcset="" />
    </div>
    
    
  )
}
