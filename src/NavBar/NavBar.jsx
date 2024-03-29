import './NavBar.css'
import {Container, Row, Col} from 'react-bootstrap';
import { Link, NavLink} from 'react-router-dom';


const NavBar = ({setTitle}) => {
  return (
    <>
      <Container fluid className='side-margin-container '>
        <Row className='nav-bar-rows'>
          <div className='contact-Nav'>
            <NavLink
              to='/'
              style={({ isActive, isPending }) => ({
                color: isActive ? '#fd7f6f' : '#1d2731',
                textDecoration: 'none',
                //borderBottom: isActive ? '2px solid black' : '2px solid transparent',
                transition: 'border-bottom 0.5s ease', // Adjust the duration and easing as needed
              })}
              onClick={() => setTitle('Hello & Welcome')}
            >
              <h3>Home</h3>
            </NavLink>
          </div>
        </Row>
       
        <Row className='nav-bar-rows'>
          <div className='contact-Nav'>
            <NavLink
              to='/projects'
              style={({ isActive, isPending }) => ({
                color: isActive ? '#fd7f6f' : '#1d2731',
                textDecoration: 'none',
                //borderBottom: isActive ? '2px solid black' : '2px solid transparent',
                paddingBottom: '8px',
                fontSize: '2rem',
                transition: 'border-bottom 0.5s ease',
               
              })}
              onClick={() => setTitle('Projects')}
            >
              <h3>Projects</h3>
            </NavLink>
          </div>
        </Row>
        <Row className='nav-bar-rows'>
          <div className='contact-Nav'>
            <NavLink
              to='/blog'
              style={({ isActive, isPending }) => ({
                color: isActive ? '#fd7f6f': '#1d2731',
                textDecoration: 'none',
                //borderBottom: isActive ? '2px solid white' : '2px solid transparent',
                paddingBottom: '8px',
                fontSize: '2rem',
                transition: 'border-bottom 0.5s ease',
              })}
              onClick={() => setTitle('Blog')}
            >
              <h3>Blog</h3>
            </NavLink>
          </div>
        </Row>
      </Container>
    </>
  );
};


export default NavBar;