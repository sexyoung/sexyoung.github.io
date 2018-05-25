import cx from 'classnames';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

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
          <li><AnchorLink href="#about">About</AnchorLink></li>
          <li><AnchorLink href="#service">Service</AnchorLink></li>
          <li><AnchorLink href="#project">Projects</AnchorLink></li>
          <li><AnchorLink href="#director">Directors</AnchorLink></li>
          <li><AnchorLink href="#guarantee">Guarantee</AnchorLink></li>
          <li><AnchorLink href="#testimonial">Testimonials</AnchorLink></li>
          <li><AnchorLink href="#contact">Contact</AnchorLink></li>
        </ul>
      </div>
    );
  }
}

export default Menu;
