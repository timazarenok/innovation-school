import React from "react";
import { Image, Nav } from "react-bootstrap";
import HeaderItems from "../header/header-items";
import FooterPlace from "./footer-place";
import { Facebook, Instagram, Telegram, Youtube } from "react-bootstrap-icons";
import logo from "../../images/logo.png";
import "./footer.css";

const places = [
  {
    name: "Детский сад на Пугачевской",
    contact: "+375 29 353 84 08 (Оксана Вячеславовна)",
    address: "г. Минск, ул. Пугачевская, 10",
    metro: "(станция метро «площадь Я. Коласа»)",
  },
  {
    name: "Детский сад на Якубова ",
    contact: "+375 29 353 84 08 (Оксана Вячеславовна)",
    address: "г. Минск, ул. Якубова, 60",
    metro: "(станция метро «Партизанская»)",
  },
  {
    name: "Школа 1-8 классы",
    contact: "+375 29 388 08 90 (Елена Олеговна)",
    seccontact: "+375 29 189 21 25 (Ольга Николаевна)",
    address: "г. Минск, ул. Пугачевская, 10",
    metro: "(станция метро «площадь Я. Коласа»)",
  },
  {
    name: "Школа 9-11 классы",
    contact: "+375 29 353 84 08 (Елена Олеговна)",
    seccontact: "+375 29 614 50 70 (Наталья Сергеевна)",
    address: "г. Минск, ул. Фабрициуса, 4",
    metro: "(станция метро «Институт культуры»)",
  },
];

const Footer = () => (
  <div className="footer">
    <div className="footer-items">
      <Nav className="footer-header-items">
        <HeaderItems />
      </Nav>
      <ul className="places">
        {places.map((el) => (
          <FooterPlace {...el} />
        ))}
      </ul>
      <div className="footer-info">
        <div className="place-name">
          Email:
          <br />
          <span className="footer-email">innovagroup.belarus@gmail.com</span>
        </div>
        <div className="footer-title">Оставайтесь вместе с нами</div>
        <ul className="socials">
          <li>
            <a href="tg://resolve?domain=innovagroupby">
              <Telegram size={25} />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/innovaby/">
              <Facebook size={25} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/innovagroupby/">
              <Instagram size={25} />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCRzVmNooD57s5jyMy9TiPDg">
              <Youtube size={25} />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="comapny-info-block">
      <Image className="footer-logo" src={logo} alt="logo" />
      <div className="company-info">
        Частное учреждение образования «Учебно-педагогический комплекс детский
        сад – средняя школа «Инновация». <br />
        УНП 192640967
      </div>
    </div>
  </div>
);

export default Footer;
