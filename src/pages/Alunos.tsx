import React, { useRef, useCallback, useEffect } from 'react';
import { Row, Container, Col, Button } from 'react-bootstrap'
import { useModal } from '../hooks/useModal';
import { TableUsersAtivos } from '../components/TableUsersAtivos';
import { TableUsersInativos } from '../components/TableUsersInativos';

import CSS from 'csstype';
import { cookies } from '../providers';
import { useNavigate } from 'react-router-dom';

export interface IPagamentosProps {}

const H2FontStyle: CSS.Properties = {
  borderBottom: 'none'
}

const Alunos: React.FC<IPagamentosProps > = (props) => {

  const navigate = useNavigate();
  
  useEffect(()=> {
    const isLogin = cookies.get('token')
    if (isLogin === null || isLogin === undefined) {
      navigate('/Login')
    }
  }, [])

  const { isShow, setIsShow } = useModal();

  function buttonState() {
    let tableAtivos = document.getElementsByClassName('table-ativos')
    let tableInativos = document.getElementsByClassName('table-inativos')
    let alunos = document.getElementsByClassName('ativos');
    setIsShow(!isShow);
    if (isShow === false) {
      alunos[0].innerHTML = 'Exibir Alunos Ativos';
      tableAtivos[0].style.display = 'none'
      tableInativos[0].style.display = 'block'
    } else {
      alunos[0].innerHTML = 'Exibir Alunos Inativos';
      tableAtivos[0].style.display = 'block'
      tableInativos[0].style.display = 'none'
    }
  }

  return (
    <>
    <Container>
      <Row className="p-5">
        <Col>
        <Button variant="outline-dark" 
          style={H2FontStyle}
          className="p-3 ativos" onClick={buttonState}>Exibir Alunos Inativos</Button>
          <div className='mt-5 tbAtivo'>
            <TableUsersAtivos />
            <TableUsersInativos />
          </div>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Alunos