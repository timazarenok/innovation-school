import React from 'react'

import { kindergartenInfo } from '../../utils';
import KindergartenInfoCard from './kindergarten-info-card';
import './kindergarten-info-cards.css'

const KindergartenInfoCards = () => {
  return (
    <ul className="kindergarten-info-cards">
      {
        kindergartenInfo.map(el => <KindergartenInfoCard {...el}/>)
      }
    </ul>
  ); 
}

export default KindergartenInfoCards;