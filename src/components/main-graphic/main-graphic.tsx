//#region Imports

import { ReactElement, useEffect, useState } from 'react';
import { Bar, BarChart, Cell, Tooltip } from 'recharts';

import { MainGraphicProxy } from '../../models/main-graphic.proxy';
import Report from '../../services/report';
import './main-graphic.css';

//#endregion

function MainGraphic(): ReactElement {
  const [graphicInfo, setGraphicInfo] = useState<MainGraphicProxy[]>([]);

  useEffect(() => {
    const loadGraphicInfo = async () => {
      const info = await Report.getGraphicInfo();

      setGraphicInfo(info);

      for (let i = 0; i < info.length; i++) {
        const value = info[i].saldo.replaceAll('.', '');
        const valueFinal = value.replaceAll(',', '.');
        chartData[i].value = +(valueFinal.split('R$')[1]);
      }
    };

    loadGraphicInfo();
  }, []);

  return (
    <div className="graphic">
      <div className="graphic--index">
        <h6>Índice</h6>
        <hr/>
        {
          graphicInfo.map((graphic) => (
            <div className="graphic--index--year">
              <div className="circle" style={ { background: getGraphicColor(+graphic.ano) } }/>
              <span>{ graphic.ano }</span>
            </div>
          ))
        }
      </div>

      {/* TODO: Adicionar informações no Tooltip */}
      <div className="graphic--data">
        <h6>Faturamento por ano</h6>
        <hr className="space"/>
        <BarChart width={ 520 } height={ 150 } data={ chartData }>
          <Bar dataKey="value">
            {
              chartBarColors.map((entry, index) => (
                <Cell key={ `cell-${ index }` } fill={ chartBarColors[index] }/>
              ))
            }
          </Bar>
          <Tooltip wrapperStyle={ { width: 200, backgroundColor: '#ccc' } }
                   formatter={ (value: any) => `${ value }` }/>
        </BarChart>
      </div>
    </div>
  );
}

const getGraphicColor = ((year: number) => {
  switch (year) {
    case 2017:
      return 'orange';
    case 2018:
      return 'green';
    case 2019:
      return 'red';
    case 2020:
      return 'blue';
    case 2021:
      return 'purple';
  }
});

const chartBarColors = ['orange', 'green', 'red', 'blue', 'purple'];

const chartData = [
  {
    name: '2017',
    value: 4000,
  },
  {
    name: '2018',
    value: 3000,
  },
  {
    name: '2019',
    value: 3000,
  },
  {
    name: '2020',
    value: 3000,
  },
  {
    name: '2021',
    value: 3000,
  },
];

export default MainGraphic;
