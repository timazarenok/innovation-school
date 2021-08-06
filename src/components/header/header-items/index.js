import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeaderItems = () => (
  <>
    <Nav.Item>
      <Link to="/about-us">О нас</Link>
    </Nav.Item>
    <NavDropdown title="Деятельность" id="collasible-nav-dropdown">
      <NavDropdown.Item>Action</NavDropdown.Item>
      <NavDropdown.Item>Action</NavDropdown.Item>
    </NavDropdown>
    <Nav.Item>
      <Link to="/center-add-education">Центр доп. образования</Link>
    </Nav.Item>
    <NavDropdown title="Блог" id="collasible-nav-dropdown">
      <NavDropdown.Item>Action</NavDropdown.Item>
      <NavDropdown.Item>Action</NavDropdown.Item>
      <NavDropdown.Item>Action</NavDropdown.Item>
    </NavDropdown>
    <Nav.Item>Новости</Nav.Item>
    <Nav.Item>Контакты</Nav.Item>
  </>
);

export default HeaderItems;
