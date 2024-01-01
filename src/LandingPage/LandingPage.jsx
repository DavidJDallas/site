import {Row, Col, Image} from 'react-bootstrap';
import './LandingPage.css'

const LandingPage = () => {
    return(
        <>
         <Row>
            
            <h1>David Dallas</h1>
          </Row>
          <Row>
            <h2>Software Developer</h2>
          </Row>
          <Row>
            <Col
            xs={5}
            >
               <Image src="file.jpg"
            style={{width: '100%', height: '100%'}}
            />
            </Col>
            <Col>
            <p className='main-body'>I'm a software developer with a backround in the Philosophy and History of Science.  </p>
            </Col>
         



          </Row>
        </>
    )
}

export default LandingPage