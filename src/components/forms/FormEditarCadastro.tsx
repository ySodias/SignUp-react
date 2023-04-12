import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { Row, Col, Button, ToastContainer } from 'react-bootstrap'
import CSS from 'csstype';
import { cookies } from '../../providers';
import { UsuarioService } from '../../service/Usuario';
import { PagamentosService } from '../../service/Pagamentos';
import { useUsuario } from '../../hooks/useUsuario';
import { usePagamentos } from '../../hooks/usePagamentos';
import { toast } from 'react-toastify';

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

export type IFormEditarCadastroPros = {
}

export const FormEditarCadastro: React.FC<IFormEditarCadastroPros> = (
) => {

  const {state} = useLocation();
  const { id } = state;
  const navigate = useNavigate()

  const [username, setUsername] = useState('');
  const [cpf, setCPF] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [endereco, setEndereco] = useState('')
  const [formaPagamento, setFormaPagamento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [ativo, setAtivo] = useState(true);
  const [plano, setPlano] = useState('');
  const [idPagamento, setIdPagamento] = useState('');
  const [vencimento, setDataVencimento] = useState('');

  const { getUsuario } = useUsuario();
  const { getPagamentosUsuario } = usePagamentos();

  async function getData() {
    const response = await getUsuario({id: id})
    return response;
  }

  async function getDataPagamento(cpf_usuario: string) {
    const response = await getPagamentosUsuario(cpf_usuario)
    return response;
}


  useEffect(() => {
    getData().then((resp) => {
      setUsername(resp[0].nome_cliente)
      setCPF(resp[0].cpf)
      setDataNascimento(resp[0].data_nascimento)
      setEndereco(resp[0].endereco)
      setFormaPagamento(resp[0].forma_pagamento)
      setTelefone(resp[0].telefone)
      setAtivo(resp[0].ativo)
      setPlano(resp[0].plano)
      getDataPagamento(resp[0].cpf).then((res)=>{
        setDataVencimento(res.data_vencimento)
        setIdPagamento(res.id)
      })
    })
  }, [])

  const handleSubmit = () => {
    event?.preventDefault()
    handleSubmitForm()
  }

  async function handleSubmitForm() {
    const body = {
      id: id,
      cpf: cpf,
      nome_cliente: username,
      data_nascimento: dataNascimento,
      endereco: endereco,
      forma_pagamento: Number(formaPagamento),
      telefone: telefone,
      ativo: ativo,
      plano: Number(plano)
    }
    const response = await UsuarioService.putUsuario(body)
      if (response?.status === 200) {
        const valorPagamento = defineValorPagamento()
        const bodyPagamento = {
          id: idPagamento,
          cpf_usuario: cpf,
          data_vencimento: vencimento,
          forma_pagamento: Number(formaPagamento),
          valor_pagamento: Number(valorPagamento)
        }
        const responsePagamento = await PagamentosService.putPagamento(bodyPagamento)
        if (responsePagamento.status === 200) {
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
            navigate('/Alunos')
          },
          2500);
        }
    }
  }

  const options = ['option1', 'option2', 'option3'];

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
    <>
        <Form className="align-self-center m-3">
        <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Nome <span className="obrigatorio">*</span></Form.Label>
              <Form.Control type="text"
              defaultValue={username}
              onChange={e => setUsername(e.target.value)}/>
            </Form.Group>
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
            <Form.Group className="mb-3" controlId="formFormaPagamento">
                  <Form.Label>Pagamento <span className="obrigatorio">*</span></Form.Label>
                  <Form.Select defaultValue={formaPagamento} 
                  onChange={(e) => setFormaPagamento(e.target.value)} >
                   <option value={options[Number(formaPagamento)]} disabled></option>
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
                  <Form.Select
                  onChange={(e) => setPlano(e.target.value)} >
                   <option value={options[Number(plano)]} disabled></option>
                    <option value="1">Mensal</option>
                    <option value="2">Semestral</option>
                    <option value="3">Anual</option>
                </Form.Select>
                </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="formDataNascimento">
              <Form.Label>Data de Vencimento <span className="obrigatorio">*</span></Form.Label>
              <Form.Control type="date" defaultValue={vencimento} 
              onChange={(e) => setDataVencimento(e.target.value)} />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="formTelefone">
                <Form.Label>Telefone <span className="obrigatorio">*</span></Form.Label>
                <Form.Control type="text" defaultValue={telefone}
                onChange={(e) => setTelefone(e.target.value)} />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="formEndereco">
                <Form.Label>Endereço <span className="obrigatorio">*</span></Form.Label>
                <Form.Control type="text" defaultValue={endereco}
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
                      Salvar
                  </Button>
                </div>
            </div>
    </Form>
    <ToastContainer />
    </>
  )
}