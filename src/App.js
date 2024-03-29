import React from 'react';
import './App.css';

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import About from "./pages/About";
import Reservations from "./pages/Reservations";
import Contacts from "./pages/Contacts";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about/" component={About} />
          <Route exact path="/rooms/" component={Rooms} />
          <Route exact path="/reservations/" component={Reservations} />
          <Route exact path="/contacts/" component={Contacts} />
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
