import './NavBar.css'
import {Container, Row, Col} from 'react-bootstrap';
import { Link, NavLink} from 'react-router-dom';

const NavBar = ({setTitle}) => {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '2.618rem',
      fontFamily: 'Georgia, serif'
    }}>
      <nav>
        <div style={{ marginBottom: '1.618rem' }}>
          <NavLink
            to='/'
            style={({ isActive, isPending }) => ({
              color: isActive ? '#fd7f6f' : '#2c3e50',
              textDecoration: 'none',
              fontSize: '1.618rem',
              fontWeight: '300',
              letterSpacing: '-0.02em',
              display: 'block',
              padding: '0.618rem 0',
              borderBottom: isActive ? '1px solid #fd7f6f' : '1px solid transparent',
              transition: 'all 0.3s ease',
            })}
            onClick={() => setTitle('David Dallas')}
          >
            Home
          </NavLink>
        </div>
       
        <div style={{ marginBottom: '1.618rem' }}>
          <NavLink
            to='/projects'
            style={({ isActive, isPending }) => ({
              color: isActive ? '#fd7f6f' : '#2c3e50',
              textDecoration: 'none',
              fontSize: '1.618rem',
              fontWeight: '300',
              letterSpacing: '-0.02em',
              display: 'block',
              padding: '0.618rem 0',
              borderBottom: isActive ? '1px solid #fd7f6f' : '1px solid transparent',
              transition: 'all 0.3s ease',
            })}
            onClick={() => setTitle('Projects')}
          >
            Projects
          </NavLink>
        </div>

        <div style={{ marginBottom: '1.618rem' }}>
          <NavLink
            to='/blog'
            style={({ isActive, isPending }) => ({
              color: isActive ? '#fd7f6f': '#2c3e50',
              textDecoration: 'none',
              fontSize: '1.618rem',
              fontWeight: '300',
              letterSpacing: '-0.02em',
              display: 'block',
              padding: '0.618rem 0',
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
  );
};

export default NavBar;