import React, { Component } from 'react';
import './App.css';

import {
  Home,
  Service,
  Project,
  Director,
  Supply,
  Guarantee,
  Testimonial,
  Contact,
} from './blocks';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <ul className="menu">
          <li><a href="#">About</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Directors</a></li>
          <li><a href="#">Supplies</a></li>
          <li><a href="#">Guarantee</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <Home />
        <Service />
        <Project />
        <Director />
        <Supply />
        <Guarantee />
        <Testimonial />
        <Contact />
      </div>
    );
  }
}

export default App;
