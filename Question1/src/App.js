import { Link, Route, Redirect } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Onboarding1 from './pages/Onboarding1';
import Onboarding2 from './pages/Onboarding2';
import Onboarding3 from './pages/Onboarding3';
import Forgot from './pages/forgot';
import Explore from './pages/Explore';
import Search from './pages/Search';
import Booking from './pages/Booking';
import History from './pages/His';
import Account from './pages/Account';
import Logout from './pages/Logout';
import Slider from './pages/slide';
import Seereview from './pages/Seereview';
import Seereview1 from './pages/Seereview1';
import Seereview2 from './pages/Seereview2';
import Writereview from './pages/Writereview';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import './style.css';
/* Theme variables */
import './theme/variables.css';


setupIonicReact();

const App  = () => (
  <IonApp>
    
    <IonReactRouter>
      <IonRouterOutlet class='ionn'>
       <Route path="/home" component={Home} exact />
       <Route path="/login" component={Login} exact />
       <Route path="/register" component={Register} exact />
       <Route path="/explore" component={Explore} exact />
       <Route path="/forgot" component={Forgot} exact />
       <Route path="/" component={Onboarding1} exact />
       <Route path="/Onboarding2" component={Onboarding2} exact />
       <Route path="/Onboarding3" component={Onboarding3} exact />
       <Route path="/search" component={Search} exact />
       <Route path="/booking" component={Booking} exact />
       <Route path="/his" component={History} exact />
       <Route path="/account" component={Account} exact />
       <Route path="/logout" component={Logout} exact />
       <Route path="/slide" component={Slider} exact />
       <Route path="/rev1" component={Seereview} exact />
       <Route path="/rev2" component={Seereview1} exact />
       <Route path="/rev3" component={Seereview2} exact />
       <Route path="/write" component={Writereview} exact />
   
       
       
        
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
