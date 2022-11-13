import React from 'react'
import { Link, Route, Redirect } from 'react-router-dom';
import './css/review.css'
import Ho1 from '../image/mardan.jpg'
import {GrLinkPrevious, GrLinkNext} from 'react-icons/gr'
export default function Seereview() {
  return (
    <div>
        <div>
            <Link to='/booking' style={{textDecoration: 'none'}}><h1>Back</h1></Link>
            <img src={Ho1} id='imgs' alt="" srcset="" />
        </div>
        <div class='datess'>
            <strong><p>Check in</p></strong>
           <strong><p id='seeout'>Check out</p></strong>  <br></br>
           <strong><p id='one'>Thu, 25 Feb 22</p></strong>
           <strong><p id='two'>Sat, 26 Feb 22</p></strong>
           <strong><p id='loremm' >Dummy content lorem velit qui adipisicing sunt do 
                    reprehenderit ad laborum tempor ullamco exercitation</p></strong>
        </div><br></br>
        <div class='slide'>
            
            <p></p>
            <Link to='/rev3'><GrLinkPrevious id='back'/></Link>
            <Link to='/rev2'><GrLinkNext id='next'/></Link>
        </div>
    </div>
  )
}
