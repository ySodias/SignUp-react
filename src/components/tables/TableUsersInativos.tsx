// @ts-nocheck
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { usePagamentos } from '../../hooks/usePagamentos';
import { AgGridReact } from '@ag-grid-community/react';
import {AllCommunityModules, ColDef} from "@ag-grid-community/all-modules"
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import CSS from 'csstype';
import { Button } from 'react-bootstrap';
import { useUsuario } from '../../hooks/useUsuario';
import { ToastContainer, toast } from 'react-toastify';
import { UsuarioService } from '../../service/Usuario';

export interface ITablePagamentosPros {}

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

export const TableUsersInativos: React.FC<ITablePagamentosPros > = () => {

  const { getPagamentos } = usePagamentos();
  const { getUsuario, putUsuario } = useUsuario();

  async function handleButtonAtivar() {
    const id = gridOptions.api.getSelectedRows()[0]?.id;
    console.log(id)
    await getUsuario({id: id}).then(async (res) => {
      const body = {
        id: res[0].id,
        cpf: res[0].cpf,
        nome_cliente: res[0].nome_cliente,
        data_nascimento: res[0].data_nascimento,
        endereco: res[0].endereco,
        forma_pagamento: res[0].forma_pagamento,
        telefone: res[0].telefone,
        ativo: true,
        plano: res[0].plano
      }
      const response = await putUsuario(body)
      if (response=="update with sucess") {
        toast.success('Matricula encerrada com Sucesso', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
          setTimeout(() => 
          {
              window.location.reload(); 
          },
          2500);
      }
    })
  }

  const buttonAtivar = () => {
    return (
      <Button variant='success' style={SizeButtonStyle} onClick={handleButtonAtivar}>Ativar</Button>
    )
  }
  const gridOptions = {
    columnDefs: [
      { headerName: "Nome", field: "nome", filter: true, width: 150, minWidth: 90},
      { headerName: "Cadastrado em", field: "cadastrado_em", width: 150, minWidth: 90 },
      { headerName: "Status Mensalidade",field: "status_matricula", width: 150, minWidth: 90 },
      { headerName: "Desativado em",field: "ultima_mensalidade_paga", width: 200, minWidth: 170 },
      {  field: '',
        cellRenderer: buttonAtivar, width: 150, minWidth: 90
      },
    ],
    rowSelection: 'single',
  }

  const defaultColDef = useMemo<ColDef>(() => {
    return {
      flex: 1,
      minWidth: 200,
      resizable: true,
      floatingFilter: true,
    };
  }, []);

  const InitialRowData = [
    {nome: "Toyota", 
    dt_matricula: "2020-04-03 09:51:23.21051", 
    vencimento_mensalidade: "9"},
  ];

  const [rowData, setRowData] = useState(InitialRowData);

  async function getData() {
    const response = await getPagamentos(false);
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
    <div className="ag-theme-alpine table-inativos" style={SizeTable}>
      <AgGridReact
          modules={AllCommunityModules}
          defaultColDef={defaultColDef}
          rowData={rowData}
          gridOptions={gridOptions}
          undoRedoCellEditing={true}>
      </AgGridReact>
      <ToastContainer />
  </div>
)
}

