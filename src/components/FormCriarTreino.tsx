import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { Row, Col, Button } from 'react-bootstrap'
import CSS from 'csstype';
import { cookies } from '../providers';
import { useUsuario } from '../hooks/useUsuario';
import { TreinoService } from '../service/Treino';

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

export type IFormCriarTreinoPros = {
    idCliente: number, 
    nomeCliente: string
}

export const FormCriarTreino: React.FC<IFormCriarTreinoPros> = (
    idCliente    
) => {

    const navigate = useNavigate();
    const { getUsuario } = useUsuario();
    const [rowData, setRowData] = useState();

    async function getData() {
        const response = await getUsuario(idCliente);
        return response;
    }

    const [cpf, setCPF] = useState();
    const [exercicio, setExercicio] = useState('');
    const [tipoTreino, setTipoTreino] = useState('');
    const [repeticoes, setRepeticoes] = useState('');
    const [carga, setCarga] = useState('')
    const [frequencia, setFrequencia] = useState('');
    const [series, setSeries] = useState('');
    const [fim, setFim] = useState('');
    setFrequencia
    const handleSubmit = () => {
        event?.preventDefault()
        handleSubmitForm()
    }

    async function handleSubmitForm() {
        const body = {
            cpf_usuario: cpf,
            nome_exercicio: exercicio,
            modalidade: Number(tipoTreino),
            repeticoes: Number(repeticoes),
            carga: Number(carga),
            series: Number(series),
            frequencia: Number(frequencia),
            data_fim: fim
        }
        const response = await TreinoService.postTreino(body)
    }

    useEffect(() => {
        const isLogin = cookies.get('token')
        if (isLogin === null || isLogin === undefined) {
          navigate('/Login')
        }
        getData()
        .then((resp) => [resp].map(res => res))
        .then((rowData) => {
          setRowData(rowData)
          setCPF(rowData[0][0].cpf)
          console.log(rowData[0][0])
        })
        console.log()
        handlerForm()
    },[])

    function handlerForm() {
        if (rowData !== undefined) {
         return (
            <>
            <Form className="align-self-center m-3">
            <Row className='d-flex'>
            <Col>
            <Form.Group className="mb-3" controlId="formExercicio">
                  <Form.Label>Nome Exercício <span className="obrigatorio">*</span></Form.Label>
                  <Form.Control type="text" placeholder="Insira o nome do exercício" 
                  onChange={e => setExercicio(e.target.value)}/>
                </Form.Group>
            </Col>
            </Row>
              <Row className='d-flex'>
              <Col>
                <Form.Group className="mb-3" controlId="formTipoTreino">
                  <Form.Label>Tipo de Treino <span className="obrigatorio">*</span></Form.Label>
                  <Form.Select placeholder="Pesquisar por Tipo de Treino" 
                  onChange={(e) => setTipoTreino(e.target.value)} >
                   <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                </Form.Group>
                </Col>
                <Col>
                <Form.Group className="mb-3" controlId="formCPF">
                  <Form.Label>Repetições <span className="obrigatorio">*</span></Form.Label>
                  <Form.Control type="number" placeholder="Vezes que se repetirá"
                  onChange={(e) => setRepeticoes(e.target.value)} />
                </Form.Group>
                </Col>
                <Col>
                <Form.Group className="mb-3" controlId="formRG">
                  <Form.Label>Carga <span className="obrigatorio">*</span></Form.Label>
                  <Form.Control type="number" placeholder="Insira o Peso" 
                  onChange={(e) => setCarga(e.target.value)} />
                </Form.Group>
                </Col>
              </Row>
              <Row className='d-flex'>
              <Col>
              <Form.Group className="mb-3" controlId="formFrequencia">
                  <Form.Label>Frequência <span className="obrigatorio">*</span></Form.Label>
                  <Form.Control type="number" placeholder="Insira a quantidade de dias na semana" 
                  onChange={(e) => setFrequencia(e.target.value)} />
                </Form.Group>
              </Col>
              <Col>
              <Form.Group className="mb-3" controlId="formSeries">
                  <Form.Label>Series <span className="obrigatorio">*</span></Form.Label>
                  <Form.Control type="number" placeholder="Insira a quantidade de dias na semana" 
                  onChange={(e) => setSeries(e.target.value)} />
                </Form.Group>
              </Col>
              <Col>
              <Form.Group className="mb-3" controlId="formEndereco">
                  <Form.Label>Fim <span className="obrigatorio">*</span></Form.Label>
                  <Form.Control type="date" placeholder="Endereço"
                  onChange={(e) => setFim(e.target.value)} />
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
                      Confirmar
                  </Button>
                </div>
            </div>
              </Form>
            </>
            )
        }
    }
    return (
        <>
                {handlerForm()}
        </>
)
}
