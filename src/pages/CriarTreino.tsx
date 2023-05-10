// @ts-nocheck
import React, { useEffect } from 'react';
import { Row, Container, Col } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom';
import { FormCriarTreino } from '../components/forms/FormCriarTreino';

export type ICadastroProps = {
    nomeCliente: string
    idCliente: number
}

const CriarTreino: React.FC<ICadastroProps > = (
) => {
  const navigate = useNavigate();
  const {state} = useLocation();
  const { nomeCliente, idCliente } = state;

  useEffect(()=> {
    const isLogin = sessionStorage.getItem('token')
    if (isLogin === null || isLogin === undefined) {
      navigate('/Login')
    }
  }, [])
  
  return (
    <>
    <Container>
      <div className='d-flex justify-content-center p-5'>
        <h1>Plano de Treino {nomeCliente}</h1>
      </div>
      <Row >
        <Col className='px-5'>
          <FormCriarTreino idCliente={idCliente} nomeCliente={nomeCliente}/>
        </Col>
        <Col className='px-5'>
        <img src="../../src/assets/gifts/treino.gif"
                width="80%" height="80%"></img>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default CriarTreino