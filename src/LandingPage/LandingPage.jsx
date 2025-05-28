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
            I love to learn and am driven by a constant desire to understand. Before software engineering, I completed two Masters degrees and a PhD in Philosophy - specifically, in the Philosophy of Science. My Thesis was on Empiricism in Science and the Philosophy of Science, both historically and contemporarily. The phil-sci Archive link can be found <a href="http://philsci-archive.pitt.edu/21458/" target="_blank">here</a>, and the official document can be found <a href="https://research-information.bris.ac.uk/en/studentTheses/empiricism-in-the-philosophy-of-science" target="_blank">here</a>.


             </p>

        * I use the description 'Pragmatic' to primarily to endorse something akin to John Ousterhout's position that opposes some of the more dogmatic elements of Robert Martin's 'clean code' ideology and some of the elements of SOLID.
      </>

  
    )
  }
}

export default LandingPage