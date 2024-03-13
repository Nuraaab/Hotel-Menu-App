import "./Card.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function Card(src) {
  console.log();
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    opacity: 1,
    transform: show ? "scale(1.3)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });
  return (
    
    <animated.div
      className="card"
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
        <img className="img" src={src.props.src} alt="" />
        <div className="description">
          <p>{src.props.alt} </p>
          <button className=" outline-1-primary py-1 px-5 rounded-[20px] text-[14px] font-poppins font-normal">Order</button>
        </div>
    </animated.div>
  );
}

export default Card;
