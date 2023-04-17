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
        <img src="https://raw.githubusercontent.com/ySodias/SignUp-react/72776577e14f55daf29a7cac6119f8f728af5974/src/assets/img/cadastro.svg" 
                width="80%" height="80%"></img>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Cadastro