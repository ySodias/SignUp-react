import React, { useEffect, useState, useCallback, useRef } from 'react';
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

export const TableUsersAtivos: React.FC<ITablePagamentosPros > = () => {

  
  const columnDefs = [
    { headerName: "Nome", field: "nome" },
    { headerName: "Data da Matricula", field: "dt_matricula" },
    { headerName: "Vencimento da Mensalidade",field: "vencimento_mensalidade" }
  ];

  const InitialRowData = [
    {nome: "Toyota", 
    dt_matricula: "2020-04-03 09:51:23.21051", 
    vencimento_mensalidade: "9"},
  ];

  const { getPagamentos } = usePagamentos();

  const [rowData, setRowData] = useState(InitialRowData);

  async function getData() {
    const response = await getPagamentos(true);
    return response;
  }

  useEffect(() => {
    getData()
    .then((resp) => resp.map(res => res))
    .then((rowData) => {

      setRowData(rowData)
    })
  },[])


  return (
    <div className="ag-theme-alpine table-ativos" style={SizeTable}>
      <AgGridReact
          modules={AllCommunityModules}
          defaultColDef={{ flex: 1 }}
          rowData={rowData}
          columnDefs={columnDefs}>
      </AgGridReact>
  </div>
)
}

