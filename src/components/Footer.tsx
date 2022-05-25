import { Row, Col, Button, Container } from 'react-bootstrap';
import CSS from 'csstype';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const HeigthRowStyle: CSS.Properties = {
  height: '40vh',
  fontStyle: 'bold',
  fontWeight: 500,
  fontSize: '15px',
  backgroundColor:'#FB6DBA',
  color: '#FFFFFF',
  
}
const RowStyle: CSS.Properties = {
    fontStyle: 'bold',
    fontWeight: 500,
    fontSize: '15px',
    textAlign: "center",
    backgroundColor:'#FB6DBA',
    color: '#FFFFFF'
  }

export function Footer (){
  return(
    <>
      <div style={HeigthRowStyle}>
          <Row className="m-0">
        <Col className="align-items-center d-flex justify-content-end" > 
          <img src="src\assets\img\logo.svg" alt="" height="150px" width="150px" />
        </Col>
        <Col md="auto" className="p-3  pt-0 d-flex">
          <dl className='p-3'>  
          <dt><a className='text-decoration-none'>Sobre</a></dt>
          <dd><a className='text-decoration-none' href=''>Política de Privacidade</a></dd>
          </dl>
          <dl className='text-decoration-none p-3'>
          <dt><a className='text-decoration-none'>Serviços</a></dt>
          <dd><a className='text-decoration-none' href=''>Cadastrar Novo Aluno</a></dd>
          <dd><a className='text-decoration-none' href=''>Atualizar Cadastro</a></dd>
          <dd><a className='text-decoration-none' href=''>Receber Pagamento</a></dd>
          <dd><a className='text-decoration-none' href=''>Cancelar Matrícula</a></dd>
          <dd><a className='text-decoration-none' href=''>Dashboards</a></dd>
          </dl>
          <dl className='p-3'>
          <dt><a className='text-decoration-none'>Contato</a></dt>
          <dd>Bem-Estar Academia: 123-456-7890</dd>
          <dd>BYB Consultoria: 123-456-7890</dd>
          </dl>
          
          </Col>
        <Col className="d-flex p-3 justify-content-left">
            
            <dl>
            <dt><a className='p-2 text-decoration-none'>Social</a></dt>
            <dd><a href='' className="px-3 text-decoration-none"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a>
            <a href='' className="px-3 text-decoration-none"><FontAwesomeIcon  icon={faInstagram}></FontAwesomeIcon></a>
            <a href='' className="px-3 text-decoration-none"><FontAwesomeIcon  icon={faWhatsapp}></FontAwesomeIcon></a></dd>
            </dl>
        </Col>
        </Row>
        <Row style={RowStyle} className="m-0">
        <span >© 2021 BYB | All Rights Reserved</span>
        </Row>

      </div>
      
    </>
  )
}