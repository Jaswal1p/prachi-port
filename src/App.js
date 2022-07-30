// eslint-disable-next-line no-unused-vars
import React from 'react';

// import logo from './logo.svg';
import './App.css';
import { Redirect, HashRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';

import NoMatch from './components/NoMatch';

function App() {
  return (
    <Router>
          {/* <NavBar /> */}
         <br></br>
         <Switch>
           <Route exact path='/'>
             <Redirect to='/about' />
           </Route>
           <Route exact path='/about' component={About} />
           <Route exact path='/contact' component={Contact} />
           
           <Route component={NoMatch} />
         </Switch>
         <br></br>
         {/* <Footer/> */}
    </Router>
    );
}

export default App;
