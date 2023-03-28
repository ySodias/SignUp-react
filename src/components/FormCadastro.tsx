import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Row, Col, Button } from 'react-bootstrap'
import CSS from 'csstype';
import { cookies } from '../providers';

const ButtonMatricularStyle: CSS.Properties = {
  color: '#FAFAFA',
  backgroundColor: 'rgba(254, 61,61,0.67)',
  borderColor: '#FE3D3D'
}

const ButtonCancelarStyle: CSS.Properties = {
  color: '#FAFAFA',
  backgroundColor: 'rgba(134, 220,121,0.67)',
  borderColor: '#5CE750'
}

export const FormCadastro = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email_adress, setEmail] = useState('');
  const [photo, setPhoto] = useState('')

  const handleSubmit = () => {
    event?.preventDefault()
    handleSubmitForm()
  }

  async function handleSubmitForm() {
    console.log('Criado com sucesso')
  }

  return (

        <Form className="align-self-center m-3">

        <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Nome <span className="obrigatorio">*</span></Form.Label>
              <Form.Control type="text" placeholder="Username" 
              onChange={e => setUsername(e.target.value)}/>
            </Form.Group>
          <Row className='d-flex'>
          <Col>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>RG <span className="obrigatorio">*</span></Form.Label>
              <Form.Control type="text" placeholder="name@example.com" 
              onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="formCPF">
              <Form.Label>CPF <span className="obrigatorio">*</span></Form.Label>
              <Form.Control type="text" placeholder="CPF"
              onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="formRG">
              <Form.Label>Idade <span className="obrigatorio">*</span></Form.Label>
              <Form.Control type="text" placeholder="Idade" 
              onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            </Col>
          </Row>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email <span className="obrigatorio">*</span></Form.Label>
              <Form.Control type="email" placeholder="name@example.com" 
              onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEndereco">
              <Form.Label>Endereço <span className="obrigatorio">*</span></Form.Label>
              <Form.Control type="text" placeholder="Endereço"
              onChange={(e) => setPhoto(e.target.value)} />
            </Form.Group>
            <div className='d-flex justify-content-center p-3'>
                <div className='p-3'>
                  <Button onClick={() => navigate('/')}
                    style={ButtonCancelarStyle}
                     type="submit">
                      Cancelar
                  </Button></div>
                <div className='p-3'>
                  <Button 
                    style={ButtonMatricularStyle} type="submit" onClick={handleSubmit}> 
                      Matricular
                  </Button>
                </div>
            </div>
    </Form>
  )
}