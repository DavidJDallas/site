import './App.css';
import {Container, Row, Col} from 'react-bootstrap';
import NavBar from './NavBar/NavBar';
import {useState, useEffect} from 'react';
import NavBarTop from './NavBar/NavBarTop';
import {Routes, Route} from 'react-router-dom';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import LandingPage from './LandingPage/LandingPage';

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

 
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

if(isMobile)
  return(<>
   <Container fluid style={{ height: '100vh', padding: 0 }}>

          <Row>
          <NavBarTop/>

      
           </Row>
    <Routes>
              <Route path ="/" element ={<LandingPage/>}/>
              <Route path="/contact" element={<Contact/>} />
              <Route path = "/projects" element={<Projects/>}/>
        </Routes>
      
   
    </Container>
  </>)

  return (
    <>
  
    <Container fluid style={{ height: '100vh', padding: 0, }}>
      <Row style={{ height: '100%' }}>
        <Col
        xs={3}
         sm={3}
         m={2}
         lg={2}
 
         
          style={{           
            
            height: '100%',
           
            // overflow: 'hidden',
          }}
        >
          <NavBar />
        </Col>
        <Col
   
        style={{ height: '100%' }}>
        <Routes>
              <Route path ="/" element ={<LandingPage/>}/>
              <Route path="/contact" element={<Contact/>} />
              <Route path = "/projects" element={<Projects/>}/>
        </Routes>

         
        </Col>
      </Row>
   
    </Container>

   

    </>
  );
}

export default App;
