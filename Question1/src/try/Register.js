import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton } from '@ionic/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./register.css"
import './Home.css';

export default function Register() {
    const [Username, setUsername] = useState('')
    const [password, setpassword] = useState('')
    const [users,setusers]= useState('')
    const [val,setval]= useState('')
    const handleChange = event => {
      setUsername(event.target.value);
  
    };
    const validate = () => {
      setval ("Your account has been succefully registered")
  }
    const Stud = () => {
      setusers ("Student1")
  }
  const Ad = () => {
      setusers ("Admin1")
  }
  const St = () => {
      setusers ("Staff1")
      
  }
  const Message = ({ variant, children }) => {
    const [timeOut, setTimeOut] = useState(null)
  
    setTimeout(() => {
      setTimeOut(1)
    }, 3000)
  
    return (
      timeOut !== 1 && <div className={`alert alert-${variant}`}>{children}</div>
    )
  }
  
  Message.defaultPros = {
    variant: 'info',
  }
    
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sign Up</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
      <h1>Hi, Tell us if you are Student,  Admin , Staff</h1>
      <button onClick={Stud} id="but">Student</button>
      <button onClick={Ad} id="but">Admin</button>
      <button onClick={St} id="but">Staff</button><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <h1>Your Username: <span>{users}</span></h1>
        
        <IonInput placeholder='Password' 
        type='password'
        onChange={(e) => setpassword(e.target.value)}/>


           <button onClick={validate}>
               Register
            </button>
            <h1>{val}</h1><br></br><br></br><br></br><br></br>
        <h1>Already have registered? <Link to="/login">Login here</Link></h1>
        
      </IonContent>
    </IonPage>
  );
};

