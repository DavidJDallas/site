import { Col, Row } from 'react-bootstrap';
import './Header.css';

const Header = ({ title }) => {
    return (
        <Row className="header-container align-items-center">
            <Col 
                xs={2}
                className="d-flex justify-content-center align-items-center header-col-side"
            >
            </Col>
            
            <Col
                xs={8}
                className="text-center header-col-center"
            >
                <div className="title">
                    <h1>
                        {title}
                    </h1>
                </div>
            </Col>
            
            <Col
                xs={2}
                className="d-flex justify-content-center align-items-center header-col-side"
            >
            </Col>
        </Row>
    );
};

export default Header;