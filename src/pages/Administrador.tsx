import React, { useEffect } from 'react';
import { Row, Container, Col } from 'react-bootstrap'
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

const Administraodr: React.FC<IPagamentosProps > = (props) => {

  const navigate = useNavigate();
  
  useEffect(()=> {
    const isLogin = cookies.get('token')
    if (isLogin === null || isLogin === undefined) {
      navigate('/Login')
    }
  }, [])

  const { isShow, setIsShow } = useModal(false);

  const buttonForm = () => {
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
        <ProSidebarProvider>
        <Sidebar backgroundColor="#FB6DBA">
            <Menu>
                <MenuItem onClick={buttonForm}> Cadastrar Funcionário </MenuItem>
                <MenuItem> Contatar Suporte </MenuItem>
            </Menu>
            </Sidebar>
            </ProSidebarProvider>
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