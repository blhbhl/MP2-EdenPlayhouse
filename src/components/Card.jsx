import React from "react";
import CardContent from "./CardProps";

const Card = () => {
  return (
    <div className="card">
      <h1 className="title">Program Offerings</h1>
      <div>
      <CardContent
        imgSrc="/public/pictures/toddler.png"
        category="Toddler"
        age="1.6 - 2.5 years"
        class_size={5}
        time="8:00am - 12:00pm"
      />

      <CardContent
        imgSrc="/public/pictures/nursery.png"
        category="Nursery"
        age="2.6 - 3.11 years"
        class_size={8}
        time="8:00am - 12:00pm"
      />
      </div>

      <div>
      <CardContent
        imgSrc="/public/pictures/kindergarten.png"
        category="Kindergarten"
        age="4 - 4.11 years"
        class_size={15}
        time="1:00pm - 4:00pm"
      />

      <CardContent
        imgSrc="/public/pictures/preparatory.png"
        category="Preparatory"
        age="5 - 6 years"
        class_size={15}
        time="1:00pm - 4:00pm"
      />
      </div>
    </div>
  );
};

export default Card;
