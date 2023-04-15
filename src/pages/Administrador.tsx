import React, { useEffect, useState } from 'react';
import { Row, Container, Col, Dropdown, Button } from 'react-bootstrap'
import CSS from 'csstype';
import { cookies } from '../providers';
import { useNavigate } from 'react-router-dom';
import { TableAdministrador } from '../components/tables/TableAdministradores';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

export interface IPagamentosProps {}

const colStyle: CSS.Properties = {
  height: '70vh',
  minHeight: '600px'
}

const FontStyle: CSS.Properties = {
  fontStyle: 'bold',
  fontWeight: 700,
  fontSize: '18px',
  color: '#000000',
}

const Administraodr: React.FC<IPagamentosProps > = (props) => {

  const navigate = useNavigate();
  
  useEffect(()=> {
    const isLogin = cookies.get('token')
    
    if (isLogin === null || isLogin === undefined) {
      navigate('/Login')
    }
  }, [])

  function isAdmin() {
    if(cookies.get('nivelPermissao') === '5'){
      return true
    } else return false
  }

  const returnToHome = () => {
    navigate('/')
  }

  const goToCriarAdministrador = () => {
    navigate('/CriarAdministrador')
  }

  if (isAdmin()) {
    return (
      <>
      <Container>
      <div className='d-flex justify-content-center p-5'>
        <h1>Administrador
          <Button variant="link" className="px-3" onClick={goToCriarAdministrador}>
            <FontAwesomeIcon className="pb-2" style={FontStyle} icon={faPenToSquare}></FontAwesomeIcon></Button>
              </h1>
            </div>
          <Row className='p-5'>
        <TableAdministrador />
      </Row>
      </Container>
     </>
    )
  } else {
    return (
      <>
      <Container>
        <div className='d-flex justify-content-center p-5'>
          <h1>Ops... Você não tem autorização para acessar essa página  </h1>
        </div>
        <Row>
          <Col sm={8}></Col>
          <Col>
          <Button variant="link" onClick={returnToHome}>Clique Aqui</Button><span>para retornar a Página Inicial</span>
          </Col>
        </Row>
        <Row >
          <Col style={colStyle}>
          <img src="/src/assets/img/naoAutorizado.svg" 
                  width="100%" height="100%" ></img>
          </Col>
        </Row>
      </Container>
      </>
    )
  }
}

export default Administraodr