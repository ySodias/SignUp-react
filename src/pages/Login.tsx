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
        <img src="../../src/assets/gifts/signup.gif" 
                width="80%" height="80%"></img>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Login