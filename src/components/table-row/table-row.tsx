//#region Imports

import { ReactElement } from 'react';
import { MainTableProxy } from '../../models/main-table.proxy';
import './table-row.css';
import { getGraphicColor } from '../../utils/functions';

//#endregion

function TableRow({ table }: { table: MainTableProxy }): ReactElement {
  return (
    <tr>
      <td>
        <div className="circle-container">
          <div className="circle" style={ { background: getGraphicColor(+table.ano) } }/>
          { table.ano }
        </div>
      </td>
      <td>{ table.compras }</td>
      <td>{ table.vendas }</td>
      <td>{ table.ICMS }</td>
      <td>{ table.ST }</td>
      <td>
        <div className="empty"/>
      </td>
    </tr>
  );
}

export default TableRow;
