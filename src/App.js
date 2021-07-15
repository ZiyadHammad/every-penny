import React from "react"
import {Route} from "react-router-dom"

import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage"
import ViewLog from "./components/ViewLog"

import './App.css';


function App() {
  return (
    <div className="App">

      <Route path="/">
        <Navbar />
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/view-log">
        <ViewLog />
      </Route>
      

      
    </div>
  );
}

export default App;
