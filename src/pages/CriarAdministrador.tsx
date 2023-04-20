import React, { useEffect } from 'react';
import { Row, Container, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { FormCadastroAdministrador } from '../components/forms/FormCadastroAdministrador';

export interface ICriarAdministradorProps {}

const CriarAdministrador: React.FC<ICriarAdministradorProps > = () => {
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
        <h1>Cadastro Administrador</h1>
      </div>
      <Row >
        <Col>
          <FormCadastroAdministrador />
        </Col>
        <Col>
        <img src="https://github.com/ySodias/SignUp-react/blob/main/src/assets/img/admin.svg" 
                width="80%" height="80%"></img>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default CriarAdministrador