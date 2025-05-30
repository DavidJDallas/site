import { Col, Row, Image } from 'react-bootstrap';
import topleft from '../SVGS/topleft.svg';
import topright from '../SVGS/topright.svg';
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
                            fontSize: 'clamp(1.8rem, 4vw, 3.236rem)', // Responsive golden ratio sizing
                            fontWeight: '300',
                            color: '#2c3e50',
                            margin: '0',
                            letterSpacing: '-0.025em',
                            fontFamily: 'Georgia, serif',
                            textShadow: '0 1px 2px rgba(0,0,0,0.05)',
                            lineHeight: '1.2'
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