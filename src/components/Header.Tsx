import { Row, Col, Button } from 'react-bootstrap';
import CSS from 'csstype';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const HeigthRowStyle: CSS.Properties = {
  height: '10vh',
  backgroundColor:'#FB6DBA',
  color: '#FFFFFF'
}

export function Header (){

  return(
    <>
      <Row style={HeigthRowStyle}>
        <Col className="d-flex justify-content-end align-items-center" > 
          <a href='/'><img src="src\assets\img\logo.svg" alt="" height="70px" width="70px" /></a>
        </Col>
        <Col className="p-3 d-flex justify-content-end align-items-center">
          <a className='p-2 text-decoration-none' href='/Dashboard'>Dashboards</a>
          <a className='p-2 text-decoration-none' href='/Pagamentos'>Pagamento</a>
          <a className='p-2 text-decoration-none' href='/Cadastro'>Cadastro</a>
          </Col>
        <Col className="d-flex p-3 justify-content-end align-items-center">
          <a className="px-3 text-decoration-none"><FontAwesomeIcon  icon={faArrowRightFromBracket}></FontAwesomeIcon></a>
        </Col>
        
      </Row>
    </>
  )
}