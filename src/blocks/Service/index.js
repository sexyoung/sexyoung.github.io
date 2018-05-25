import React from 'react';

class Service extends React.PureComponent {
  render () {
    return (
      <div className="block service-block">
        <div className="container">
          <h2 className="title">What do we do?</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="partnerships sub-title">
                Partnerships
                <a href="#" target="_blank" className="more">more</a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="immigration-assistance sub-title">
                Immigration Assistance
                <a href="#" target="_blank" className="more">more</a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="property-development sub-title">
                Property Development
                <a href="#" target="_blank" className="more">more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Service;
