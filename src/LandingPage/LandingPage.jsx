import {Row, Col, Image} from 'react-bootstrap';
import './LandingPage.css'
import {useState} from 'react';

const LandingPage = () => {

  const [shortVersion, setShortVersion] = useState(true)
  if(shortVersion){
    return(
      <>
      <h3>About Me</h3>
      <p className='main-body'>I’m a pragmatic* software engineer with a strong focus on backend web technologies, especially in C# and .NET. I’ve
      worked across cloud infrastructure, microservices, and monolithic APIs, all within modern development practices like
      CI/CD, observability, and agile delivery.
             </p>
             <p className='main-body'>
            My Thesis was on Empiricism in Science and the Philosophy of Science. The phil-sci Archive link can be found <a href="http://philsci-archive.pitt.edu/21458/" target="_blank">here</a>, and the official document can be found <a href="https://research-information.bris.ac.uk/en/studentTheses/empiricism-in-the-philosophy-of-science" target="_blank">here</a>.

            Relevant to 

             </p>
      </>
    )
  }
    
    return(
        <>
        
          <Row>
         
       
            <Col className='column-body'>  
            <h2>About Me</h2>
            <p className='main-body'>I'm a software developer with a background in Academic Research in the Philosophy of Science. I now mainly work in web development, and have commercial experience ranging from SaaS web apps to website design and building to custom-made full-stack web apps. 
             </p>
             <p className='main-body'>
            My Thesis was on Empiricism in Science and the Philosophy of Science. The phil-sci Archive link can be found <a href="http://philsci-archive.pitt.edu/21458/" target="_blank">here</a>, and the official document can be found <a href="https://research-information.bris.ac.uk/en/studentTheses/empiricism-in-the-philosophy-of-science" target="_blank">here</a>.

            Relevant to 

             </p>

             <p className='main-body'>
              I mainly work in web development, and have experience ranging from SaaS web apps, to websites to custom-made web apps. The languages I'm most comfortable in are JavaScript and TypeScript. I have more experience in the Front-End, where my preferred framework is React; but I nonetheless really enjoy the Back-End too. Within JavaScript and TypeScript, I use Express as a framework. 
            </p>
            <p className='main-body'>
              I'm also familiar with C# and .NET, especially using ASP.NET. Moving forward I'd love to explore more languages. I'm keen to learn a purely functional language (started learning Haskell) and a lower-level language (C/Rust/Zig/Hare) to satisfy my curiosity there. 
            </p>
            <p className='main-body'>
            As you can see, I'm also lucky enough to have had a healthy son born in November 2023. I've been taking some time out of full-time work and doing part-time freelance for a couple of months now. But I'm now open to either permanent, contract, or freelance work. 

            </p>
             


            
            </Col>
         



          </Row>
        </>
    )
}

export default LandingPage