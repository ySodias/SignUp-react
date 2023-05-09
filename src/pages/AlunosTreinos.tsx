// @ts-nocheck
import React, { useEffect } from 'react';
import { Row, Container, Col, Button } from 'react-bootstrap'

import { useNavigate } from 'react-router-dom';
import { TableUsersTreino } from '../components/tables/TableUsersTreino';

export interface IPagamentosProps {}


const AlunosTreinos: React.FC<IPagamentosProps > = (props) => {

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
        <div className='d-flex justify-content-center pt-5'>
        <h1>Treinos</h1>
      </div>
      <Row className="pb-5">
        <Col>
          <div className='mt-5 tbAtivo'>
            <TableUsersTreino />
          </div>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default AlunosTreinos