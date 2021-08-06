import React from "react";
import { Image } from "react-bootstrap";
import "./about-us.css";
import Teachers from "../teachers";
import YouTube from "react-youtube";

const video_id = "tQVTae7je9E";

const texts = [
  "Обучение на русском и английском языках",
  "X-XI практико-ориентированные профильные классы",
  "V-IX предпрофильные классы",
  "STEAM лаборатории",
  "РОББО-техническая лаборатория",
  "Экспериментальный проект, интегрирующий ИТ технологии в трудовое обучение (I-IX классы)",
];

const AboutUs = () => {
  return (
    <>
      <div className="about-first-block">
        <div className="main-title">
          Частное учреждение образования «Учебно-педагогический комплекс детский
          сад – средняя школа «Инновация».
        </div>
        <div className="main-subtitle">
          Детство – это ты и я, И наша «Инновация».
        </div>
        <YouTube
          className="video"
          videoId="tQVTae7je9E"
          opts={{ width: "700", height: "400" }}
        />
      </div>
      <div className="about-second-block">
        <div className="secondblock-title">
          Инновация: обучение без принуждения
        </div>
        <ul>
          {texts.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
        <div className="about-information">
          <Image className="about-image" src="" alt="" />
          <div>
            <div>
              Раскрываем потенциал без потери детской непосредственности
            </div>
            <ul className="about-list">
              <li>поддерживаем и вдохновляем каждого ребенка</li>
              <li>
                открываем у детей познавательный интерес и веру в свои силы
              </li>
              <li>учим учиться через действие</li>
              <li>помогаем выстроить дружественные отношения в коллективе</li>
              <li>
                наполняем эмоции детей классическими жизненными ценностями и
                традициями
              </li>
            </ul>
          </div>
        </div>
        <Teachers title={"Педагогический состав УПК «Инновация»"} />
        <Teachers title={"Воспитатели детского сада"} />
        <Teachers title={"Педагоги начальной школы"} />
        <Teachers title={"Педагоги средней школы"} />
        <Teachers title={"Педагоги Центра дополнительного образования"} />
        <Teachers title={"Teachers of Pearson International School in Minsk"} />
      </div>
    </>
  );
};

export default AboutUs;
