import React, { useEffect, useState, useCallback, useRef } from 'react';
import { usePagamentos } from '../hooks/usePagamentos';
import { AgGridReact } from '@ag-grid-community/react';
import {AllCommunityModules} from "@ag-grid-community/all-modules"
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import CSS from 'csstype';
import { useNavigate } from 'react-router-dom';

export interface ITablePagamentosPros {}

const SizeTable: CSS.Properties = {
  height: '50vh',
  width: '60vw',
}



export const TableUsersAtivos: React.FC<ITablePagamentosPros > = () => {

  const gridOptions = {
    columnDefs :[
      { headerName: "Nome", field: "nome", width: 150, minWidth: 90},
      { headerName: "Estado da Matrícula",field: "estado_matricula", width: 150, minWidth: 90 },
      { headerName: "Cadastrado em", field: "cadastrado_em", width: 150, minWidth: 90 },
      { headerName: "Status Mensalidade",field: "status_matricula", width: 150, minWidth: 90 },
      { headerName: "Ultima Mensalidade Paga",field: "ultima_mensalidade_paga", width: 200, minWidth: 170 },
      { headerName: "Vencimento da Mensalidade",field: "vencimento_mensalidade", width: 200, minWidth: 170 }
    ], 
      onSelectionChanged: onSelectionChanged,
      rowSelection: 'single',
  }

  const InitialRowData = [
    {nome: "Toyota", 
    dt_matricula: "2020-04-03 09:51:23.21051", 
    vencimento_mensalidade: "9"},
  ];
  const navigate = useNavigate()
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

  function onSelectionChanged() {
    const selectedRows = gridOptions.api.getSelectedRows();
    console.log(selectedRows)
    navigate('/Treino', {state: {id: selectedRows[0].id}})
  }


  return (
    <div className="ag-theme-alpine table-ativos" style={SizeTable}>
      <AgGridReact
          modules={AllCommunityModules}
          defaultColDef={{ flex: 1 }}
          rowData={rowData}
          gridOptions={gridOptions}>
      </AgGridReact>
  </div>
)
}

