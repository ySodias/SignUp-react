import React from 'react';
import { Row, Container, Col } from 'react-bootstrap'
import CSS from 'csstype';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface ILoginProps {}

const BorderStyle: CSS.Properties = {
    borderRadius: '15px'
  }

  const lineStyle: CSS.Properties = {
    width: '70%',
    fontWeight: 700,
    color: 'rgba(0, 0, 0, 0.5)',
    textAlign: 'justify'
  }

const H2FontStyle: CSS.Properties = {
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '42px',
    color: 'rgba(0, 0, 0, 0.5)'
}



const Planos: React.FC<ILoginProps > = () => {

  return (
    <>
    <Container>
        <div className='d-flex justify-content-center px-5 pt-5'>
            <h1>Planos</h1>
        </div>
        <div className="m-5 border" style={BorderStyle}>
        <Row>
            <img src="https://raw.githubusercontent.com/ySodias/SignUp-react/main/src/assets/img/carroselExercicio.png" 
                  width="100%" height="100%" ></img>
        </Row>
        <h4 className='d-flex justify-content-center pt-3 pb-0 m-0' style={H2FontStyle}>Benefícios</h4>
            <div className='d-flex justify-content-center'>
            <hr className= 'pt-0 mt-0' style={lineStyle}></hr>
        </div>
        <div className='d-flex justify-content-center'>
        <Row className='px-5 pb-5' style={lineStyle}>
            <Col>
                <ul>
                    <li >Academia <br></br>de Ginástica</li>
                    <li>Fit Dance</li>
                </ul>
            </Col>
            <Col>
            <ul>
                    <li>Zumba</li>
                    <li>Lutas</li>
                </ul>
            </Col>
            <Col>
            <ul>
                    <li>Wi-fi</li>
                    <li>Estacionamento</li>
                </ul>
            </Col>
        </Row>
        </div>
        </div>
        <Row>
            <Col></Col>
            <Col xs={8}>
            <Row>
            <Col className="p-3 mx-3 mb-5 border" style={BorderStyle}>
            <h5 className="d-flex justify-content-center pb-0 mb-0">Plano &nbsp;<strong> Mensal</strong></h5>
            <hr className="pt-0 mt-0"></hr>
            <span className="d-flex justify-content-center">R$  &nbsp;<strong>100,00</strong>&nbsp;/ mês</span>
            </Col>
            <Col className="p-3 mx-3 mb-5 border" style={BorderStyle}>
            <h5 className="d-flex justify-content-center pb-0 mb-0">Plano &nbsp;<strong> Semestral</strong></h5>
            <hr className="pt-0 mt-0"></hr>
            <span className="d-flex justify-content-center">R$ &nbsp;<strong>85,00</strong>&nbsp;/ mês</span>
            </Col>
            <Col className="p-3 mx-3 mb-5  border" style={BorderStyle}>
            <h5 className="d-flex justify-content-center pb-0 mb-0">Plano &nbsp;<strong>Anual</strong></h5>
            <hr className="pt-0 mt-0"></hr>
            <span className="d-flex justify-content-center">R$ &nbsp;<strong>79,00</strong>&nbsp;/ mês</span>
            </Col>
        </Row></Col>
            <Col></Col>
        </Row>

    </Container>
    </>
  )
}

export default Planos
