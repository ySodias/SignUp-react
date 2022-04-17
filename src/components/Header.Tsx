import { Row } from 'react-bootstrap';
import CSS from 'csstype';

const HeigthRowStyle: CSS.Properties = {
  height: '10vh',
}


export function Header (){
  return(
    <>
      <Row style={HeigthRowStyle}>
      </Row>
    </>
  )
}