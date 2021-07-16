import React from "react"
import {Route} from "react-router-dom"

import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage"
import ViewLog from "./components/ViewLog"
import CreateNew from "./components/CreateNew"
import Footer from "./components/Footer"
import "./components/Fontawesome"
import DetailPage from "./components/DetailPage"

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
      <Route exact path="/create-new">
        <CreateNew />
      </Route>
      
      <Route path="/log-detail/:id">
        <DetailPage />
      </Route>

      <Footer />
      

      
    </div>
  );
}

export default App;
