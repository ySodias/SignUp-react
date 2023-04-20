// @ts-nocheck
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { Row, Col, Button, ToastContainer } from 'react-bootstrap'
import CSS from 'csstype';
import { toast } from 'react-toastify';
import { useAdministrador } from '../../hooks/useAdministrador';

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

export type IFormEditarAdministradorPros = {
}

export const FormEditarAdministrador: React.FC<IFormEditarAdministradorPros> = (
) => {

  const {state} = useLocation();
  const { id } = state;
  const navigate = useNavigate()

  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [nivelPermissao, setNivelPermissao] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [ativo, setAtivo] = useState('');
  const [endereco, setEndereco] = useState('');

  const { getAdministrador, putAdministrador } = useAdministrador();


  async function getData() {
    return await getAdministrador({id: id})
  }


  useEffect(() => {
    getData().then((resp) => {
      setNome(resp[0].nome)
      setSenha(resp[0].password)
      setDataNascimento(resp[0].data_nascimento)
      setEndereco(resp[0].endereco)
      setNivelPermissao(resp[0].nivel_permissao)
      setTelefone(resp[0].telefone)
      setAtivo(resp[0].ativo)
      setEmail(resp[0].email)
    })
  }, [])

  const handleSubmit = () => {
    event?.preventDefault()
    handleSubmitForm()
  }

  async function handleSubmitForm() {
    const body = {
      id: id,
      nome: nome,
      password: senha,
      email: email,
      data_nascimento: dataNascimento,
      endereco: endereco,
      telefone: telefone,
      ativo: ativo,
      nivel_permissao: Number(nivelPermissao)
    }
    await putAdministrador(body).then((response) => {
        if (response === 200) {
            toast.success('Cadastro Atualizado com Sucesso', {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });
            setTimeout(() => 
            {
              navigate('/Administrador')
            },
            2500);
          }
    })
      
    }


  return (
    <>
        <Form className="align-self-center m-3">
            <Row>
            <Col>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Nome <span className="obrigatorio">*</span></Form.Label>
              <Form.Control type="text"
              defaultValue={nome}
              onChange={e => setNome(e.target.value)}/>
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Senha <span className="obrigatorio">*</span></Form.Label>
              <Form.Control type="password"
              defaultValue={senha}
              onChange={e => setSenha(e.target.value)}/>
            </Form.Group>
            </Col>
            </Row>        
          <Row className='d-flex'>
            <Col>
            <Form.Group className="mb-3" controlId="formDataNascimento">
              <Form.Label>Data de Nascimento <span className="obrigatorio">*</span></Form.Label>
              <Form.Control type="date"
              defaultValue={dataNascimento}
              onChange={(e) => setDataNascimento(e.target.value)} />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Email <span className="obrigatorio">*</span></Form.Label>
              <Form.Control type="text"
              defaultValue={email}
              onChange={e => setEmail(e.target.value)}/>
            </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
            <Form.Group className="mb-3" controlId="formPlano">
                  <Form.Label>Status <span className="obrigatorio">*</span></Form.Label>
                  <Form.Select
                  onChange={(e) => setAtivo(e.target.value)} >
                   <option value={String(ativo)} disabled></option>
                    <option value="true">Ativo</option>
                    <option value="false">Inativo</option>
                </Form.Select>
                </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="formFormaPagamento">
                  <Form.Label>Nivel de Permissao <span className="obrigatorio">*</span></Form.Label>
                  <Form.Select
                  onChange={(e) => setNivelPermissao(e.target.value)} >
                   <option value={Number(nivelPermissao)} disabled></option>
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
                <Form.Control type="text" defaultValue={telefone}
                onChange={(e) => setTelefone(e.target.value)} />
              </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="formEndereco">
                <Form.Label>Endereço <span className="obrigatorio">*</span></Form.Label>
                <Form.Control type="text" defaultValue={endereco}
                onChange={(e) => setEndereco(e.target.value)} />
              </Form.Group>
            </Col>
          </Row>
         
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
                      Salvar
                  </Button>
                </div>
            </div>
    </Form>
    <ToastContainer />
    </>
  )
}