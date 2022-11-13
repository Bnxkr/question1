import React, {useState} from 'react'
import { IonInput, IonLabel, IonItem, IonCard, IonTitle, IonButton, IonIcon, IonContent} from '@ionic/react';
import { Link, Route, Redirect } from 'react-router-dom';
import Google from '../image/google.png'
import Apple from '../image/apple.png'
import './css/login.css'
import { auth } from '../config/firebase';
import {signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {eye, eyeOff, logoGoogle} from 'ionicons/icons';
import {FiEyeOff} from 'react-icons/fi'

export default function Login() {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [icon, setIcon] = useState(eyeOff);
    const [type, setType] = useState('password');
    const provider = new GoogleAuthProvider(); 

    const handleshow =() =>{
        if(type==='password'){
            setIcon(eye)
            setType('text');
        }
        else{
            setIcon(eyeOff);
            setType('password');
        }
    }

    const googleLogin = () =>{
        signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
    }

    const handleSubmit = ()=>{ 
        signInWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            console.log("user credintials", cred.user);
        })
        .catch((error) =>{
            console.log(error.message)
        });
         
        setEmail("");
        setPassword("");

    } 
  
  return (
    <div id='login'>
      <h1>Sign in with Email</h1>
      <p>Input your brainy account</p><br></br>
      <label htmlFor="">Email</label><br></br>
      <input type="email" name="" id="" placeholder='Type your email'/><br></br><br></br><br></br>
      <label htmlFor="">Password</label>
      <br></br>
      
      <input type="password" name="" id="pass" placeholder='Type your password'/>
      <FiEyeOff id='eye'/>
      <br></br>
      <Link to='./forgot' style={{textDecoration: 'none'}}><p style={{color: "red", fontSize:"17px", textAlign:'center'}}>Forgot password?</p></Link>
      <Link to='./explore'><button id='bsign' onClick={()=>handleSubmit()}>Sign in Now</button></Link><br></br>
      <p style={{textAlign:'center', fontSize:'17px'}}>Or</p><br></br>
      
      
        <button id='bap'>Sign in with Apple</button>
        <img src={Apple} alt="" srcset=""id='apple' />
      <br></br><br></br>
      
      <button id='bgo'onClick={()=>googleLogin()}>Sign in with Google</button>
      <img src={Google} alt="" srcset=""id='google' /><br></br>
      <p>New to brain academy <Link to='./register' style={{textDecoration: 'none'}}>Sign up here</Link></p><br></br>
      <p>By using our services you are agreeing to our <br></br> Terms and Privacy</p>
      
    </div>
  )
}
