import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = ({ setTitle }) => {
  return (
    <div className="navbar-container">
      <nav>
        <div className="navbar-item">
          <NavLink
            to='/'
            className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
            onClick={() => setTitle('David Dallas')}
          >
            Home
          </NavLink>
        </div>
        
        <div className="navbar-item">
          <NavLink
            to='/projects'
            className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
            onClick={() => setTitle('Projects')}
          >
            Projects
          </NavLink>
        </div>
        
        <div className="navbar-item">
          <NavLink
            to='/blog'
            className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
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