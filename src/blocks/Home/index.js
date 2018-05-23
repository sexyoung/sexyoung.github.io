import React from 'react';

class HomeBlock extends React.PureComponent {
  render () {
    return (
      <div className="block home-block">
        <div className="slogan">
          <div className="main-text">
            P R O P E R T Y<br/>
            D E V E L O P M E N T<br/>
            C O N S T R U S T I O N
          </div>
          <div className="sub-text">BASED IN MELBOURNE</div>
        </div>
        <div className="logo" />
        <div className="coverflow"></div>
      </div>
    );
  }
}

export default HomeBlock;
