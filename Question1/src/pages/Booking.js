import React from 'react'
import hotel1 from '../image/mardan.jpg'
import { Link, Route, Redirect, NavLink } from 'react-router-dom';
import {MdOutlineExplore} from 'react-icons/md'
import {BsBookmarkCheck} from 'react-icons/bs'
import {BiUser} from 'react-icons/bi'
import {IoIosNotificationsOutline} from 'react-icons/io'
import './css/booking.css'
export default function Booking() {
  return (
    <div>
        <div id='body'>
            <h1>My Booking</h1>
            <div id='upcoming'>
                <div id='buttons'>
                    <button id='upb' >Upcoming</button>
                    <Link to='/his'><button id='hiss'>History</button></Link>

                </div><br></br>
                <img src={hotel1} alt="" srcset="" id='hote1' /><br></br>
                <h4>Pullman Bali Legian Beach</h4>
                <p>Grand Deluks Double with Private<br></br>Pool</p>
                <div class='check'>
                <p>Check-in</p>
                <p id='outt'>Check-out</p>
                </div>
                <p id='spaces'>**************</p>
                <div id='date'>
                <h2 >Thu, 25 Feb 22</h2>
                <h2 id='snd'>Sat, 26 Feb 22</h2>
                </div><br></br>
                <button id='details'>Details</button>
            </div>
        </div>
        <div id='navbarb'>
            <Link to='/explore' style={{textDecoration: 'none'}}>
            <ul>
                
                <p><MdOutlineExplore/>Explore</p>
            </ul>    
            </Link>
            <Link to='./booking' style={{textDecoration: 'none'}}>
            <ul>
                
                <p><BsBookmarkCheck/>MyBooking</p>
            </ul>
            </Link>
            <ul>
                
                <p><IoIosNotificationsOutline/>Notication</p>
            </ul>
            <Link to='./account' style={{textDecoration: 'none'}}>
            <ul>
                
                <p><BiUser/>Account</p>
            </ul>
            </Link>
        </div>
    </div>
  )
}
