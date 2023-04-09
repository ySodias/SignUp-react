import React, { useEffect } from 'react';
import { Row, Container, Col } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom';
import { FormCriarTreino } from '../components/FormCriarTreino';
import { cookies } from '../providers';

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
    const isLogin = cookies.get('token')
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
        <Col>
          <FormCriarTreino idCliente={idCliente} nomeCliente={nomeCliente}/>
        </Col>
        <Col>
        <img src="/src/assets/img/cadastro.svg" 
                width="100%" height="100%"></img>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default CriarTreino