import './App.css';
import ReactGA from "react-ga";
import React,{useEffect} from 'react'
import Home from './components/Home';
import Nvbar from './components/Nvbar';
import Todo from './components/Todo';
import Operator from './components/Operator';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  // create a tracker named 'foo' for property UA-XXXXX-Y
  useEffect(()=>{   
    ReactGA.initialize('UA-215920655-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    // ReactGA.ga('create', 'UA-215920655-1', {name: 'foo'});
    // ReactGA.ga('foo.require', 'displayfeatures');
    // ReactGA.ga('foo.send', 'pageview');
  },[])
//create a second tracker named 'bar' for a different property UA-XXXX-Z
useEffect(()=>{
        // ReactGA.initialize('UA-215920655-2');
        // ReactGA.pageview(window.location.pathname + window.location.search);
        ReactGA.ga('create', 'UA-215920655-2', {name: 'bar'});
        ReactGA.ga('bar.require', 'displayfeatures');
        ReactGA.ga('bar.send', 'pageview');
    
  },[])
  return (
    <Router>
        <div className="App">
              <Nvbar/>
              <Route exact path="/home" component={Home}/>     
              <Route exact path="/operator" component={Operator}/>     
              <Route exact path="/todolist" component={Todo}/>
        </div>
    </Router>
  );
}

export default App;
