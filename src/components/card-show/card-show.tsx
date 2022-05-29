//#region Imports

import { ReactElement } from 'react';
import { MainCardProxy } from '../../models/main-card.proxy';
import './card-show.css';

//#endregion

function CardShow({ card }: { card: MainCardProxy }): ReactElement {
  return (
    <div className="card">
      <span>{ card.tag }</span>
      <hr/>
      <strong>{ card.valor }</strong>
    </div>
  );
}

export default CardShow;
