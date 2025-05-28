import {Row, Col, Image} from 'react-bootstrap';

const Footer = () => {
    return(
        <>
       
        <Row style={{marginBottom: '20px'}}>
            <Col>
            </Col>
            <Col>
            <a href = "https://github.com/DavidJDallas" target="_blank"><Image src='GitHub-logo.png'  style={{height: '50px', width: '100px'}}fluid
           
            /></a>
            </Col>
            <Col>
                <a href="mailto:daviddallas606@gmail.com" target="_blank">
                    <Image src='Gmail-logo.png' style={{height: '50px', width: '100px'}} fluid/> 
                </a>
            </Col>
            <Col>
            <a href="https://www.linkedin.com/in/david-dallas-925600253/" target="_blank">
                <Image src='LinkedIn-logo.png' style={{height: '50px', width: '100px'}}fluid/>  
            </a>
          
            </Col>
        </Row>
        </>
    )
}

export default Footer;