import React from 'react';
import Slider from "react-slick";

class Project extends React.PureComponent {
  render () {
    var settings = {
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div id="project" className="block project-block">
        <div className="title">Projects</div>
        <div className="sub-title">Build in Luxury and Reliable</div>
        <div className="container">
          <Slider className="cover-flow" {...settings}>
            {Array(17).fill(null).map(i =>
              <div key={i}><div className="img" /></div>
            )}
          </Slider>
        </div>
      </div>
    );
  }
}

export default Project;
