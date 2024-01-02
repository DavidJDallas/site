import {Row, Col, Image} from 'react-bootstrap';

const Footer = () => {
    return(
        <>
       
        <Row>
            <Col>
            </Col>
            <Col>
            <Image src='GitHub-logo.png' style={{height: '50px', width: '100px'}}fluid/>
            </Col>
            <Col>
            <Image src='Gmail-logo.png' style={{height: '50px', width: '100px'}}fluid/>
            </Col>
            <Col>
            <Image src='LinkedIn-logo.png' style={{height: '50px', width: '100px'}}fluid/>
            </Col>
        </Row>
        </>
    )
}

export default Footer;