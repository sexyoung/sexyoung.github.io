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
        <Home />
        <ul className="menu">
          <li><a href="#">about</a></li>
          <li><a href="#">service</a></li>
          <li><a href="#">projects</a></li>
          <li><a href="#">directors</a></li>
          <li><a href="#">supplies</a></li>
          <li><a href="#">guarantee</a></li>
          <li><a href="#">testimonials</a></li>
          <li><a href="#">contact</a></li>
        </ul>
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
