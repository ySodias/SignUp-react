import React, { useEffect, useState } from 'react';
import { usePagamentos } from '../hooks/usePagamentos';
import { AgGridReact } from '@ag-grid-community/react';
import {AllCommunityModules} from "@ag-grid-community/all-modules"
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import CSS from 'csstype';

export interface ITablePagamentosPros {}

const SizeTable: CSS.Properties = {
  height: '50vh',
  width: '60vw',
}

export const TableUsersInativos: React.FC<ITablePagamentosPros > = () => {

  const columnDefs = [
    { headerName: "Nome", field: "nome" },
    { headerName: "Data da Matricula", field: "dt_matricula" },
    { headerName: "Encerrado em",field: "encerrado_em" }
  ];

  const InitialRowData = [
    {nome: "Toyota",
    dt_matricula: "2020-04-03 09:51:23.21051", 
    encerrado_em: "2020-06-03 09:51:23.21051"},
  ];

  const { getPagamentos } = usePagamentos();

  const [rowData, setRowData] = useState(InitialRowData);

  async function getData() {
    const response = await getPagamentos(false);
    return response;
  }

  useEffect(() => {
    getData()
    .then((resp) => resp.map(res => res))
    .then((rowData) => {
      console.log(rowData)
      setRowData(rowData)
    })
  },[])

  return (
    <div className="ag-theme-alpine table-inativos" style={SizeTable}>
      <AgGridReact
          modules={AllCommunityModules}
          defaultColDef={{ flex: 1 }}
          rowData={rowData}
          columnDefs={columnDefs}>
      </AgGridReact>
  </div>
)
}

