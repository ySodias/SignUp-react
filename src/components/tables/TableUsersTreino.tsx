// @ts-nocheck
import React, { useEffect, useState, useCallback, useRef, useMemo } from 'react';
import { usePagamentos } from '../../hooks/usePagamentos';
import { AgGridReact } from '@ag-grid-community/react';
import {AllCommunityModules, CellClickedEvent, ColDef} from "@ag-grid-community/all-modules"
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import CSS from 'csstype';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useUsuario } from '../../hooks/useUsuario';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export interface ITablePagamentosPros {}

const SizeTable: CSS.Properties = {
  height: '50vh',
  width: '100%',
}

const SizeButtonEncerrarStyle: CSS.Properties = {
  height: '3.5vh',
  width: '5vw',
  minWidth: '100px',
  padding: '0px'
}

export const TableUsersTreino: React.FC<ITablePagamentosPros > = () => {


  const navigate = useNavigate()
  const { getPagamentos } = usePagamentos();
  const [rowData, setRowData] = useState();

  async function getData() {
    const response = await getPagamentos(true)
    return response
  }

  useEffect(() => {

    getData()
    .then((resp) => resp.map(res => res))
    .then((rowData) => {
      setRowData(rowData)
    })
  },[])

  const handleButtonIrParaTreino = () => {
      let selectedRows = onSelectionChanged()
      navigate('/Treino', {state: {id: selectedRows[0].id}})
  }
  
  const buttonTreino = () => {
    return (
      <Button variant='secondary' style={SizeButtonEncerrarStyle} onClick={handleButtonIrParaTreino}>Ir para Treino</Button>
    )
  }


  const gridOptions = {
    columnDefs :[
      { headerName: "Nome", field: "nome", filter: true, width: 200, minWidth: 170},
      { headerName: "Cadastrado em", field: "cadastrado_em", width: 150, minWidth: 90 },
      {  field: '',
      cellRenderer: buttonTreino, width: 150, minWidth: 150
      }
    ], 
      onSelectionChanged: onSelectionChanged,
      rowSelection: 'single',
      onCellClicked: (event: CellClickedEvent) => {
        if (event.value !== undefined) {
          let selectedRows = onSelectionChanged()
          navigate('/Treino', {state: {id: selectedRows[0].id}})
        }
      }
  }

  const rowClassRules =  {
    'rag-red-outer': function(params) {
      return params.data.status_matricula === 'PENDENTE'
    }
}

  const defaultColDef = useMemo<ColDef>(() => {
    return {
      flex: 1,
      minWidth: 200,
      resizable: true,
      floatingFilter: true,
    };
  }, []);

  function onSelectionChanged(): any {
    const selectedRows = gridOptions.api.getSelectedRows();
    return selectedRows
  }


  return (
    <div className="ag-theme-alpine table-ativos" style={SizeTable}>
      <AgGridReact
          modules={AllCommunityModules}
          defaultColDef={defaultColDef}
          rowData={rowData}
          gridOptions={gridOptions}
          rowClassRules={rowClassRules}>
      </AgGridReact>
      <ToastContainer />
  </div>
)
}


