// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Row, Container, Col, Button } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom';
import { TableTreino } from '../components/tables/TableTreino';
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

const rowStyle: CSS.Properties = {
  height: '80vh'
}


const Treino: React.FC<ITreinoProps> = ({
}) => {
  const {state} = useLocation();
  const navigate = useNavigate();
  const { id } = state;
  let noRowData: boolean = false
  const { getTreino } = useTreino();
  const { getUsuario } = useUsuario();
  const [rowData, setRowData] = useState();
  const [usuario, setUsuario] = useState();

  async function getData(usuario: string) {
    const response = await getTreino({nome_cliente: usuario});
    return response;
  }

  async function getDataUsuario() {
    const response = await getUsuario({id: id});
    return response;
  }


  useEffect(() => {
    const isLogin = sessionStorage.getItem('token')
    if (isLogin === null || isLogin === undefined) {
      navigate('/Login')
    }
    getDataUsuario().
    then((res) => {
      setUsuario(res)
      getData(res[0].nome_cliente).
      then((resp) => [resp].map(res => res)).
      then((rowData) => {
          if (rowData) {
            setRowData(rowData)
          }
        }).catch((err) => {
          setRowData([[]])
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
          <h1>Plano Semanal {usuario[0].nome_cliente}
          <Button variant="link" className="px-3" onClick={navigateToCriarTreino}>
            <FontAwesomeIcon className="pb-2" style={FontStyle} icon={faPenToSquare}></FontAwesomeIcon></Button>
          </h1>
          </div>
        <Row className='p-5'>
          <TableTreino rowDataSource={rowData[0]} nomeCliente={usuario[0]?.nome_cliente}/>
        </Row></>
      )
    }
  }

  return (
      <>
      {rowData === undefined ? <Row style={rowStyle}></Row> : <></>}
      <Container>
          {handlerGrid()}
      </Container>
      </>
  )
}

export default Treino