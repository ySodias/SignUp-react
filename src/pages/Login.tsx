import React from 'react';
import { Row, Container, Col } from 'react-bootstrap'
import { FormLogin } from '../components/forms/FormLogin';

export interface ILoginProps {}

const Login: React.FC<ILoginProps > = () => {

  return (
    <>
    <Container>
      <div className='d-flex justify-content-center p-5'>
        <h1>Login</h1>
      </div>
      <Row >
        <Col>
          <FormLogin />
        </Col>
        <Col>
        <img src="https://raw.githubusercontent.com/ySodias/SignUp-react/72776577e14f55daf29a7cac6119f8f728af5974/src/assets/img/loading.svg" 
                width="100%" height="100%"></img>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Login