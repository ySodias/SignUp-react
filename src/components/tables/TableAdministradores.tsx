// @ts-nocheck
import React, { useEffect, useState, useMemo } from 'react';
import { AgGridReact } from '@ag-grid-community/react';
import { AllCommunityModules, ColDef} from "@ag-grid-community/all-modules"
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import CSS from 'csstype';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAdministrador } from '../../hooks/useAdministrador';


export type ITTableAdministradorPros = {
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

export const TableAdministrador: React.FC<ITTableAdministradorPros> = ({
}) => {

  const navigate = useNavigate()

  const handleButtonEditar = () => {
    navigate('/EditarAdministrador', {state: {
      id: Number(gridOptions.api.getSelectedRows()[0]?.id),
    }})
  }

  const buttonEditar = () => {
    return (
      <Button variant='warning' style={SizeButtonStyle} onClick={handleButtonEditar}>Editar</Button>
    )
  }


  const gridOptions = {
    columnDefs :[
      { headerName: "Nome", field: "nome", filter: true, width: 150, minWidth: 90},
      { headerName: "Email", field: "email", filter: true, width: 150, minWidth: 90 },
      { headerName: "Endereco",field: "endereco", width: 150, minWidth: 90 },
      { headerName: "Telefone",field: "telefone", width: 200, minWidth: 170 },
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


  const [administrador, setAdministrador] = useState();
  const { getAdministrador } = useAdministrador()

  async function getData(){
    return await getAdministrador({})
  }

  useEffect(() => {
    getData().then(async(resp) => {
        setAdministrador(resp)
    })
    console.log(administrador)
  },[])


  return (
    <div className="ag-theme-alpine table-ativos" style={SizeTable}>
      <AgGridReact
          modules={AllCommunityModules}
          rowData={administrador}
          gridOptions={gridOptions}
          defaultColDef={defaultColDef}
          enableRangeSelection={true}>
      </AgGridReact>
  </div>
)
}
