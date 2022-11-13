import React from 'react'
import './css/account.css'
import beach from '../image/beach.jfif'
import prof from '../image/Ellipse 33.png'
import emoji from'../image/Memoji Boys 6-18.png'
import umbrella from '../image/umbrella.png'
import img9 from '../image/im9.png'
import {FaCircleNotch} from 'react-icons/fa'
import {MdOutlineExplore} from 'react-icons/md'
import {BsBookmarkCheck} from 'react-icons/bs'
import {BiUser} from 'react-icons/bi'
import {IoIosNotificationsOutline} from 'react-icons/io'
import { Link, Route, Redirect } from 'react-router-dom';
import hot1 from '../image/hot1.png'
import hot2 from '../image/hot2.png'
import hot3 from '../image/hot3.png'
export default function Account() {
  return (
    <div>
      <div class='bod'>
        <div class='part1'>
            <img src={beach} class='bcg' alt="" srcset="" />
            <h1 class='ac'>Account</h1>
            <Link to='/logout' style={{textDecoration: 'none'}}><h4 class='out'  >Sign out</h4></Link>
            <img src={prof} class='proff' alt="" srcset="" />
            <p class='name'>Nirmala Azalea</p>
            <p class='email'>nirmala@gmail.com</p>
        </div><br></br><br></br>
        <div class="part2">
            <FaCircleNotch class='circ'/>
            <p class='percent'>95%</p>
            <img src={emoji} class='emoji' alt="" srcset="" />
            <strong><p class='comp'>Complete your profile to<br></br> get more discount</p></strong>
            <strong><p class='now'>Complete Now ></p></strong>
        </div>
        
          <img src={umbrella} class='umbrella' alt="" srcset="" />
          <strong><p class='twele'>12</p></strong>
          <strong><p class='stay'>Staycation Visited</p></strong>
        
        <div class="part4">
          <strong><p class='ten'>10</p></strong>
         <img src={img9} class='im9' alt="" /> 
          <strong><p class='review'>Review Given</p></strong>
        </div>
        <div class='fav'>
        <strong><p class='ft'>Favourite</p></strong><br></br>
        <img src={hot1} class='hot1' alt="" srcset="" />
        <img src={hot2} class='hot2' alt="" srcset="" />
        <img src={hot3} class='hot3' alt="" srcset="" />
        <strong><p>Citadines Berawa</p></strong>
      </div>
      </div>
      
       <div class='Anavbar'>
            <ul>
                
                <p><MdOutlineExplore/>Explore</p>
            </ul>
            <Link to='./booking' style={{textDecoration: 'none'}}>
            <ul>
                
                <p><BsBookmarkCheck/>myBooking</p>
            </ul>
            </Link>
            <ul>
                
                <p><IoIosNotificationsOutline/>Notication</p>
            </ul>
            <Link to='./account' style={{textDecoration: 'none'}}>
            <ul>
                
                <p style={{color:'blue'}}><BiUser/>Account</p>
            </ul>
            </Link>
        </div> 
    </div>
  )
}
