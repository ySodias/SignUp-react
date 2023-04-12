import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Row, Col, Button } from 'react-bootstrap'
import CSS from 'csstype';
import { cookies } from '../../providers';
import { UsuarioService } from '../../service/Usuario';
import { PagamentosService } from '../../service/Pagamentos';

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

export const FormCadastro = () => {

  const navigate = useNavigate()

  const [username, setUsername] = useState('');
  const [cpf, setCPF] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [endereco, setEndereco] = useState('')
  const [formaPagamento, setFormaPagamento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [ativo, setAtivo] = useState(true);
  const [plano, setPlano] = useState('')
  const [vencimento, setDataVencimento] = useState('');

  const handleSubmit = () => {
    event?.preventDefault()
    handleSubmitForm()
  }

  async function handleSubmitForm() {
    const body = {
      cpf: cpf,
      nome_cliente: username,
      data_nascimento: dataNascimento,
      endereco: endereco,
      forma_pagamento: Number(formaPagamento),
      telefone: telefone,
      ativo: ativo,
      plano: Number(plano)
    }
    const response = await UsuarioService.postUsuario(body)
    if (response.status === 201) {
      const valorPagamento = defineValorPagamento()
      const bodyPagamento = {
        cpf_usuario: cpf,
        data_vencimento: vencimento,
        forma_pagamento: Number(formaPagamento),
        valor_pagamento: Number(valorPagamento)
      }
      const responsePagamento = await PagamentosService.postPagamento(bodyPagamento)
      if (responsePagamento.status === 201) {
        navigate('/Alunos')
      }
    }
  }

  const defineValorPagamento = () => {
    if (Number(plano) === 1){
      return 100
    }
    if (Number(plano) === 2){
      return 85.00
    }
    if (Number(plano) === 3){
      return 79.00
    }
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
            <Form.Group className="mb-3" controlId="formCPF">
              <Form.Label>CPF <span className="obrigatorio">*</span></Form.Label>
              <Form.Control type="text" placeholder="Digite o CPF"
              onChange={(e) => setCPF(e.target.value)} />
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
            <Form.Group className="mb-3" controlId="formFormaPagamento">
                  <Form.Label>Pagamento <span className="obrigatorio">*</span></Form.Label>
                  <Form.Select placeholder="Pesquisar por Tipo de Treino" 
                  onChange={(e) => setFormaPagamento(e.target.value)} >
                   <option></option>
                    <option value="1">Pix</option>
                    <option value="2">Crédito</option>
                    <option value="3">Débito</option>
                </Form.Select>
                </Form.Group>
                </Col>
          </Row>
          <Row>
            <Col>
            <Form.Group className="mb-3" controlId="formPlano">
                  <Form.Label>Plano <span className="obrigatorio">*</span></Form.Label>
                  <Form.Select placeholder="Pesquisar por Tipo de Treino" 
                  onChange={(e) => setPlano(e.target.value)} >
                   <option></option>
                    <option value="1">Mensal</option>
                    <option value="2">Semestral</option>
                    <option value="3">Anual</option>
                </Form.Select>
                </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="formDataNascimento">
              <Form.Label>Data de Vencimento <span className="obrigatorio">*</span></Form.Label>
              <Form.Control type="date" placeholder="Idade" 
              onChange={(e) => setDataVencimento(e.target.value)} />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="formTelefone">
                <Form.Label>Telefone <span className="obrigatorio">*</span></Form.Label>
                <Form.Control type="text" placeholder="Digite o Telefone" 
                onChange={(e) => setTelefone(e.target.value)} />
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
                      Matricular
                  </Button>
                </div>
            </div>
    </Form>
  )
}