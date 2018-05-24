import React from 'react';

class HomeBlock extends React.PureComponent {
  render () {
    return (
      <div className="block home-block">
        <div className="logo" />
        <ul className="slogan">
          <li>Property</li>
          <li>Development</li>
          <li>Investment</li>
          <li>Construction</li>
        </ul>
        <div className="coverflow"></div>
      </div>
    );
  }
}

export default HomeBlock;
