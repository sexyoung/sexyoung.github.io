import React from 'react';
import master from './images/Master-Builders-logo.jpg';
import registered from './images/Registered-Bilding-Practitioner.jpg';
import vba from './images/VBA.jpg';
import yarrington from './images/yarrington-construction-bendigo-3550-accreditation.png';

class Guarantee extends React.PureComponent {
  render () {
    return (
      <div id="guarantee" className="block guarantee-block">
        <div className="container">
          <div className="sub-title">Quality Certificated</div>
          <div className="row">
            <div className="col-md-3" style={{backgroundImage: `url(${master})`}} />
            <div className="col-md-3" style={{backgroundImage: `url(${registered})`}} />
            <div className="col-md-3" style={{backgroundImage: `url(${vba})`}} />
            <div className="col-md-3" style={{backgroundImage: `url(${yarrington})`}} />
          </div>
        </div>
      </div>
    );
  }
}

export default Guarantee;
