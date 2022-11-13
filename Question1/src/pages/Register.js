import React, { useState } from "react";
import { IonInput, IonLabel, IonItem, IonCard, IonTitle, IonButton, IonCardContent, IonContent, IonIcon } from '@ionic/react';
import {Link} from 'react-router-dom';
import { auth } from '../config/firebase';
import {eye, eyeOff} from "ionicons/icons"
import {createUserWithEmailAndPassword} from 'firebase/auth';


import { addDoc } from "firebase/firestore";
export default function Register() {
  const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [password, setPassword] = useState('');
    const [icon, setIcon] = useState(eyeOff);
    const [type, setType] = useState('password');

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

    const handleSubmit = ()=>{ 
        createUserWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            console.log("user credintials", cred.user);
            //const user = cred.user
        })
        .catch((error) =>{
            console.log(error.message)
            /*const errorCode = error.code;
            const errorMessage = error.message;*/
        });
         
        setEmail("");
        setPassword("");
        
    };
    return(
    
        <IonContent>
            <IonCard className='register' >
                <IonCardContent>
                    <IonItem>
                        <IonTitle className='header'>
                        Hello.
                        <br/>
                        First time here!
                        <br/>
                        <br/>
                        <IonTitle className='title'>SIGN UP</IonTitle>
                        </IonTitle> 
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Name</IonLabel>
                        <IonInput type="text"
                        value={name}
                        onIonChange={(e) => setName(e.target.value)}
                        required/>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Surname</IonLabel>
                        <IonInput type="text" placeholder='Enter Surname'
                        value={surname}
                        onIonChange={(e) => setSurname(e.target.value)} 
                        required/>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Email</IonLabel>
                        <IonInput type="email"  placeholder="Enter email"
                        value={email}
                        onIonChange={(e) => setEmail(e.target.value)}
                        required/>
                    </IonItem>
                    <IonItem counter={true}>
                        <IonLabel position="floating">Tel</IonLabel>
                        <IonInput type="tel" placeholder="Enter phone number"
                        value={tel}
                        onIonChange={(e) => setTel(e.target.value)}         
                        maxlength={10}
                        required/>
                    </IonItem>
                    <IonItem counter={true} counterFormatter={( inputLenth, maxLength) => `${maxLength - inputLenth } characters remaining`}>
                        <IonLabel position="floating">Password</IonLabel>
                        <IonInput type={type}  placeholder="Enter Password" 
                        value={password}
                        onIonChange={(e) => setPassword(e.target.value)}
                        maxlength={16}
                        required></IonInput>
                        <IonIcon className='icon' size='10' slot='end' onClick={handleshow} icon={icon}/>
                    </IonItem>
                        <IonButton expand='full' onClick={()=>handleSubmit()}
                        type='submit'>Register</IonButton>
            
                    <h4>Already have an account?<Link className="log-link" to='/login' >sign in</Link></h4>
                </IonCardContent>
            </IonCard>
        </IonContent>
    )
}
