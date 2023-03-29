import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { AgGridReact } from '@ag-grid-community/react';
import {AllCommunityModules, ColDef, ICellRendererParams, MenuItemDef} from "@ag-grid-community/all-modules"
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import CSS from 'csstype';
import { useTreino } from '../hooks/useTreino';
import { useNavigate } from 'react-router-dom';

export type ITTableTreinoPros = {
  rowDataSource: any;
}

const SizeTable: CSS.Properties = {
  height: '50vh',
  width: '60vw',
}

export const TableTreino: React.FC<ITTableTreinoPros> = ({
  rowDataSource
}) => {

  const defaultColDef = useMemo<ColDef>(() => {
    return {
      flex: 1,
      minWidth: 100,
      resizable: true,
    };
  }, []);
  
  const columnDefs = [
      { headerName: "Exercícios", field: "nome_exercicio", width: 150, minWidth: 90},
      { headerName: "Tipo de Treino",field: "tipo_exercicio", width: 150, minWidth: 90 },
      { headerName: "Repetições", field: "repeticoes", width: 150, minWidth: 90 },
      { headerName: "Carga (kg)",field: "carga", width: 150, minWidth: 90 },
      { headerName: "Frequência",field: "frequencia", width: 200, minWidth: 170 },
    ]

  const InitialRowData = [
    {nome: "Toyota", 
    dt_matricula: "2020-04-03 09:51:23.21051", 
    vencimento_mensalidade: "9"},
  ];
  const [rowData, setRowData] = useState(InitialRowData);


  useEffect(() => {
    console.log(rowDataSource)
    setRowData(rowDataSource)
  },[])


  return (
    <div className="ag-theme-alpine table-ativos" style={SizeTable}>
      <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          enableRangeSelection={true}
          allowContextMenuWithControlKey={true}>
      </AgGridReact>
  </div>
)
}
