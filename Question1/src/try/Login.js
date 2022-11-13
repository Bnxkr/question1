import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonItem } from '@ionic/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Register from './Register';
import './login.css';
import Myimage from "./phoneshape.jpeg";

export default function Login() {
    const [Username1, setUsername1] = useState('')
    const [password, setpassword] = useState('')
    const [Page, setPage] = useState('')
    const bg = "./phoneshape.jpeg";
    
    const handleChange = event => {
      setUsername1(event.target.value);
  
    };
    
      
        function login() {
          if (Username1 == "User") {
            setPage ("/stud")
          }
          else if (Username1== "Admin") {
            setPage ("/stud")
          }
          else if (Username1== "Staff") {
            setPage ("/stud")
          }
        } 
      
    
  return (
    
    <IonPage>
    <IonHeader>
      
    </IonHeader>
    
    <IonContent fullscreen>
    <div className="page">
          <img src={Myimage} alt=""  />
          <div className="area">
          <h1>Sign In</h1>
        <IonInput pattern='text' id="input" placeholder='Username'
        type='text'
        onChange={handleChange}
        value={Username1}/>
        h1
        
        <IonInput id='input' placeholder='Password' 
        onChange={(e) => setpassword(e.target.value)}/>

        <IonButton color="black" id='button' onFocus={login} href="/stud">Login</IonButton>
        
        <p>Haven't registered? <Link to="/register">Sign Up here</Link></p>
        <p>{Username1}</p>
        </div>
        </div>
      
    </IonContent>
  </IonPage>
        
        
        
      
  );
};

