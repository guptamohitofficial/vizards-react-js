import React from 'react';
import { Route } from 'react-router-dom';
import HeaderComp from './components/Header';
import FooterComp from './components/Footer';
import LandingBody from './components/LandingBody';
import Contact from './components/Contact';
import UserHome from './components/Home';
import { is_auth } from './cc/code.js';


function App() {

  var is_auth_var = is_auth();
  console.log(is_auth_var)
  
  return (
    <div>
      <HeaderComp/>
      <Route path="/contact" component={Contact} exact/>

      {is_auth_var?<Route path="/" component={UserHome} exact/>:<Route path="/" component={LandingBody} exact/>}
      
      <FooterComp/>
    </div>
  );
}

export default App;
