import React from "react";
import Lesson from "./lesson";

import "./lessons.css";

import { lessons } from "../utils";

const Lessons = () => {
  return (
    <div className="lessons-block">
      <ul className="lessons-list">
        {lessons.map((el) => (
          <li key={el.name}>
            <Lesson {...el} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lessons;
