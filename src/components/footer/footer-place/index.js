import React from "react";

import './footer-place.css'

const FooterPlace = ({ name, contact, address, metro, seccontact }) => (
  <li>
    <div className="place-name">{name}</div>
    <div className="place-contact">{contact}</div>
    {seccontact != undefined ? <div className="place-contact">{seccontact}</div> : null}
    <address className="place-address">{address}</address>
    <div className="place-metro">{metro}</div>
  </li>
);

export default FooterPlace;
