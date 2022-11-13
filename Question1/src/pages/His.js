import React from 'react'
import hotel1 from '../image/mardan.jpg'
import { Link, Route, Redirect, NavLink } from 'react-router-dom';
import {MdOutlineExplore} from 'react-icons/md'
import {BsBookmarkCheck} from 'react-icons/bs'
import {BiUser} from 'react-icons/bi'
import {IoIosNotificationsOutline} from 'react-icons/io'
import './css/his.css'
export default function History() {
  return (
    <div>
        <div id='body'>
            <h1>My Booking</h1>
            <div id='upcoming'>
                <div id='buttons'>
                <Link to='/booking'><button id='uph' >Upcoming</button></Link>
                    <button id='hish'>History</button>
                </div><br></br>
                <div>
                    <ul>
                        <img src={hotel1} id='myimgh' alt="" srcset="" /><br></br>
                         <h4>Pullman Bali Legian Beach</h4>
                         <p>1room, 2adults</p>
                        <div id='check'>
                        <p>Check-in</p>
                        <p id='outh'>Check-out</p>
                        </div>
                        <p id='space'>**************</p>
                        <div id='date'>
                        <h2 >Thu, 25 Feb 22</h2>
                        <h2 id='snd'>Sat, 26 Feb 22</h2>
                        </div><br></br>
                        <button id='write'>Write Review</button>
                    </ul>
                </div>
                <div id='reviewh'>
                    <ul>
                        <img src={hotel1} id='myimghh' alt="" srcset="" /><br></br>
                         <h4>Seminyak Nusa Penida</h4>
                         <p>1room, 2adults</p>
                        <div id='check'>
                        <p>Check-in</p>
                        <p id='outh'>Check-out</p>
                        </div>
                        <p id='space'>**************</p>
                        <div id='date'>
                        <h2 >Thu, 25 Feb 22</h2>
                        <h2 id='snd'>Sat, 26 Feb 22</h2>
                        </div><br></br>
                        <Link to='rev1'><button id='myrev'>See my review</button></Link>
                    </ul>
                </div>
                
            </div>
        </div>
        <div id='navbarh'>
            <ul>
                <MdOutlineExplore/>
                <p>Explore</p>
            </ul>
            <Link to='./booking' style={{textDecoration: 'none'}}>
            <ul>
                <BsBookmarkCheck/>
                <p>My Booking</p>
            </ul>
            </Link>
            <ul>
                <IoIosNotificationsOutline/>
                <p>Notication</p>
            </ul>
            <Link to='./account' style={{textDecoration: 'none'}}>
            <ul>
                <BiUser/>
                <p>Account</p>
            </ul>
            </Link>
        </div>
    </div>
  )
}
