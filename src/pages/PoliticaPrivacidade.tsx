

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
            <iframe 
            src="https://docs.google.com/document/d/e/2PACX-1vRSjRs1HjEiDs7zDYExlcW1NH-MT_StWJ38b3nWiYdGs3KhjnaeUKIXWf0bO7iWpfwtcLBlqb1XpdO-/pub?embedded=true"
            width="100%" height="100%" style={pdfStyel}></iframe>
            
        </div></Col>
            <Col></Col>
        </Row>
    </Container>
  );
}

export default PoliticaPrivacidade