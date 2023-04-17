import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CSS from 'csstype';
import ButtonLogin from './buttons/ButtonLogin';

const HeigthRowStyle: CSS.Properties = {
  height: '10vh',
  backgroundColor:'#FB6DBA',
  color: '#FFFFFF'
}

export function Header (){

  return(
    <>
      <Row style={HeigthRowStyle}>
        <Col className="d-flex justify-content-end align-items-center" > 
          <a href='/'><img src="https://raw.githubusercontent.com/ySodias/SignUp-react/72776577e14f55daf29a7cac6119f8f728af5974/src/assets/img/logo.svg" alt="" height="70px" width="70px" /></a>
        </Col>
        <Col className="p-3 d-flex justify-content-end align-items-center">
          <a className='p-2 text-decoration-none' href='/Dashboard'>Dashboards</a>
          <a className='p-2 text-decoration-none' href='/Alunos'>Alunos</a>
          <a className='p-2 text-decoration-none' href='/Cadastro'>Cadastro</a>
          <a className='p-2 text-decoration-none' href='/Administrador'>Administrador</a>
          </Col>
        <Col className="d-flex p-3 justify-content-end align-items-center">
          <ButtonLogin />
        </Col>
      </Row>
    </>
  )
}
