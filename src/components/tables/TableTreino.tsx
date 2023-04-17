// @ts-nocheck
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { AgGridReact } from '@ag-grid-community/react';
import { ColDef } from "@ag-grid-community/all-modules"
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import CSS from 'csstype';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export type ITTableTreinoPros = {
  nomeCliente: string;
  rowDataSource: any;
}

const SizeTable: CSS.Properties = {
  height: '50vh',
  width: '100%',
}

const SizeButtonStyle: CSS.Properties = {
  height: '3.5vh',
  width: '2vw',
  minWidth: '50px',
  padding: '0px'
}

export const TableTreino: React.FC<ITTableTreinoPros> = ({
  nomeCliente,
  rowDataSource
}) => {

  const navigate = useNavigate()

  const handleButtonEditar = () => {
    navigate('/EditarTreino', {state: {
      id: Number(gridOptions.api.getSelectedRows()[0]?.id),
      nomeCliente: nomeCliente
    }})
  }

  const buttonEditar = () => {
    return (
      <Button variant='warning' style={SizeButtonStyle} onClick={handleButtonEditar}>Editar</Button>
    )
  }


  const gridOptions = {
    columnDefs :[
      { headerName: "Exercícios", field: "nome_exercicio", filter: true, width: 150, minWidth: 90},
      { headerName: "Repetições", field: "repeticoes", width: 150, minWidth: 90 },
      { headerName: "Carga (kg)",field: "carga", width: 150, minWidth: 90 },
      { headerName: "Frequência Semanal",field: "frequencia", width: 200, minWidth: 170 },
      { headerName: "Data Início",field: "data_inicio", width: 200, minWidth: 170 },
      { headerName: "Data Troca",field: "data_troca", width: 200, minWidth: 170 },
      {  field: '',
      cellRenderer: buttonEditar, width: 150, minWidth: 90
      }
    ],
    rowSelection: 'single',
  }

  const defaultColDef = useMemo<ColDef>(() => {
    return {
      flex: 1,
      minWidth: 100,
      resizable: true,
      floatingFilter: true
    };
  }, []);


  const InitialRowData: any[] = [];

  const [rowData, setRowData] = useState(InitialRowData);


  useEffect(() => {
    if (rowDataSource.length > 0) {
      setRowData(rowDataSource)
    }
  },[])


  return (
    <div className="ag-theme-alpine table-ativos" style={SizeTable}>
      <AgGridReact
          rowData={rowData}
          gridOptions={gridOptions}
          defaultColDef={defaultColDef}
          enableRangeSelection={true}>
      </AgGridReact>
  </div>
)
}
