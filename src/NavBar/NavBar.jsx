import './NavBar.css'
import {Container, Row, Col} from 'react-bootstrap';
import { Link, NavLink} from 'react-router-dom';

const NavBar = () => {
    return(<>
    <Container fluid className='side-margin-container'>
    <Row className='nav-bar-rows'>
            <div className='contact-Nav'>
                <NavLink
                to='/'
                style={({ isActive, isPending }) => ({
                    color: isActive ? 'white': 'grey',
                    textDecoration: 'none',                  
                    borderBottom: isActive && '2px solid white' ,
                    
                })}
                >
                <h3>Home</h3> 
            </NavLink>   
            </div>
                  
        </Row>
        <Row className='nav-bar-rows'>
            <div className='contact-Nav'>
               <NavLink
               to='/contact'
               style={({ isActive, isPending }) => ({
                color: isActive ? 'white': 'grey',
                textDecoration: 'none',
                // backgroundColor: isActive ? '#7eb0d5' : 'black',
                borderBottom: isActive ? '2px solid white' : '2px solid transparent',
                paddingBottom: '8px'
               })}
               >
               <h3>Contact</h3> 
                </NavLink>
            </div>
            
        </Row>
        <Row className='nav-bar-rows'>
            <div className='contact-Nav'>
            <NavLink
                            to='/projects'
                            style={({ isActive, isPending }) => ({
                                color: isActive ? 'white': 'grey',
                                textDecoration: 'none',
                                // backgroundColor: isActive ? '#7eb0d5' : 'black',
                                borderBottom: isActive ? '2px solid white' : '2px solid transparent' ,
                                paddingBottom: '8px',
                                fontSize: '2rem'
                            })}
                            >
                            <h3 >Projects</h3> 
                        </NavLink>  

            </div>
                  
        </Row>
   
        
             
            
       
    </Container>
    
    </>)
}

export default NavBar;