import React from 'react';
import { Row, Container, Col } from 'react-bootstrap'
import { FormCadastro } from '../components/FormCadastro';

export interface ICadastroProps {}

const Cadastro: React.FC<ICadastroProps > = () => {

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