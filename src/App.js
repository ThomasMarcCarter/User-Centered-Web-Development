import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/index.js";
import{BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages/index.js'
import Services from './pages/services.js'
import Contact from './pages/contact.js'
import SignUp from './pages/signup.js'
import Search from "./pages/search.js";

function App() {
  return (

    <Router>
      <link rel="stylesheet" href="../node_modules/spectre.css/dist/spectre.css" />
    <NavBar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Search' component={Search} />
        <Route path='/services' component={Services} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
