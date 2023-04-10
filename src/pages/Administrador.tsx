import React, { useRef, useCallback, useEffect } from 'react';
import { Row, Container, Col, Button, Nav } from 'react-bootstrap'
import { useModal } from '../hooks/useModal';
import { TableUsersAtivos } from '../components/tables/TableUsersAtivos';
import { TableUsersInativos } from '../components/tables/TableUsersInativos';

import CSS from 'csstype';
import { cookies } from '../providers';
import { useNavigate } from 'react-router-dom';
import { Menu, MenuItem, ProSidebarProvider, Sidebar, SubMenu } from 'react-pro-sidebar';

export interface IPagamentosProps {}

const rowStyle: CSS.Properties = {
  height: '25vh'
}

const Administraodr: React.FC<IPagamentosProps > = (props) => {

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
      <Row className="p-5">
        <Col>
        <ProSidebarProvider>
        <Sidebar backgroundColor="#FB6DBA">
            <Menu>
                <SubMenu label="Funcionário">
                <MenuItem> Criar Funcionário </MenuItem>
                <MenuItem> Editar Funcionário </MenuItem>
                </SubMenu>
                <MenuItem> Documentation </MenuItem>
                <MenuItem> Calendar </MenuItem>
            </Menu>
            </Sidebar>
            </ProSidebarProvider>
        </Col>
      </Row>
      <Row style={rowStyle}>
      </Row>
    </Container>
    </>
  )
}

export default Administraodr