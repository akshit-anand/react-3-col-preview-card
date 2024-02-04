import React from "react";
import Card from "./Card";

const CardList = (props) => {
  return (
    <div>
      <div className="flex-container">
        {props.cardData.map((cD) => (
          <Card
            id={cD.id}
            title={cD.title}
            desc={cD.desc}
            img={cD.img}
            key={cD.id}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
