import React, { useEffect } from 'react';
import { Row, Container, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { cookies } from '../providers';
import { FormEditarAdministrador } from '../components/forms/FormEditarAdministrador';

export interface IAdministradorProps {
    id: number;
}

const EditarAdministrador: React.FC<IAdministradorProps > = ({
    id
}) => {
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
      <div className='d-flex justify-content-center p-5'>
        <h1>Editar Administrador</h1>
      </div>
      <Row >
        <Col>
          <FormEditarAdministrador />
        </Col>
        <Col>
        <img src="/src/assets/img/admin.svg" 
                width="100%" height="100%"></img>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default EditarAdministrador