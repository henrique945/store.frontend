//#region Imports

import { ReactElement } from 'react';
import MainCard from '../../components/main-card/main-card';
import MainGraphic from '../../components/main-graphic/main-graphic';
import MainTable from '../../components/main-table/main-table';
import './main.css';

//#endregion

function Main(): ReactElement {

  return (
    <div className="container">
      <MainCard/>
      <hr/>
      <MainGraphic/>
      <MainTable/>
    </div>
  );
}

export default Main;
