import React from "react";
import { Image } from "react-bootstrap";
import Characteristic from "../main/characteristic";
import "./primary-school.css";

import classroom from "../../images/classroom_black.png";
import individual from "../../images/individual.png";
import equipment from "../../images/equipment.png";
import teacher from "../../images/teacher_black.png";
import psychologist from "../../images/psychologist.png";
import doctor from "../../images/doctor_black.png";
import camera from "../../images/camera_black.png";
import home from "../../images/home.png";

const array = [
  { image: classroom, text: "В одном классе учатся до 15 учащихся" },
  {
    image: individual,
    text: "Индивидуальная методика обучения и развития для каждого ребенка",
  },
  { image: equipment, text: "Классы оборудованы высококачественной техникой" },
  {
    image: teacher,
    text: "Выполнение домашних заданий под руководством преподавателя",
  },
  { image: psychologist, text: "С детьми общается логопед и психолог" },
  {
    image: doctor,
    text: "Педиатр проводит консультации и базовые медицинские осмотры",
  },
  { image: camera, text: "Территория школы находится под охраной" },
  { image: home, text: "Возможно проживание детей в пансионе" },
];

const PrimarySchool = () => {
  return (
    <>
      <div className="kindergarten-first-block">
        <div className="main-title">
          Билингвальная (EN/рус) начальная школа «Инновация»
        </div>
      </div>
      <div className="kindergarten-second-block">
        <div className="flex-block">
          <div className="secondblock-text">
            • погружение в языковую среду;
            <br />
            • изучение в равном объеме всех предметов на русском и английском
            языках;
            <br />• общение на английском языке и в свободное от занятий время.
          </div>
          <Image className="kindergarten-image" src="" alt="schpr-image" />
        </div>
      </div>
      <div className="primary-characteristic-block">
        <div className="primary-characteristic-title">
          Мы создали атмосферу для комфортного обучения и развития детей:
        </div>
        <ul className="primary-characteristic-list">
          {array.map((el) => (
            <Characteristic {...el} />
          ))}
        </ul>
      </div>
      <div className="schedule">
          <div className="schedule-title"></div>
      </div>
    </>
  );
};

export default PrimarySchool;
