import './NavBar.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const NavBarTop = ({ setTitle }) => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backgroundColor: 'white',
      borderBottom: '1px solid #e3f2fd',
      padding: '0.8rem 0',
      transform: 'translateY(0)',
      transition: 'transform 0.3s ease-in-out'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 2.618rem',
        fontFamily: 'Georgia, serif'
      }}>
        <nav>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2.618rem',
            flexWrap: 'wrap'
          }}>
            <NavLink
              to='/'
              style={({ isActive, isPending }) => ({
                color: isActive ? '#fd7f6f' : '#2c3e50',
                textDecoration: 'none',
                fontSize: '1.2rem',
                fontWeight: '300',
                letterSpacing: '-0.02em',
                padding: '0.618rem 1rem',
                borderBottom: isActive ? '1px solid #fd7f6f' : '1px solid transparent',
                transition: 'all 0.3s ease',
              })}
              onClick={() => setTitle('David Dallas')}
            >
              Home
            </NavLink>

            <NavLink
              to='/projects'
              style={({ isActive, isPending }) => ({
                color: isActive ? '#fd7f6f' : '#2c3e50',
                textDecoration: 'none',
                fontSize: '1.2rem',
                fontWeight: '300',
                letterSpacing: '-0.02em',
                padding: '0.618rem 1rem',
                borderBottom: isActive ? '1px solid #fd7f6f' : '1px solid transparent',
                transition: 'all 0.3s ease',
              })}
              onClick={() => setTitle('Projects')}
            >
              Projects
            </NavLink>

            <NavLink
              to='/blog'
              style={({ isActive, isPending }) => ({
                color: isActive ? '#fd7f6f' : '#2c3e50',
                textDecoration: 'none',
                fontSize: '1.2rem',
                fontWeight: '300',
                letterSpacing: '-0.02em',
                padding: '0.618rem 1rem',
                borderBottom: isActive ? '1px solid #fd7f6f' : '1px solid transparent',
                transition: 'all 0.3s ease',
              })}
              onClick={() => setTitle('Blog')}
            >
              Blog
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBarTop;