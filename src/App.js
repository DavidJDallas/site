import './App.css';
import {Container, Row, Col, Image} from 'react-bootstrap';
import NavBar from './NavBar/NavBar';
import {useState, useEffect} from 'react';
import NavBarTop from './NavBar/NavBarTop';
import {Routes, Route} from 'react-router-dom';
import Projects from './Projects/Projects';
import LandingPage from './LandingPage/LandingPage';
import Blog from './Blog/Blog';
import Header from './Header/Header'
import './App.css'
import Footer from './Footer/Footer';

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
  const [title, setTitle] = useState('David Dallas');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if(isMobile) {
    return (
      <>
        <div className="mobile-background-container" style={{ position: 'relative', minHeight: '100vh' }}>
          <Container fluid style={{ padding: 0 }}>
            {/* Mobile Header */}
            <Row className="mobile-header">
            
            </Row>
            
            {/* Mobile Navigation */}
            <Row className="mobile-nav">
              <NavBarTop setTitle={setTitle} />
            </Row>

            
            {/* Mobile Content */}
            <Row className="mobile-content" style={{ flex: 1, padding: '15px' }}>
              <Col xs={12}>
                <Routes>
                  <Route path="/" element={<LandingPage title={'David Dallas'} />}/>
                  <Route path="/projects" element={<Projects title={title} />}/>
                  <Route path="/blog" element={<Blog title={title} />}/>
                </Routes>
              </Col>
            </Row>
            
            {/* Mobile Footer */}
            <Row className="mobile-footer mt-4">
              <Footer />
            </Row>
          </Container>
        </div>
      </>
    );
  }

  return (
    <> 
      <div className={`background-container`} style={{ position: 'relative' }}>
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
                <Route path='/' element={<LandingPage title={'David Dallas'} />} />          
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