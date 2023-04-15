import React, { useEffect, useState } from 'react';
import { Row, Container, Col, Dropdown } from 'react-bootstrap'
import { useModal } from '../hooks/useModal';

import CSS from 'csstype';
import { cookies } from '../providers';
import { useNavigate } from 'react-router-dom';
import { Menu, MenuItem, ProSidebarProvider, Sidebar, SubMenu } from 'react-pro-sidebar';
import { FormCadastroAdministrador } from '../components/forms/FormCadastroAdministrador';

export interface IPagamentosProps {}

const rowStyle: CSS.Properties = {
  height: '40.35vh'
}

const dropdownStyle: CSS.Properties = {
  backgroundColor: '#fb6dba',
}

let dropdownHoverStyle: CSS.Properties = {
  backgroundColor: '#d63384'
}

const Administraodr: React.FC<IPagamentosProps > = (props) => {

  const navigate = useNavigate();
  
  useEffect(()=> {
    const isLogin = cookies.get('token')
    if (isLogin === null || isLogin === undefined) {
      navigate('/Login')
    }
  }, [])

  const { isShow, setIsShow } = useModal(false);
  const [ hoverCriarFuncionario, sethoverCriarFuncionario]  = useState(false)

  const buttonForm = () => {
    (document.activeElement as HTMLElement).blur()
    setIsShow(!isShow);
  }

  return (
    <>
    <Container>
    <div className='d-flex justify-content-center p-5'>
        <h1>Administrador</h1>
      </div>
      <Row className="p-5">
        <Col sm={2}>
            <Dropdown.Menu show style={dropdownStyle}>
            <Dropdown.Item eventKey="2" onClick={buttonForm} onMouseEnter={()=>{
              sethoverCriarFuncionario(true)
            }} onMouseOut={()=>{sethoverCriarFuncionario(false)}} style={ hoverCriarFuncionario ? dropdownHoverStyle : null}>Criar Funcionário</Dropdown.Item>
            <Dropdown.Item eventKey="3">Editar Funcionário</Dropdown.Item>
          </Dropdown.Menu>
        </Col>
        <Col></Col>
        <Col sm={8}>
        {isShow == true ? <FormCadastroAdministrador /> : <></>}
        </Col>
      </Row>
      {isShow == false ?  <Row style={rowStyle}></Row>: <></>}
    </Container>
    </>
  )
}

export default Administraodr