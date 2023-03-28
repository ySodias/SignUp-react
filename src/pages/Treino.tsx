import { AgGridReact } from '@ag-grid-community/react';
import {AllCommunityModules} from "@ag-grid-community/all-modules"
import React, { useEffect, useState } from 'react';
import { Row, Container, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { FormCadastro } from '../components/FormCadastro';
import { useUsuario } from '../hooks/useUsuario';
import { cookies } from '../providers';
import { useTreino } from '../hooks/useTreino';

export interface ITreinoProps {
  id: Number,
  nome: String,
}

const Treino: React.FC<ITreinoProps > = ({
  id
}) => {
  let nome: String
  const navigate = useNavigate();

  const { getTreino } = useTreino();

  const [treino, setTreino] = useState();

  const columnDefs = [
      { headerName: "Exercícios", field: "nome_exercicio", width: 150, minWidth: 90},
      { headerName: "Tipo de Treino",field: "modalidade", width: 150, minWidth: 90 },
      { headerName: "Repetições", field: "repeticoes", width: 150, minWidth: 90 },
      { headerName: "Carga",field: "carga", width: 150, minWidth: 90 },
      { headerName: "Frequência",field: "frequencia", width: 200, minWidth: 170 }
  ]

  useEffect(() => {
    const isLogin = cookies.get('token')
    if (isLogin === null || isLogin === undefined) {
      navigate('/Login')
    }
    const fetchData = async () => {  
      await getDataTreino()
      .then((data) => {
        setTreino([data])
      })
    }
    fetchData();
  },[treino])
  
  async function getDataTreino() {
    const response = await getTreino({id: id});
    return response
  }

  return (
      <>
      <Container>
        <div className='d-flex justify-content-center p-5'>
          <h1>Plano Semanal {treino?.nome_cliente}</h1>
        </div>
        <Row >
          <h3>Data de Início</h3>
          <h3>Previsão de troca</h3>
        </Row>
        <Row>
        <AgGridReact
          modules={AllCommunityModules}
          defaultColDef={{ flex: 1 }}
          rowData={treino}
          columnDefs={columnDefs}>
        </AgGridReact>
        </Row>
      </Container>
      </>
  )
}

export default Treino