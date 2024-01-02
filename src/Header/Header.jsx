import {Col, Row, Image} from 'react-bootstrap';
import topleft from '../SVGS/topleft.svg';
import topright from '../SVGS/topright.svg';
import './Header.css'

const Header = ({title}) => {
    return(
        <>
         <Col
         xs={2}
         ><Image src={topleft} alt="Left SVG" className="top-left-svg" /></Col>
      <Col
      xs={8}
      >
        <div className='title'>
          <h1 >{title}</h1>  </div></Col>
      <Col
      xs={2}
      ><Image src={topright} alt="Top-right" className='top-right-svg ml-auto' /></Col>
        </>
    )
}

export default Header