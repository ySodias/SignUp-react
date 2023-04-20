

import React from "react";
import { BodyHome } from "../components";
import { Col, Container, Row } from "react-bootstrap";
import CSS from 'csstype';

const pdfStyel: CSS.Properties = {
    minHeight: '600px',
    minWidth: '800px',
    backgroundColor:'#FB6DBA',
    color: '#FFFFFF'
  }

const PoliticaPrivacidade: React.FC = (props) => {
  return (
    <Container className="p-5">
        <Row>
            <Col></Col>
            <Col>
            <div>
            <embed src="../src/assets/docs/politica_privacidade.pdf" 
            type="application/pdf" 
            width="100%" height="100%" style={pdfStyel}/>
        </div></Col>
            <Col></Col>
        </Row>
    </Container>
  );
}

export default PoliticaPrivacidade