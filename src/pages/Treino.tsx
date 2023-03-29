
import React, { useEffect, useState } from 'react';
import { Row, Container, Col, Button } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom';
import { cookies } from '../providers';
import { TableTreino } from '../components/TableTreino';
import CSS from 'csstype';
import { useTreino } from '../hooks/useTreino';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useUsuario } from '../hooks/useUsuario';
export type ITreinoProps = {
  id: Number
}

const FontStyle: CSS.Properties = {
  fontStyle: 'bold',
  fontWeight: 700,
  fontSize: '18px',
  color: '#000000',
}

const FontStyleData: CSS.Properties = {
  fontStyle: 'bold',
  fontSize: '18px',
  color: 'rgba(0, 0, 0, 0.5)'
}

const BoxStyle: CSS.Properties = {
  height: '100px',
  width: '100%'
}

const Treino: React.FC<ITreinoProps> = ({
}) => {
  const {state} = useLocation();
  const navigate = useNavigate();
  const { id } = state;

  const { getTreino } = useTreino();
  const { getUsuario } = useUsuario();
  const [rowData, setRowData] = useState();
  const [usuario, setUsuario] = useState();

  async function getData() {
    const response = await getTreino(id);
    return response;
  }

  async function getDataUsuario() {
    const response = await getUsuario({id: id});
    return response;
  }


  useEffect(() => {
    const isLogin = cookies.get('token')
    if (isLogin === null || isLogin === undefined) {
      navigate('/Login')
    }
    getData()
    .then((resp) => [resp].map(res => res))
    .then((rowData) => {
      setRowData(rowData)
      console.log(rowData)
    }).catch((err) => {
      getDataUsuario().
        then((usuario) => {
          setUsuario(usuario)
        })
  })
    handlerGrid()
  },[])

  function navigateToCriarTreino() {
    if (rowData !== undefined) {
    navigate('/CriarTreino', {state: {
      nomeCliente: rowData[0]?.nome_cliente,
      idCliente: id
    }})
  } else {
    navigate('/CriarTreino', {state: {
      nomeCliente: usuario[0]?.nome_cliente,
      idCliente: id
    }})
  }
  }

  function handlerGrid() {
    if (rowData !== undefined) {
      return (
        <>
          <div className='d-flex justify-content-center p-5'>
          <h1>Plano Semanal {rowData[0].nome_cliente}
          <Button variant="link" className="px-3" onClick={navigateToCriarTreino}>
            <FontAwesomeIcon className="pb-2" style={FontStyle} icon={faPenToSquare}></FontAwesomeIcon></Button>
          </h1>
          </div>
          <Row className='d-flex justify-content-center px-5' >
          <span>
            <span style={FontStyle}>Data de Início: </span>
            <span style={FontStyleData}>{rowData[0]?.data_inicio}</span>
            </span>
          <span>
            <span style={FontStyle}>Previsão de troca: </span>
            <span style={FontStyleData}>{rowData[0]?.data_troca}</span>
          </span>
        </Row>
        <Row className='p-5'>
          <TableTreino rowDataSource={rowData}/>
        </Row></>
      )
    }
    else if (usuario !== undefined) {
      return (
        <>
          <div className='d-flex justify-content-center p-5'>
          <h1>Plano Semanal {usuario[0].nome_cliente}
          <Button variant="link" className="px-3" onClick={navigateToCriarTreino}>
            <FontAwesomeIcon className="pb-2" style={FontStyle} icon={faPenToSquare}></FontAwesomeIcon></Button>
          </h1>
          </div>
          <Row className='d-flex justify-content-center px-5' >
          <span>
            <span style={FontStyle}>Data de Início: </span>
            <span style={FontStyleData}></span>
            </span>
          <span>
            <span style={FontStyle}>Previsão de troca: </span>
            <span style={FontStyleData}></span>
          </span>
        </Row>
        <Row className='p-5'>
          <TableTreino rowDataSource={rowData}/>
        </Row></>
      )
    }
  }

  return (
      <>
      <Container>
          {handlerGrid()}
      </Container>
      </>
  )
}

export default Treino