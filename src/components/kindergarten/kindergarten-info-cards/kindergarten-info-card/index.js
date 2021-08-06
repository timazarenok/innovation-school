import React from 'react'

import './kindergarten-info-card.css'

const KindergartenInfoCard = ({title, description, number}) => (
  <li>
    <div className="title">{title}</div>
    <p className="description">{description.split("<br />").map(el => (
      <>
        <br />
        {el}
        <br />
      </>
    ))}</p>
    <div className="number">{number}</div>
    <hr />
  </li>
)

export default KindergartenInfoCard;