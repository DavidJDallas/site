import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBarTop = ({ setTitle }) => {
  return (
    <div className="navbar-top-fixed">
      <div className="navbar-top-container">
        <nav>
          <div className="navbar-top-nav">
            <NavLink
              to='/'
              className={({ isActive }) => `navbar-top-link ${isActive ? 'active' : ''}`}
              onClick={() => setTitle('David Dallas')}
            >
              Home
            </NavLink>

            <NavLink
              to='/projects'
              className={({ isActive }) => `navbar-top-link ${isActive ? 'active' : ''}`}
              onClick={() => setTitle('Projects')}
            >
              Projects
            </NavLink>

            <NavLink
              to='/blog'
              className={({ isActive }) => `navbar-top-link ${isActive ? 'active' : ''}`}
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