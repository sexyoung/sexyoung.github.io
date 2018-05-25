import React from 'react';
import fb from './images/FB_icon@2x.png';
import wechat from './images/Wechat_icon@2x.png';

class Contact extends React.PureComponent {
  render () {
    return (
      <div id="contact" className="block contact-block">
        <div className="container">
          <div className="row">
            <div className="col-md-6 title">
              Contact us
            </div>
            <div className="col-md-6 right">
              <a href="#" target="_blank"><img src={fb} alt="fb" /></a>
              <a href="#" target="_blank"><img src={wechat} alt="wechat" /></a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <header>We are accepting new projects</header>
              <section>Property developers, Local and international. Scheracon connects profitable investors to award winning and property developments in Australia.</section>
              <ul>
                <li className="mobile">+61 450 542 834</li>
                <li className="email">scheracon@gmail.com</li>
              </ul>
            </div>
            <div className="col-md-6">
              <form action="">
                <div className="field">Name (required)</div>
                <input type="text" name="name"/>
                <div className="field">Email (required)</div>
                <input type="text" name="email"/>
                <div className="field">Subject (required)</div>
                <input type="text" name="subject"/>
                <div className="field">Message (required)</div>
                <textarea name="message"></textarea>
                <button className="field">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
