import cx from 'classnames';
import React from 'react';

class Menu extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }
  handleClick = () => {
    this.setState({
      open: !this.state.open
    });
  }
  render () {
    const { open } = this.state;
    return (
      <div className="menu">
        <div
          className={cx("menu-button", { open })}
          onClick={this.handleClick}
        >
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Directors</a></li>
          <li><a href="#">Guarantee</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    );
  }
}

export default Menu;
