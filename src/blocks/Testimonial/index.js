import React from 'react';

class Testimonial extends React.PureComponent {
  render () {
    return (
      <div className="block testimonial-block">
        <div className="container">
          <div className="row">
            <div className="col-md-6 title">
              What Our Customers Says
            </div>
            <div className="col-md-6 text">
              <div className="sub-title">Katie Chou</div>
              <div className="detail">
                <p>Property developers, Local and international</p>
                <p>Scheracon connects profitable investors to award winning and property developments in Australia.</p>
                <p>Scheracon connects profitable investors to award winning and property developments in Australia</p>
                <p>Scheracon connects profitable investors to award winning and property developments in Australia...... </p>
                <a href="#" target="_blank" className="more">more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonial;
