import React, { useEffect } from 'react';
import { Row, Container, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { FormCadastro } from '../components/forms/FormCadastro';
import { cookies } from '../providers';

export interface ICadastroProps {}

const Cadastro: React.FC<ICadastroProps > = () => {
  const navigate = useNavigate();
  
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
        <h1>Cadastro</h1>
      </div>
      <Row >
        <Col>
          <FormCadastro />
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

export default Cadastro