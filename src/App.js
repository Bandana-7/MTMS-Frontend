import React from 'react';
import Nav from "./components/Nav"
import BG from "./images/Theatre.jpg"
import { BrowserRouter, Switch,Route } from 'react-router-dom';
// import Signin from "./components/Signup";
import SignUp from './components/Signup';
import SignIn from './components/Signin';

const App =()=> {
    return(
        <div style={{backgroundImage:"url("+BG+")"}}
        className = " bg-no-repeat bg-center bg-cover">        
        <BrowserRouter>
        <Nav />
        <Switch>
            
            <Route path="/signup" exact component={SignUp}/>
            <Route path="/signin" exact component={SignIn}/>
        </Switch>
   </BrowserRouter>
   </div>
        
    );
        
        
}
export default App;