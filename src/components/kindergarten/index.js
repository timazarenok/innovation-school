import React from "react";
import { Image } from "react-bootstrap";
import KindergartenInfoCards from "./kindergarten-info-cards";
import { Form, Button, FormGroup, Row } from "react-bootstrap";
import InputMask from "react-input-mask";

import "./kindergarten.css";

const Kindergarten = () => {
  return (
    <>
      <div className="kindergarten-first-block">
        <div className="main-title">
          Билингвальный (EN/рус) детский сад «Инновация»
        </div>
      </div>
      <div className="kindergarten-second-block">
        <div className="flex-block">
          <div className="secondblock-text">
            Мы знаем, как не потерять, а развить врожденную лингвистическую
            одаренность детей
          </div>
          <Image className="kindergarten-image" src="" alt="sbkinder-image" />
        </div>
        <div className="title">Частный десткий сад «Инновация»</div>
        <KindergartenInfoCards />
      </div>
      <div className="kindergarten-third-block"></div>
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

export default Kindergarten;
