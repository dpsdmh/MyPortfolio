import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Header from '../Header/Header';



function Logo() {
  return (
    <>
    <div className='fixed-top'>
    <Navbar className='gradient_background'   variant="dark"  >
    <Container >
      <Navbar.Brand >
        <img
          alt=""
          src="./Image/LionLogo.svg"
          width="50"
          height="30"
          
        />{' '}
        <span style={{fontWeight:'bold'}}>Dipanshu Raj</span>
    
        </Navbar.Brand>
        
    </Container>
    <Header/>
 
  </Navbar>
  
  </div>
 
  
    </>
  );
}

export default Logo;