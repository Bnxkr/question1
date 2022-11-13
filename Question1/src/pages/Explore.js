import React from 'react'
import {HiOutlineSearch} from 'react-icons/hi'
import profilepic from '../image/profile-1 copy.png'
import pexel from '../image/pexel.png'
import {MdLocationPin} from 'react-icons/md'
import {BsFillStarFill} from 'react-icons/bs'
import { Link, Route, Redirect } from 'react-router-dom';
import {MdOutlineExplore} from 'react-icons/md'
import {BsBookmarkCheck} from 'react-icons/bs'
import {BiUser} from 'react-icons/bi'
import {FiHeart} from 'react-icons/fi'
import  Eim4 from '../image/image-4.png'
import {CiLocationArrow1} from 'react-icons/ci'
import {IoIosNotificationsOutline} from 'react-icons/io'

import './css/explore.css'
export default function Explore() {
  return (
    <div class='content'>
        <div class='body'>
        <div class='user'>
            <h1>Explore</h1>
            <img src={profilepic} class='eximg' alt="" srcset="" />
            
        </div>
        <div class='banner'>
            
            <input type="text" name="" class="exsearch" placeholder='          Where do you want to stay ?' />
            <Link to='./search'><HiOutlineSearch class='exsearchicon' /></Link>
            
            <div class='container'>
                <div className="wrapper">
                    <img src={pexel} class='exhot' alt="" srcset="" />
                    <img src={pexel} class='exhot' alt="" srcset="" />
                    <img src={pexel} class='exhot' alt="" srcset="" />
                    <img src={pexel} class='exhot' alt="" srcset="" />
                    <img src={pexel} class='exhot' alt="" srcset="" />
                </div>
            </div>
            
            <div class='stars'>
                <strong><p class='atri'> <BsFillStarFill style={{color:'yellow'}}/>4.9</p>
            </strong>
                </div>
            <div class='exlocation'>
                
                <strong><p class='atri'> <MdLocationPin class='exloc'/>Bandung</p>
            </strong></div>
            <div class='exdesc'>
                <h3>Citadine Berawa</h3>
                <FiHeart class='exheart'/>
                <p style={{marginTop:'-1.5vh'}}>Start from $35 per night</p>
                
                
            </div>
        </div><br></br><br></br>
         <div class='nearby'>
            {/* <h3 id='near'>Nearby</h3>
            <p> <MdLocationPin style={{color:'blue', fontSize:'18px'}}/>  DKI Jakarta</p> */}
            <ul>
                <div class='extexts'>
                   <p style={{fontSize:'15px'}}>Double Six Luxury</p>
                    {/* <p >14.3km</p> */}
                    <p >Start from $35 per night</p>
                    <img src={Eim4} style={{marginLeft:'-49px'}} alt="" srcset="" />
                
                </div>
            </ul>

           
            
        </div>
        <div class='AnavbarE'>
            <ul>
                
                <p style={{color:'blue'}}><MdOutlineExplore/>Explore</p>
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
                
                <p ><BiUser/>Account</p>
            </ul>
            </Link>
        </div>  
    </div>
    
    </div>
  )
}
