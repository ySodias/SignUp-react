// @ts-nocheck
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Row, Col, Button } from 'react-bootstrap'
import { AutenticacaoService } from "../../service/Autenticacao"
import { AxiosError} from 'axios'
import CSS from 'csstype';
import { ToastContainer, toast } from 'react-toastify';
import { useAutenticacao } from '../../hooks/useAutenticacao';
import 'react-toastify/dist/ReactToastify.css';


const ButtonMatricularStyle: CSS.Properties = {
  color: '#FAFAFA',
  backgroundColor: 'rgba(134, 220,121,0.67)',
  borderColor: '#5CE750'
}

const ButtonCancelarStyle: CSS.Properties = {
  color: '#FAFAFA',
  backgroundColor: 'rgba(254, 61,61,0.67)',
  borderColor: '#FE3D3D'
}

export const FormLogin = () => {

  const [password, setPassword] = useState('');
  const [email_adress, setEmail] = useState('');
  const [authenticated, setAuthenticated] = useState('');

  const navigate = useNavigate();
  const { postLogin } = useAutenticacao();

  const handleSubmit = (event: any) => {
    event?.preventDefault()
    handleSubmitForm().catch(() =>{
      toast.warning('Falha ao logar! Usuário ou senha incorreto', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    })
  }

  async function handleSubmitForm() {
    let body = {
        email: email_adress,
        password: password
    }

    await postLogin(body)
      .then((r)=> {
          if (r.status == 200) {
            navigate('/')
          }
      } 
      )
  }

  return (
    <>
      <Form className="align-self-center m-3">
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email <span className="obrigatorio">*</span></Form.Label>
          <Form.Control type="email" placeholder="name@example.com" 
          onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Row className='d-flex'>
        <Col>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Senha <span className="obrigatorio">*</span></Form.Label>
          <Form.Control type="password" placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        </Col>
        </Row>
        <div className='d-flex justify-content-center p-3'>
            <div className='p-3'>
              <Button onClick={() => navigate('/')}
                variant="danger"
                type="submit">
                  Cancelar
              </Button></div>
            <div className='p-3'>
              <Button 
                variant="success" type="submit" onClick={handleSubmit}> 
                  Login
              </Button>
            </div>
        </div>
      </Form>
    <ToastContainer />
    </>
  )
}