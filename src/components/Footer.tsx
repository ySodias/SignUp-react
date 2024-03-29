import React, { useRef } from 'react';
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

  const windowWidth = useRef(window.innerWidth)

  return(
    <> {
      Number(windowWidth.current) >= 843 ? (      <div style={HeigthRowStyle}>
        <Row className="m-0 pb-0">
      <Col className="align-items-center d-flex justify-content-end" > 
        <img src="https://raw.githubusercontent.com/ySodias/SignUp-react/72776577e14f55daf29a7cac6119f8f728af5974/src/assets/img/logo.svg" alt="" height="150px" width="150px" />
      </Col>
      <Col md="auto" className="p-3  pt-0 d-flex pb-0 mb-0">
        <dl className='p-3 pb-0'>  
        <dt><a className='text-decoration-none'>Sobre</a></dt>
        <dd><a className='text-decoration-none' href='/politicaPrivacidade'>Política de Privacidade</a></dd>
        </dl>
        <dl className='text-decoration-none p-3 pb-0 mb-0'>
        <dt><a className='text-decoration-none'>Serviços</a></dt>
        <dd><a className='text-decoration-none' href='/Cadastro'>Matricula</a></dd>
        <dd><a className='text-decoration-none' href='/Alunos'>Alunos</a></dd>
        <dd><a className='text-decoration-none' href='/Treinos'>Treinos</a></dd>
        <dd><a className='text-decoration-none' href='/Dashboard'>Relatórios</a></dd>
        <dd><a className='text-decoration-none' href='/Administrador'>Administrador</a></dd>
        </dl>
        <dl className='p-3 pb-0 mb-0'>
        <dt><a className='text-decoration-none'>Contato</a></dt>
        <dd>Bem-Estar Academia: 123-456-7890</dd>
        <dd>BYB Consultoria: 123-456-7890</dd>
        </dl>
        </Col>
        <Col className="d-flex p-3 justify-content-left pb-0 mb-0">  
          <dl>
          <dt><a className='p-2 text-decoration-none pb-0 mb-0'>Social</a></dt>
          <dd><a href='https://www.facebook.com/olimpiaacademiacps' target='_blank' className="px-3 text-decoration-none"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a>
          <a href='https://www.instagram.com/bem_estar_fitness/' target='_blank' className="px-3 text-decoration-none"><FontAwesomeIcon  icon={faInstagram}></FontAwesomeIcon></a>
          <a href='' className="px-3 text-decoration-none"><FontAwesomeIcon  icon={faWhatsapp}></FontAwesomeIcon></a></dd>
          </dl>
      </Col>
      </Row>
      <span className="d-flex p-3 justify-content-center pb-0 mb-0 ">© 2021 BYB | All Rights Reserved</span>
    </div>) : (<div style={HeigthRowStyle}>
        <Row className="m-0 pb-0">
      <Col md="auto" className="p-3  pt-0 d-flex pb-0 mb-0">
        <dl className='p-3 pb-0'>  
        <dt><a className='text-decoration-none'>Sobre</a></dt>
        <dd><a className='text-decoration-none' href='/politicaPrivacidade'>Política de Privacidade</a></dd>
        </dl>
        <dl className='text-decoration-none p-3 pb-0 mb-0'>
        <dt><a className='text-decoration-none'>Serviços</a></dt>
        <dd><a className='text-decoration-none' href='/Cadastro'>Matricula</a></dd>
        <dd><a className='text-decoration-none' href='/Alunos'>Alunos</a></dd>
        <dd><a className='text-decoration-none' href='/Treinos'>Treinos</a></dd>
        <dd><a className='text-decoration-none' href='/Dashboard'>Relatórios</a></dd>
        <dd><a className='text-decoration-none' href='/Administrador'>Administrador</a></dd>
        </dl>
        <dl className='p-3 pb-0 mb-0'>
        <dt><a className='text-decoration-none'>Contato</a></dt>
        <dd>Bem-Estar Academia: 123-456-7890</dd>
        <dd>BYB Consultoria: 123-456-7890</dd>
        </dl>
        </Col>
        <Col className="d-flex p-3 justify-content-left pb-0 mb-0">  
          <dl>
          <dt><a className='p-2 text-decoration-none pb-0 mb-0'>Social</a></dt>
          <dd><a href='https://www.facebook.com/olimpiaacademiacps' target='_blank' className="px-3 text-decoration-none"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a>
          <a href='https://www.instagram.com/bem_estar_fitness/' target='_blank' className="px-3 text-decoration-none"><FontAwesomeIcon  icon={faInstagram}></FontAwesomeIcon></a>
          <a href='' className="px-3 text-decoration-none"><FontAwesomeIcon  icon={faWhatsapp}></FontAwesomeIcon></a></dd>
          </dl>
      </Col>
      </Row>
      <span className="d-flex p-3 justify-content-center pb-0 mb-0">© 2021 BYB | All Rights Reserved</span>
    </div>)
    }
    </>
  )
}