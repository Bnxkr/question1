import React from 'react'
import hotel1 from '../image/mardan.jpg'
import { Link, Route, Redirect, NavLink } from 'react-router-dom';
import {MdOutlineExplore} from 'react-icons/md'
import {BsBookmarkCheck} from 'react-icons/bs'
import {BiUser} from 'react-icons/bi'
import {IoIosNotificationsOutline} from 'react-icons/io'
import './booking.css'
export default function History() {
  return (
    <div>
        <div id='body'>
            <h1>My Booking</h1>
            <div id='upcoming'>
                <div id='buttons'>
                    <button id='up' >Upcoming</button>
                    <NavLink to='#history'><button id='his'>History</button></NavLink>

                </div><br></br>
                <img src={hotel1} alt="" srcset="" /><br></br>
                <h4>Pullman Bali Legian Beach</h4>
                <p>Grand Deluks Double with Private<br></br>Pool</p>
                <div id='check'>
                <p>Check-in</p>
                <p id='out'>Check-out</p>
                </div>
                <p id='space'>**************</p>
                <div id='date'>
                <h2 >Thu, 25 Feb 22</h2>
                <h2 id='snd'>Sat, 26 Feb 22</h2>
                </div><br></br>
                <button id='details'>Details</button>
            </div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <div id='history'>
                hi
            </div>
        </div>
        <div id='navbar'>
            <ul>
                <MdOutlineExplore/>
                <p>Explore</p>
            </ul>
            <Link to='./booking'>
            <ul>
                <BsBookmarkCheck/>
                <p>My Booking</p>
            </ul>
            </Link>
            <ul>
                <IoIosNotificationsOutline/>
                <p>Notication</p>
            </ul>
            <ul>
                <BiUser/>
                <p>Account</p>
            </ul>
        </div>
    </div>
  )
}
