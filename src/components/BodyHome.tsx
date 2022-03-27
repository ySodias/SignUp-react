import { Row, Container, Col } from 'react-bootstrap'
import 'react-bootstrap';
import CSS from 'csstype';

const H2FontStyle: CSS.Properties = {
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '36px',
  lineHeight: '42px',
  color: 'rgba(0, 0, 0, 0.5)'
}

export function BodyHome (){
  return(
    <div>
      <Row >
        <img className="img-fluid" 
        src='src/assets/img/carrosel.png'></img>
      </Row>
      <Row>
        <Col className="p-3">
          <div>
          
          </div>
        </Col>
        <Col className="p-3">
        <h2 style={H2FontStyle}>Localização</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.426860414215!2d-47.130923485033136!3d-22.971325684979053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c9071741f5d7%3A0xdf08bcb82f758540!2skit%20festa%20em%20campinas%20Rainha%20do%20Salgados!5e0!3m2!1spt-BR!2sbr!4v1648392051865!5m2!1spt-BR!2sbr" 
          width="600" height="450" allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </Col>
      </Row> 
    </div>
  )
}