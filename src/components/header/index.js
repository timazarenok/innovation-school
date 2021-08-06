import React from "react";
import { Navbar, Image, Nav, NavDropdown, Button } from "react-bootstrap";

import logo from "../../images/logo.png";
import "./header.css";
import { Facebook, Instagram, Telegram, Youtube } from "react-bootstrap-icons";
import HeaderItems from "./header-items";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Nav className="social-nav">
        <Nav.Item>
          <Telegram size={20} />
          Telegram
        </Nav.Item>
        <Nav.Item>
          <Facebook size={20} /> Facebook
        </Nav.Item>
        <Nav.Item>
          <Instagram size={20} /> Intagram
        </Nav.Item>
        <Nav.Item>
          <Youtube size={20} /> YouTube
        </Nav.Item>
      </Nav>
      <Navbar>
        <Navbar.Brand>
          <Link to="/">
            <Image src={logo} />
          </Link>
        </Navbar.Brand>
        <Nav className="mr-sm-2 header-nav">
          <HeaderItems />
          <Nav.Item>
            <span>+375 29 388 08 90</span>
            <span>+375 33 645 45 66</span>
          </Nav.Item>
          <Button className="header-button d-flex">Отправить заявку</Button>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
