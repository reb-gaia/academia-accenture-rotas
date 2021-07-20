import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home'
import WhoWeAre from '../pages/WhoWeAre'
import Contacts from '../pages/Contacts'
import Products from '../pages/Products'
import Navbar from '../components/Navbar'

function Routes() {
  return <div>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/whoweare" component={WhoWeAre}></Route>
      <Route path="/contacts" component={Contacts}></Route>
      <Route path="/products" component={Products}></Route>
    </Switch>
  </div>
}

export default Routes;