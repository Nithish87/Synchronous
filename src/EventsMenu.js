import React from "react";
import { render } from "react-dom";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
//import "normalize.css/normalize.css";
//import "./slider-animations.css";
//import "./styles.css";
import content from "./data";

const EventsMenu = (events) => {
  //const content = Object.values(events);
  console.log("HELLO");
  console.log(content);
  return (
    <Slider className="slider-wrapper">
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <button>{item.button}</button>
          </div>
          {/* <section>
            <img src={item.userProfile} alt={item.user} />
            <span>
              Posted by <strong>{item.user}</strong>
            </span>
          </section> */}
        </div>
      ))}
    </Slider>
  );
};

render(<EventsMenu />, document.getElementById("root"));
export default EventsMenu;
