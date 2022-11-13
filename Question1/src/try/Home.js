import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';

import './Home.css';

const Home= () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        
        <IonButton routerLink='/login'>Login</IonButton>
        <IonButton routerLink='/register' color="secondary">Register</IonButton>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
