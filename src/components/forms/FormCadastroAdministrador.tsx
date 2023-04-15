import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Row, Col, Button } from 'react-bootstrap'
import CSS from 'csstype';
import { AdministradorService } from '../../service/Adminsitrador';
import { ToastContainer, toast } from 'react-toastify';

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

export const FormCadastroAdministrador = () => {

  const navigate = useNavigate()

  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [endereco, setEndereco] = useState('')
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [nivelPermissao, setNivelPermissao] = useState('');
  const [ativo, setAtivo] = useState(true);

  const handleSubmit = () => {
    event?.preventDefault()
    handleSubmitForm()
  }

  async function handleSubmitForm() {
    const body = {
      nome: username,
      password: senha,
      email: email,
      data_nascimento: dataNascimento,
      endereco: endereco,
      telefone: telefone,
      ativo: ativo,
    }
    await AdministradorService.postAdministrador(body).then(response => {
        if (response.status === 201) {
            navigate('/')
    }
    })
  }

  return (
    <>
    <h4 className="align-self-center m-3">Criar Funcionário</h4>
    <hr className='mb-5'></hr>
    <Form className="align-self-center m-3">

<Form.Group className="mb-3" controlId="formUsername">
      <Form.Label>Nome <span className="obrigatorio">*</span></Form.Label>
      <Form.Control type="text" placeholder="Digite o usuario" 
      onChange={e => setUsername(e.target.value)}/>
    </Form.Group>
  <Row className='d-flex'>
    <Col>
    <Form.Group className="mb-3" controlId="formCPF">
      <Form.Label>Senha <span className="obrigatorio">*</span></Form.Label>
      <Form.Control type="password" placeholder="Digite a senha"
      onChange={(e) => setSenha(e.target.value)} />
    </Form.Group>
    </Col>
    <Col>
    <Form.Group className="mb-3" controlId="formDataNascimento">
      <Form.Label>Data de Nascimento <span className="obrigatorio">*</span></Form.Label>
      <Form.Control type="date" placeholder="Idade" 
      onChange={(e) => setDataNascimento(e.target.value)} />
    </Form.Group>
    </Col>
    <Col>
            <Form.Group className="mb-3" controlId="formNivelPermissao">
                  <Form.Label>Nível de Permissão <span className="obrigatorio">*</span></Form.Label>
                  <Form.Select
                  onChange={(e) => setNivelPermissao(e.target.value)} >
                   <option></option>
                    <option value="4">Funcionário</option>
                    <option value="5">Administrador</option>
                </Form.Select>
                </Form.Group>
            </Col>
  </Row>
  <Row>
    <Col>
    <Form.Group className="mb-3" controlId="formTelefone">
        <Form.Label>Telefone <span className="obrigatorio">*</span></Form.Label>
        <Form.Control type="text" placeholder="Digite o Telefone" 
        onChange={(e) => setTelefone(e.target.value)} />
      </Form.Group>
    </Col>
    <Col>
    <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email <span className="obrigatorio">*</span></Form.Label>
        <Form.Control type="text" placeholder="Digite o Email" 
        onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>
    </Col>
  </Row>
  <Form.Group className="mb-3" controlId="formEndereco">
        <Form.Label>Endereço <span className="obrigatorio">*</span></Form.Label>
        <Form.Control type="text" placeholder="Digite o Endereço" 
        onChange={(e) => setEndereco(e.target.value)} />
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
              Cadastrar
          </Button>
        </div>
    </div>
</Form>
    </>
  )
}