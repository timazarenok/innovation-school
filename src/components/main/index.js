import React from "react";
import { Button, Form, FormGroup, Row } from "react-bootstrap";
import Characteristic from "./characteristic";
import InputMask from "react-input-mask";

import "./main.css";

import chef from "../../images/chef.png";
import classroom from "../../images/classroom.png";
import doctor from "../../images/doctor.png";
import friend from "../../images/friend.png";
import security from "../../images/security-camera.png";
import teacher from "../../images/teacher.png";
import Lessons from "../lessons";

const array = [
  {
    image: security,
    text: "Территория учебного комплекса находится под постоянной охраной.",
  },
  {
    image: chef,
    text: "Шеф-повар готовит вкусную и полезную еду. 5-разовое сбалансированное питание.",
  },
  {
    image: doctor,
    text: "Консультации медицинского персонала, массажи и оздоровительные мероприятия.",
  },
  {
    image: teacher,
    text: "С детьми работают логопед, психолог и специалист по билингвальному обучению.",
  },
  {
    image: classroom,
    text: "Уютные классы оборудованы современной техникой для занятий. Группы до 15 человек.",
  },
  {
    image: friend,
    text: "Учим учиться и свободно общаться, не боясь выражать свои мысли и эмоции.",
  },
];

const Main = (props) => {
  return (
    <>
      <div className="main-first-block">
        <div className="main-title">
          Частное учреждение образования «Учебно-педагогический комплекс детский
          сад – средняя школа ИННОВАЦИЯ»
        </div>
        <div className="main-subtitle">
          Инновация – это билингвальное обучение En/рус;
          <br />
          профильные практико-ориентированные X и XI классы; бережное отношение
          к эмоциональному интеллекту каждого ребенка.
        </div>
        <div className="main-buttons-block">
          <Button>Пансион</Button>
          <Button>Центр дополнительного образования</Button>
          <Button>Центр цифровых образовательных технологий «Инновация»</Button>
          <Button>Тренинговый центр «Инновация»</Button>
          <Button>«Инновация» Online</Button>
          <Button>Лагерь «Инновация»</Button>
          <Button>Pearson International School in Minsk</Button>
          <Button>Средняя школа</Button>
          <Button onClick={() => props.history.push("/primary-school")}>Начальная школа</Button>
          <Button onClick={() => props.history.push("/kindergarten")}>Детский сад</Button>
        </div>
      </div>
      <div className="main-second-block">
        <div className="secondblock-title">
          Мы заботимся о здоровье, комфорте и безопасности детей:
        </div>
        <ul className="main-info-block">
          {array.map((el) => (
            <Characteristic {...el} />
          ))}
        </ul>
      </div>
      <Lessons />
      <div className="feedback-block">
        <div className="feedback-title">Свяжитесь с нами!</div>
        <div className="feedback-subtitle">
          Остались вопросы? Заполните форму, и мы с Вами свяжемся в ближайшее
          время!
        </div>
        <div className="test">
          <Form className="feedback-form">
            <Row>
              <FormGroup>
                <Form.Control type="text" placeholder="Имя*" />
                <InputMask
                  className="form-control"
                  mask="+375 (99) 999-99-99"
                  value={""}
                  placeholder="Телефон*"
                />
              </FormGroup>
            </Row>
            <Row>
              <FormGroup>
                <Form.Control type="email" placeholder="Email" />
                <Form.Control type="text" placeholder="Сообщение" />
              </FormGroup>
            </Row>
            <Button className="feedbackform-button">Отправить</Button>
          </Form>
          <div className="work-time">
            График работы приемной:
            <br />
            <span>Пн-пт | 09:00-18:00</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
