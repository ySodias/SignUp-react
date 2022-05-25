import React from 'react';
import { Row, Container, Col, Table, Button } from 'react-bootstrap'
import { useModal } from '../hooks/useModal';

import CSS from 'csstype';

export interface IPagamentosProps {}

const H2FontStyle: CSS.Properties = {
  borderBottom: 'none'
}


const Pagamentos: React.FC<IPagamentosProps > = (props) => {

  const { isShow, setIsShow } = useModal();

  let estado;

  async function buttonState() {
    setIsShow(!isShow);
    if (isShow === false ) {
      let exAlunosFalse = document.getElementsByClassName('exalunos')
      exAlunosFalse[0].style.border = 'none'
      let ativosTrue = document.getElementsByClassName('ativos')
      ativosTrue[0].style.border = '1px solid'
      ativosTrue[0].style.borderBottom = 'none'
    } else {
      let exAlunosTrue = document.getElementsByClassName('exalunos')
      exAlunosTrue[0].style.border = '1px solid'
      exAlunosTrue[0].style.borderBottom = 'none'
      let ativosFalse = document.getElementsByClassName('ativos')
      ativosFalse[0].style.border = 'none'
    }
  }

  return (
    <>
    <Container>
      <Row className="p-5">
        <Col>
        <Button variant="outline-dark" 
          style={H2FontStyle}
          className="p-3 ativos" onClick={buttonState}>Ativo</Button>
         <Button variant="outline-dark" 
          style={H2FontStyle}
          className="p-3 exalunos" onClick={buttonState}>Ex-alunos</Button>
       <Table className='tbAtivo'>
       <thead>
       <tr>
         <th>Nome:</th>
           <th>Estado da Matrícula:</th>
             <th>Cadastrado em:</th>
             <th>Vencimento de mensalidade:</th>
           </tr>
         </thead>
         <tbody>
           <tr>
             <td>1</td>
             <td>Mark</td>
             <td>Otto</td>
           </tr>
       </tbody>
        </Table>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Pagamentos