import { Row, Container, Col } from 'react-bootstrap'
import CSS from 'csstype';

const H2FontStyle: CSS.Properties = {
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '36px',
  lineHeight: '42px',
  color: 'rgba(0, 0, 0, 0.5)'
}

const BorderStyle: CSS.Properties = {
  borderRadius: '15px'
}

const PStyle: CSS.Properties = {
  fontWeight: 700,
  color: 'rgba(0, 0, 0, 0.5)',
  textAlign: 'justify'
}

export function BodyHome (){
  return(
    <div>
      <Row >
        <img className="img-fluid" 
        src='src/assets/img/carrosel.png'></img>
      </Row>
      <Container>
        <Row> 
          <Col className="p-3">
          <Container >
          <h2 style={H2FontStyle}>Sobre Nós</h2>
          <div className="p-5 border" style={BorderStyle}>
            <p style={PStyle}>
                Em 2017 a marca Bem-Estar foi adquirida pela rede de academias e artes marciais Olimpia, 
                que está presente no mercado fitness há 12 anos. Com isso a Bem-Estar passou a se localizar 
                no mesmo local que a Olimpia, porém ambas ocupam espaços diferentes.
                Embora ocupem o mesmo espaço físico a academia feminina possui um quadro de funcionários 
                diferente da rede Olimpia, para tal a mesma tem seus funcionários atuando sobre demanda.
                Ademais, a academia possui um diferencial, pois em sua região existem poucas academias com 
                a mesma proposta, que seria atuar somente com o público feminino. Dessa forma a concorrência direta da 
                academia Bem-Estar proposta de valor.
            </p>
          </div>
          </Container>
          </Col>
          <Col className="p-3">
          <h2 style={H2FontStyle}>Localização</h2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.426860414215!2d-47.130923485033136!3d-22.971325684979053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c9071741f5d7%3A0xdf08bcb82f758540!2skit%20festa%20em%20campinas%20Rainha%20do%20Salgados!5e0!3m2!1spt-BR!2sbr!4v1648392051865!5m2!1spt-BR!2sbr" 
            width="600" height="378" allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </Col>
        </Row> 
      </Container>
    </div>
  )
}