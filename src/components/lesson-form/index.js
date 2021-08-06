import React from "react";
import { Form, Button, Row, FormGroup } from "react-bootstrap";
import InputMask from "react-input-mask";
import { lessons } from "../utils";

import "./lesson-form.css";

const LessonForm = () => (
  <div className="feedback-block">
    <div className="feedback-title">
      Стоимость занятий можно узнать, заполнив заявку:
    </div>
    <div className="feedback-subtitle">
      Остались вопросы? Заполните форму, и мы с Вами свяжемся в ближайшее время!
    </div>
    <div className="test">
      <Form className="feedback-form">
        <Row>
          <FormGroup>
            <Form.Label>Название секции</Form.Label>
            <select className="form-control">
              {lessons.map((el) => (
                <option>{el.name}</option>
              ))}
            </select>
          </FormGroup>
        </Row>
        <Row>
          <FormGroup>
            <Form.Control type="text" placeholder="Возраст ребенка*" />
            <Form.Control type="text" placeholder="Кол-во посещений в месяц" />
          </FormGroup>
        </Row>
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
);

export default LessonForm;
