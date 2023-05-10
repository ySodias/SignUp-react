import React, { useEffect } from 'react';
import { Row, Container, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { FormEditarTreino } from '../components/forms/FormEditarTreino';

export interface ICadastroProps {
    nomeCliente: string;
}

const EditarTreino: React.FC<ICadastroProps > = ({
    nomeCliente
}) => {
  const navigate = useNavigate();
  
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
        <h1>Editar Treino</h1>
      </div>
      <Row >
        <Col className='px-5'>
          <FormEditarTreino />
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

export default EditarTreino