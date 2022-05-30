//#region Imports

import { ReactElement, useEffect, useState } from 'react';
import { MainTableProxy } from '../../models/main-table.proxy';
import Report from '../../services/report';
import TableRow from '../table-row/table-row';
import './main-table.css';

//#endregion

function MainTable(): ReactElement {
  const [tableInfo, setTableInfo] = useState<MainTableProxy[]>([]);

  useEffect(() => {
    const loadTableInfo = async () => {
      const info = await Report.getTableInfo();

      setTableInfo(info);
    };

    loadTableInfo();
  }, []);

  return (
    <div className="table">
      <table>
        <tr>
          <th>Ano</th>
          <th>Compras</th>
          <th>Vendas</th>
          <th>ICMS Pago</th>
          <th>ST Pago</th>
          <th></th>
        </tr>
        {
          tableInfo.map((table) => (
            <TableRow table={ table }/>
          ))
        }
      </table>
    </div>
  );
}

export default MainTable;
