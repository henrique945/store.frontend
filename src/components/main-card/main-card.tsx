//#region Imports

import { ReactElement, useEffect, useState } from 'react';
import { MainCardProxy } from '../../models/main-card.proxy';
import Report from '../../services/report';
import CardShow from '../card-show/card-show';
import './main-card.css';

//#endregion

function MainCard(): ReactElement {
  const [cardsInfo, setCardsInfo] = useState<MainCardProxy[]>([]);

  useEffect(() => {
    const loadCardsInfo = async () => {
      const info = await Report.getCardsInfo();

      info.forEach((card, index) => {
        if (index === 2 || index === 3)
          card.tag += ' PAGO';
      });
      setCardsInfo(info);
    };

    loadCardsInfo();
  }, []);

  return (
    <div className="cards">
      {
        cardsInfo.map((card, key) => (
          <CardShow key={ key } card={ card }/>
        ))
      }
    </div>
  );
}

export default MainCard;
