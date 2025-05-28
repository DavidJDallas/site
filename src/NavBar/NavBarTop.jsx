import './NavBar.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const NavBarTop = ({ setTitle }) => {
  return (
    <>
      <Container fluid className='top-nav-container'>
        <Row className='justify-content-center'>
          <Col xs={12}>
            <div className='top-nav-wrapper'>
              <div className='top-nav-item'>
                <NavLink
                  to='/'
                  style={({ isActive, isPending }) => ({
                    color: isActive ? '#fd7f6f' : '#1d2731',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  })}
                  onClick={() => setTitle('')}
                >
                  <h4>Home</h4>
                </NavLink>
              </div>

              <div className='top-nav-item'>
                <NavLink
                  to='/projects'
                  style={({ isActive, isPending }) => ({
                    color: isActive ? '#fd7f6f' : '#1d2731',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  })}
                  onClick={() => setTitle('Projects')}
                >
                  <h4>Projects</h4>
                </NavLink>
              </div>

              <div className='top-nav-item'>
                <NavLink
                  to='/blog'
                  style={({ isActive, isPending }) => ({
                    color: isActive ? '#fd7f6f' : '#1d2731',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  })}
                  onClick={() => setTitle('Blog')}
                >
                  <h4>Blog</h4>
                </NavLink>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NavBarTop;