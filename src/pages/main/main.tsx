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
      <hr className="mb-2"/>
      <MainGraphic/>
      <div className="mb-2"/>
      <MainTable/>
    </div>
  );
}

export default Main;
