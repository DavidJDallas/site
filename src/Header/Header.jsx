import { Col, Row } from 'react-bootstrap';
import './Header.css';

const Header = ({ title }) => {
    return (
        <Row 
            className="header-container align-items-center"
            style={{
                margin: '0',
                padding: '1.618rem 0',
                minHeight: '4.236rem', 
                background: 'transparent'
            }}
        >
            <Col 
                xs={2} 
                className="d-flex justify-content-center align-items-center"
                style={{
                    padding: '0 1rem'
                }}
            >
            
            </Col>
            
            <Col 
                xs={8} 
                className="text-center"
                style={{
                    padding: '0 1.618rem'
                }}
            >
                <div 
                    className="title"
                    style={{
                        position: 'relative',
                        display: 'inline-block'
                    }}
                >
                  <h1 
  style={{
    fontSize: 'clamp(2.2rem, 6vw, 3.618rem)',
    fontWeight: '400',
    color: '#2c3e50',
    margin: '0',
    letterSpacing: '-0.015em',
    fontFamily: '"Playfair Display", Georgia, serif',
    textShadow: '0 1px 3px rgba(0,0,0,0.05)',
    borderBottom: '2px solid #ecf0f1',
    paddingBottom: '0.5rem',
  }}
>


                        {title}
                    </h1>

                </div>
            </Col>
            
            <Col 
                xs={2} 
                className="d-flex justify-content-center align-items-center"
                style={{
                    padding: '0 1rem'
                }}
            >
        
            </Col>
        </Row>
    );
};

export default Header;