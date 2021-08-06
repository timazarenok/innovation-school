import React, { useState } from "react";
import { Image, Button } from "react-bootstrap";
import "./teacher-card.css";

const TeacherCard = ({ name, image, position }) => {

  return (
    <>
      <div className="teacher-image">
        <Image src={image} alt={name} />
        <Button className="image-button">
          Подробнее
        </Button>
      </div>
      <div className="teacher-info">
        <b>{name}</b>
        <br />
        {position}
      </div>
    </>
  );
};

export default TeacherCard;
