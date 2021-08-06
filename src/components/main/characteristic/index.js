import React from 'react'
import { Image } from 'react-bootstrap'

import './characteristic.css'

const Characteristic = ({image, text}) => (
  <li>
    <Image className="card-image" src={image} alt={text}/>
    <div className="card-text">{text}</div>
  </li>
)

export default Characteristic;