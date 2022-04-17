import React from 'react';
import { Row, Container, Col, Button } from 'react-bootstrap'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import CSS from 'csstype';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { link } from '../utils/link';
import { useModal } from '../hooks/useModal';
import { Share } from './modal';
export type BodyHomePros = {}

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

const BorderStyleShare: CSS.Properties = {
  borderRadius: '70%',
}

const message = `https://api.whatsapp.com/send?phone=+551998769-3143&text=${link['localizacao']}`

console.log(message)

export const BodyHome: React.FC<BodyHomePros> = () => {
  const { isShow, toggle } = useModal();
  
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
            <div className="d-flex align-items-center justify-content-between">
            <h2 style={H2FontStyle}>Localização</h2>
            <Button onClick={toggle} variant="link" className='d-flex text-dark text-decoration-none px-4'>
           <div className="d-flex border p-1 align-items-center" style={BorderStyleShare}>
              <FontAwesomeIcon  icon={faShareAlt} />
              </div><span className='px-1'>Compartilhar</span>  
            </Button>
            <Share isShow={isShow} hide={toggle}/>
            </div>
          <iframe src={link['localizacao']}
            width="600" height="378" allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </Col>
        </Row> 
      </Container>
    </div>
  )
}