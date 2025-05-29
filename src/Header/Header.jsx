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
                <Image 
                    src={topleft} 
                    alt="Left decorative element" 
                    className="top-left-svg"
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                        transition: 'transform 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                />
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
                <Image 
                    src={topright} 
                    alt="Right decorative element" 
                    className="top-right-svg"
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                        transition: 'transform 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                />
            </Col>
        </Row>
    );
};

export default Header;