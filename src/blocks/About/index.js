import React from 'react';

class About extends React.PureComponent {
  render () {
    return (
      <div id="about" className="block about-block">
        <div className="container">
          <div className="row about">
            <div className="col-md-6 title">
              ABOUT SCHERACON
            </div>
            <div className="col-md-6 text padding">
              <p>Designers, Registered Builders and for local + investors.</p>
              <p>Property developers, Local and international Scheracon connects profitable investors to award winning and property developments in Australia</p>
              <p>Property developers, Local and international Scheracon connects profitable investors to award winning and property .</p>
            </div>
          </div>
        </div>
        <div className="vision">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
              </div>
              <div className="col-md-6">
                <div className="title">Our Vision</div>
                <div className="text">Property developers, Local and international Scheracon connects profitable investors to award winning and property developments in Australia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
