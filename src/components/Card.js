import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className={`flex-item item${props.id}`}>
        <img src={props.img} alt="icon-sedan" className="icon sedan" />
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
        <a href="https://" className={`button button${props.id}`}>
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Card;
