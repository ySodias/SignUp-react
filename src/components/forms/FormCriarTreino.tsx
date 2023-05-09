// @ts-nocheck
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { Row, Col, Button } from 'react-bootstrap'
import CSS from 'csstype';
import { useUsuario } from '../../hooks/useUsuario';
import { TreinoService } from '../../service/Treino';
import { useTreino } from '../../hooks/useTreino';
import { ToastContainer, toast } from 'react-toastify'
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

export type IFormCriarTreinoPros = {
    idCliente: number
}

export const FormCriarTreino: React.FC<IFormCriarTreinoPros> = (
    data
) => {

    const navigate = useNavigate();
    const { getUsuario } = useUsuario();
    const { postTreino } = useTreino();
    const [rowData, setRowData] = useState();

    async function getData() {
        const response = await getUsuario({id: data.idCliente});
        return response;
    }

    const [cpf, setCPF] = useState();
    const [exercicio, setExercicio] = useState('');
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
            repeticoes: Number(repeticoes),
            carga: Number(carga),
            series: Number(series),
            frequencia: Number(frequencia),
            data_fim: fim
        }
        await postTreino(body).then(async(response)=>{
          if (response === 201) {
            toast.success('Treino Criado com Sucesso', {
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
          )
    }

    useEffect(() => {
        const isLogin = sessionStorage.getItem('token')
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
                  <Form.Label>Data Fim <span className="obrigatorio">*</span></Form.Label>
                  <Form.Control type="date" placeholder="Endereço"
                  onChange={(e) => setFim(e.target.value)} />
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
                      Confirmar
                  </Button>
                </div>
            </div>
              </Form>
              <ToastContainer />
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
