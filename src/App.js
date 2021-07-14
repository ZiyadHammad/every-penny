import React from "react"
import {Route} from "react-router-dom"

import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage"

import './App.css';


function App() {
  return (
    <div className="App">

      <Route path="/">
        <Navbar />
      </Route>
      <Route>
        <HomePage exact path="/" />
      </Route>
      

      
    </div>
  );
}

export default App;
