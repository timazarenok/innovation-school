import React from "react";
import { Image } from "react-bootstrap";
import LessonForm from "../lesson-form";
import Lessons from "../lessons";
import Teachers from "../teachers"

import "./center-add-education.css";

const CenterAddEducation = () => {
  return (
    <>
      <div className="center-first-block">
        <div className="main-title">
          Центр дополнительного образования «Инновация»
        </div>
      </div>
      <div className="center-second-block">
        <Image className="center-image" src="" alt="center-main-image" />
        <div>
          <div className="csb-title">Что интересно вашему ребенку?</div>
          <div className="csb-text">
            Все дети талантливы. Каждый ребенок обладает уникальной
            способностью, необходимо только ему помочь ее развить. Наши педагоги
            заинтересуют детей творческими и креативными заданиями в контексте
            практико-ориентированного подхода в обучении.
            <br />
            <br />
            Занятия могут посещать не только учащиеся «Инновации», но и ребята
            из других учреждений образования.
          </div>
        </div>
      </div>
      <Lessons />
      <Teachers title="Педагогический состав УПК «Инновация»"/>
      <LessonForm />
    </>
  );
};

export default CenterAddEducation;
