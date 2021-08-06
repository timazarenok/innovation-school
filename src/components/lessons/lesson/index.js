import React from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import './lesson.css'

const Lesson = ({ name, description, image, href }) => {
  return (
    <>
      <Image className="lesson-image" src={image} alt={name} />
      <div className="lesson-name">{name}</div>
      <div className="lesson-description">{description}</div>
      <Button className="lesson-button">
        <Link to={href}>Подробнее</Link>
      </Button>
    </>
  );
};

export default Lesson;
