import { Container, Row, Col, Image } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f8f9fa', padding: '1rem 0', borderTop: '1px solid #dee2e6' }}>
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col xs="auto">
            <a href="https://github.com/DavidJDallas" target="_blank" rel="noopener noreferrer">
              <Image src="GitHub-logo.png" alt="GitHub" style={{ height: '40px' }} fluid />
            </a>
          </Col>
          <Col xs="auto">
            <a href="mailto:daviddallas606@gmail.com" target="_blank" rel="noopener noreferrer">
              <Image src="Gmail-logo.png" alt="Gmail" style={{ height: '40px' }} fluid />
            </a>
          </Col>
          <Col xs="auto">
            <a href="https://www.linkedin.com/in/david-dallas-925600253/" target="_blank" rel="noopener noreferrer">
              <Image src="LinkedIn-logo.png" alt="LinkedIn" style={{ height: '40px' }} fluid />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
