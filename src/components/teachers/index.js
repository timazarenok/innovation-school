import React, { useState } from "react";
import TeacherCard from "./teacher-card";

import "./teachers.css";

import { teachers } from "../utils";

const Teachers = ({ title }) => {
  const [category, setCategory] = useState("Администрация");

  const onChangeSelect = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="teachers-block">
      <div className="teacher-title">{title}</div>
      <select className="teacher-select" onChange={onChangeSelect}>
        {teachers.map((el) => (
          <option>{el.categoryName}</option>
        ))}
      </select>
      <ul className="teacher-list">
        {teachers
          .find((el) => el.categoryName === category)
          .data.map((el) => (
            <li key={el.name}>
              <TeacherCard {...el} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Teachers;
