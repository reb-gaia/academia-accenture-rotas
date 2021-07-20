import React from 'react';
import { Link } from 'react-router-dom';

import "./Navbar.css";

function Navbar() {
  return <ul>
      <li><Link class="active" to="/">Home</Link></li>
      <li><Link to="/whoweare">WhoWeAre</Link></li>
      <li><Link to="/contacts">Contacts</Link></li>
      <li><Link to="/products">Products</Link></li>
    </ul>
}

export default Navbar;