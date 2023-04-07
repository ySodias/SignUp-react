import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { AgGridReact } from '@ag-grid-community/react';
import {AllCommunityModules, ColDef, ICellRendererParams, MenuItemDef} from "@ag-grid-community/all-modules"
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import CSS from 'csstype';


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
      { headerName: "Data Início",field: "data_inicio", width: 200, minWidth: 170 },
      { headerName: "Data Troca",field: "data_troca", width: 200, minWidth: 170 }
    ]


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
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          enableRangeSelection={true}>
      </AgGridReact>
  </div>
)
}
