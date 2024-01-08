import './App.css';
import {Container, Row, Col, Image} from 'react-bootstrap';
import NavBar from './NavBar/NavBar';
import {useState, useEffect} from 'react';
import NavBarTop from './NavBar/NavBarTop';
import {Routes, Route} from 'react-router-dom';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import LandingPage from './LandingPage/LandingPage';
import Blog from './Blog/Blog';
import topleft from './SVGS/topleft.svg';
import topright from './SVGS/topright.svg';
import Header from './Header/Header'
import './App.css'
import Footer from './Footer/Footer';

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
  const [title, setTitle] = useState('Hello & Welcome');


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
        <Route path = "/blog" element={<Blog/>}/>
    </Routes>
      
   
    </Container>
  </>)

  return (
    <> <div className={`background-container`} style={{ position: 'relative' }}>
    <Container fluid style={{ height: '100vh', padding: 0 }}>
      <Row>
        <Header title={title} />
      </Row>
      <Row style={{ height: 'auto', marginLeft: '10px' }}>
        <Col xs={3} sm={3} m={2} lg={2}>
          <NavBar setTitle={setTitle} />
        </Col>
        <Col className='main-column'>
          <Routes>
            <Route path='/' element={<LandingPage title={title} />} />
            <Route path='/contact' element={<Contact title={title} />} />
            <Route path='/projects' element={<Projects title={title} />} />
            <Route path='/blog' element={<Blog title={title} />} />
          </Routes>
        </Col>
        <Col xs={2}></Col>
      </Row>
      <Row className='mt-5'>
        <Footer />
      </Row>
    </Container>

  </div>
    </>
  );
}

export default App;
