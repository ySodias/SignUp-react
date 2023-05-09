// @ts-nocheck
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { Row, Col, Button } from 'react-bootstrap'
import CSS from 'csstype';
import { useUsuario } from '../../hooks/useUsuario';
import { ToastContainer, toast } from 'react-toastify';
import { useTreino } from '../../hooks/useTreino';
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

export type IFormEditarTreinoPros = {
}

export const FormEditarTreino: React.FC<IFormEditarTreinoPros> = (
) => {

  const {state} = useLocation();
  const { id, nomeCliente } = state;
  const navigate = useNavigate()

  const [idTreino, setIdTreino] = useState('')
  const [cpfUsuario, setCpfUsuario] = useState('');
  const [nomeExercicio, setNomeExercicio] = useState('');
  const [series, setSeries] = useState('')
  const [repeticoes, setRepeticoes] = useState('');
  const [dataFim, setDataFim] = useState('');
  const [frequencia, setFrequencia] = useState('');
  const [carga, setCarga] = useState('');


  const { getTreino, putTreino } = useTreino();
  const { getUsuario } = useUsuario();

  async function getDataUsuario() {
    console.log(nomeCliente)
    const response = await getUsuario({nome_cliente: nomeCliente})
    return response;
  }

  async function getDataTreino() {
    const params = {nome_cliente: nomeCliente, id: id}
    const response = await getTreino(params)
    return response;
    }


  useEffect(() => {
    getDataUsuario().then((resp) => {
      setCpfUsuario(resp[0].cpf)
      })
    getDataTreino().then((resp) => {
        setNomeExercicio(resp[0]?.nome_exercicio)
        setSeries(resp[0]?.series)
        setRepeticoes(resp[0]?.repeticoes)
        setDataFim(resp[0]?.data_troca)
        setFrequencia(resp[0]?.frequencia)
        setCarga(resp[0]?.carga)
    })
    }, [])


  const handleSubmit = () => {
    event?.preventDefault()
    handleSubmitForm()
  }

  async function handleSubmitForm() {
    //Tem erro aqui
    const body = {
      id: id,
      cpf_usuario: cpfUsuario,
      nome_exercicio: nomeExercicio,
      series: Number(series),
      repeticoes: Number(repeticoes),
      data_fim: dataFim,
      frequencia: Number(frequencia),
      carga: Number(carga)
    }
    const response = await putTreino(body)
      if (response === 200) {
        toast.success('Treino Atualizado com Sucesso', {
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


  return (
        <>
           <Form className="align-self-center m-3">
            <Row className='d-flex'>
            <Col>
            <Form.Group className="mb-3" controlId="formExercicio">
                  <Form.Label>Nome Exercício <span className="obrigatorio">*</span></Form.Label>
                  <Form.Control type="text" placeholder="Insira o nome do exercício" 
                  defaultValue={nomeExercicio}
                  onChange={e => setNomeExercicio(e.target.value)}/>
                </Form.Group>
            </Col>
            </Row>
              <Row className='d-flex'>
                <Col>
                <Form.Group className="mb-3" controlId="formCPF">
                  <Form.Label>Repetições <span className="obrigatorio">*</span></Form.Label>
                  <Form.Control type="number" placeholder="Vezes que se repetirá"
                   defaultValue={repeticoes}
                  onChange={(e) => setRepeticoes(e.target.value)} />
                </Form.Group>
                </Col>
                <Col>
                <Form.Group className="mb-3" controlId="formRG">
                  <Form.Label>Carga <span className="obrigatorio">*</span></Form.Label>
                  <Form.Control type="number" placeholder="Insira o Peso" 
                   defaultValue={carga}
                  onChange={(e) => setCarga(e.target.value)} />
                </Form.Group>
                </Col>
              </Row>
              <Row className='d-flex'>
              <Col>
              <Form.Group className="mb-3" controlId="formFrequencia">
                  <Form.Label>Frequência <span className="obrigatorio">*</span></Form.Label>
                  <Form.Control type="number" placeholder="Insira a quantidade de dias na semana" 
                  defaultValue={frequencia}
                  onChange={(e) => setFrequencia(e.target.value)} />
                </Form.Group>
              </Col>
              <Col>
              <Form.Group className="mb-3" controlId="formSeries">
                  <Form.Label>Series <span className="obrigatorio">*</span></Form.Label>
                  <Form.Control type="number" placeholder="Insira a quantidade de series" 
                  defaultValue={series}
                  onChange={(e) => setSeries(e.target.value)} />
                </Form.Group>
              </Col>
              <Col>
              <Form.Group className="mb-3" controlId="formEndereco">
                  <Form.Label>Data Fim <span className="obrigatorio">*</span></Form.Label>
                  <Form.Control type="date" placeholder=""
                  defaultValue={dataFim}
                  onChange={(e) => setDataFim(e.target.value)} />
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
                      Salvar
                  </Button>
                </div>
            </div>
    </Form>
    <ToastContainer />
    </>
  )
}