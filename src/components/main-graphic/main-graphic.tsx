//#region Imports

import { ReactElement, useEffect, useState } from 'react';
import { Bar, BarChart, Cell, Tooltip } from 'recharts';

import { MainGraphicProxy } from '../../models/main-graphic.proxy';
import Report from '../../services/report';
import { getGraphicColor } from '../../utils/functions';
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
        info[i].value = +(valueFinal.split('R$')[1]);
        chartData[i].value = info[i].value || 0;
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

      <div className="graphic--data">
        <h6>Faturamento por ano</h6>
        <hr className="space"/>

        <BarChart width={ 400 } height={ 150 } data={ chartData }>
          <Bar dataKey="value">
            {
              chartBarColors.map((entry, index) => (
                <Cell key={ `cell-${ index }` } fill={ chartBarColors[index] }/>
              ))
            }
          </Bar>
          <Tooltip wrapperStyle={ { width: '100%' } }
                   separator={ '' }
                   label={ '' }
                   labelFormatter={ () => '' }
                   contentStyle={ { backgroundColor: '#3f3f3f', borderRadius: '5px' } }
                   itemStyle={ { color: '#fff' } }
                   cursor={ { fill: 'transparent' } }
                   formatter={ (value: number) => [`${ convertChartValueOnInfo(graphicInfo, value) }`, ''] }/>
        </BarChart>
      </div>
    </div>
  );
}

const chartBarColors = [
  getGraphicColor(2017),
  getGraphicColor(2018),
  getGraphicColor(2019),
  getGraphicColor(2020),
  getGraphicColor(2021),
];

const chartData = [
  {
    name: '2017',
    value: 0,
  },
  {
    name: '2018',
    value: 0,
  },
  {
    name: '2019',
    value: 0,
  },
  {
    name: '2020',
    value: 0,
  },
  {
    name: '2021',
    value: 0,
  },
];

const convertChartValueOnInfo = (info: MainGraphicProxy[], value: number): string => {
  const graphic = info.find(i => i.value === value);

  if (!graphic)
    return 'Informação não encontrada.';

  const percentage = (graphic.porcentagem * 100).toFixed(2);
  return `${ graphic.ano } | ${ percentage } % | ${ graphic.saldo }`;
};

export default MainGraphic;
