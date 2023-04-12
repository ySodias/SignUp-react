import React, { useEffect, useState, useCallback, useRef } from 'react';
import { usePagamentos } from '../../hooks/usePagamentos';
import { AgGridReact } from '@ag-grid-community/react';
import {AllCommunityModules, CellClickedEvent} from "@ag-grid-community/all-modules"
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import CSS from 'csstype';
import { useNavigate } from 'react-router-dom';
import { Alert, Button } from 'react-bootstrap';
import { useUsuario } from '../../hooks/useUsuario';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export interface ITablePagamentosPros {}

const SizeTable: CSS.Properties = {
  height: '50vh',
  width: '60vw',
}

const SizeButtonStyle: CSS.Properties = {
  height: '3.5vh',
  width: '3.5vw',
  padding: '0px'
}

const SizeButtonEncerrarStyle: CSS.Properties = {
  height: '3.5vh',
  width: '5vw',
  padding: '0px'
}

export const TableUsersAtivos: React.FC<ITablePagamentosPros > = () => {


  const navigate = useNavigate()
  const { getPagamentos, getPagamentosUsuario, putPagamentosUsuario } = usePagamentos();
  const { getUsuario, putUsuario } = useUsuario();

  const InitialRowData = [
    {nome: "Toyota", 
    dt_matricula: "2020-04-03 09:51:23.21051", 
    vencimento_mensalidade: "9"},
  ];

  const [rowData, setRowData] = useState(InitialRowData);

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


  const handleButtonEditar = () => {
    console.log(gridOptions.api.getSelectedRows()[0]?.id)
    navigate('/EditarCadastro', {state: {
      id: Number(gridOptions.api.getSelectedRows()[0]?.id)
    }})
  }

  async function handleButtonPagar() {
    const id = gridOptions.api.getSelectedRows()[0]?.id;
    await getUsuario({id: id}).then(async (res) => {
       await getPagamentosUsuario(res[0].cpf).then(async(resp)=>{
        if (resp){
          let antiga_data_ventcimento = new Date(resp.data_vencimento)
          let nova_data_vencimento = new Date()
          nova_data_vencimento.setMonth(antiga_data_ventcimento.getMonth() + 1)
          const body = {
            id: Number(resp.id),
            cpf_usuario: res[0].cpf,
            data_vencimento: nova_data_vencimento.toISOString().split('T')[0],
            forma_pagamento: Number(resp.forma_pagamento),
            valor_pagamento: Number(resp.valor_pagamento)
          }
          await putPagamentosUsuario(body).then(async(r) => {
          console.log(r === 'update with sucess')
          if (r === 'update with sucess'){
            toast.success('Pagamento realizado com Sucesso', {
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

        }})
        }
      })
      })
    };
  
  async function handleButtonencerrar() {
    const id = gridOptions.api.getSelectedRows()[0]?.id;
    await getUsuario({id: id}).then(async (res) => {
      const body = {
        id: res[0].id,
        cpf: res[0].cpf,
        nome_cliente: res[0].nome_cliente,
        data_nascimento: res[0].data_nascimento,
        endereco: res[0].endereco,
        forma_pagamento: res[0].forma_pagamento,
        telefone: res[0].telefone,
        ativo: false,
        plano: res[0].plano
      }
      const response = await putUsuario(body)
      if (response === "update with sucess") {
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

  const buttonPagar = () => {
    return (
      <Button variant='success' style={SizeButtonStyle} onClick={handleButtonPagar}>Pagar</Button>
    )
  }
  const buttonEditar = () => {
    return (
      <Button variant='warning' style={SizeButtonStyle} onClick={handleButtonEditar}>Editar</Button>
    )
  }

  const buttonEncerrar = () => {
    return (
      <Button variant='danger' style={SizeButtonEncerrarStyle} onClick={handleButtonencerrar}>Encerrar</Button>
    )
  }


  const gridOptions = {
    columnDefs :[
      { headerName: "Nome", field: "nome", width: 150, minWidth: 90},
      { headerName: "Cadastrado em", field: "cadastrado_em", width: 150, minWidth: 90 },
      { headerName: "Status Mensalidade",field: "status_matricula", width: 150, minWidth: 90 },
      { headerName: "Ultima Mensalidade Paga",field: "ultima_mensalidade_paga", width: 200, minWidth: 170 },
      { headerName: "Vencimento da Mensalidade",field: "vencimento_mensalidade", width: 200, minWidth: 170 },
      {  field: '',
        cellRenderer: buttonPagar, width: 150, minWidth: 90
      },
      {  field: '',
      cellRenderer: buttonEditar, width: 150, minWidth: 90
      },
      {  field: '',
      cellRenderer: buttonEncerrar, width: 150, minWidth: 150
      }
    ], 
      onSelectionChanged: onSelectionChanged,
      rowSelection: 'single',
      onCellClicked: (event: CellClickedEvent) => {
        if (event.value !== undefined) {
          let selectedRows = onSelectionChanged()
          navigate('/Treino', {state: {id: selectedRows[0].id}})
        }
      },

  }

  function onSelectionChanged(): any {
    const selectedRows = gridOptions.api.getSelectedRows();
    return selectedRows
  }


  return (
    <div className="ag-theme-alpine table-ativos" style={SizeTable}>
      <AgGridReact
          modules={AllCommunityModules}
          defaultColDef={{ flex: 1 }}
          rowData={rowData}
          gridOptions={gridOptions}>
      </AgGridReact>
      <ToastContainer />
  </div>
)
}

