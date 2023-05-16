// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Row, Container, Col } from 'react-bootstrap'
import { faDollarSign, faEye, faMapLocation } from '@fortawesome/free-solid-svg-icons';
import CSS from 'csstype';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { link } from '../utils/link';


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

const PStyleCards: CSS.Properties = {
  fontWeight: 700,
  color: 'rgba(0, 0, 0, 0.5)',
  textAlign: 'justify',
  height: '31vh'
}

export const BodyHome: React.FC<BodyHomePros> = () => {

  const [isResponsive, setResponsive] = useState(false)


  useEffect(() => {
    isResponsiveSize()
  }, [])
  
  function isResponsiveSize() {
    if (document.documentElement.clientHeight > 900) {
      return setResponsive(true)
    } else return setResponsive(false)
  }

  return(
    <div>
      <Row >
        <img className="img-fluid" 
        src='https://raw.githubusercontent.com/ySodias/SignUp-react/main/src/assets/img/carrosel.png'></img>
      </Row>
      <Container>
      <Row  className="p-4 mt-5 mb-5 m-4 border" style={BorderStyle}>
      <a href='/Planos'>      <img src="https://raw.githubusercontent.com/ySodias/SignUp-react/main/src/assets/img/planos.png" 
                  width="100%" height="100%" ></img></a>

      </Row>
        <Row> 
          <Col className="p-3">
          <Container >
          <h2 style={H2FontStyle}>Sobre Nós</h2>
          <div className="p-5 border" style={BorderStyle}>
            <p style={PStyle}>
            Em 2017 a marca Bem-Estar foi adquirida pela rede de Academias e Artes Marciais Olimpia, que está presente no mercado fitness há mais de 12 anos.Estamos sediados na região do Ouro Verde na cidade de Campinas/SP.

A Academia Bem Estar, tem por objetivo prestação de serviço ao público feminino.

Somos os pioneiros na região em trabalhar com diferentes práticas esportivas, musculação e aeróbicas, voltada exclusivamente para esse público. Tendo em vista que a nossa:

            </p>
          </div>
          </Container>
          </Col>
          <Col className="p-3">
            <div className="d-flex align-items-center justify-content-between">
            <h2 style={H2FontStyle}>Localização</h2>
            </div>
          <iframe src={link['localizacao']}
            width="600" height="378" allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </Col>
        </Row> 
        {isResponsive ? <Row className="p-4 mt-5 mb-5 m-4 border" style={BorderStyle}>
        <Col xs={3} className="pl-3">
          <div >
            <p style={PStyleCards}>
            <FontAwesomeIcon icon={faMapLocation}></FontAwesomeIcon> &nbsp;
                      MISSÃO
                      <br />
                      <br />

          Proporcionar Bem estar físico e mental aos nossos clientes e colaboradores;

          Transformar metas em realidade, criando habitos saudáveis.

            </p></div></Col>

            <Col xs={3} className="pl-3">
          <div  >
            <p style={PStyleCards}>
            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon> &nbsp;
            VISÃO

            <br />
            <br />

Consolidar um Grupo forte no setor de academiass para o público feminino, adminiradoe e reconhecido pelos nossos clientes clientes, pelo atendimento diferenciado e ambiente agradável.
            </p></div></Col>

            <Col xs={6} className="pl-3">
          <div  >
            <p style={PStyleCards}>
            <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>&nbsp;
            VALORES
            <br />
            <br />

Ética e respeito às pessoas: Praticar o bem, respeitando as diferenças e dignidade das pessoas.

Comprometimento: Dar suporte com empenho e responsabilidade as nossas alunas.

Integrirdade: Honrar nossos compromissos e agir com transparência.

Flexibilidade e Inovação: Motivar as ideias, adaptar-se a mudanças que possam surgir e agir com transparência.

Excelência com Simplicidade: Prestar atendimento personalizado, prezando pelo ambiente descobtraído, fazendo nossos clientes sentir-se em casa.

            </p></div></Col>
        </Row>:''}
      </Container>
    </div>
  )
}
