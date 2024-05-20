import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './Home.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import ResumeBtn from './Components/ResumeBtn';
import './Components/Button.css'



function Home() {
  const [text] = useTypewriter({
    words: ['Electronics & Telecom Engineer',
    'Java Full Stack Developer',
    'Backend Developer',
    'Frontend Developer',
    'Web Developer',
    'Software Developer'
      
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50
  });

  return (
    <>
    
      <Container>

            <div id="home" className= 'pt-5  d-block align-top' style={{color:'white', width:'90%'}} >
             <div className='mt-5'> <span style={{ fontSize: '3rem' }}>Hello I'm</span>
              <div><span style={{ fontSize: '5rem', position:'sticky' }}>Dipanshu&nbsp;Raj</span></div>
              <span style={{ fontSize: '1.7rem', fontWeight: 'bold', color: 'lime'}}> {text} </span>
              <span style={{ color: 'firebrick' }}> <Cursor /></span>
              <div style={{marginBottom:'5%'}}>
              </div>
              <div>
              <ResumeBtn/>
              </div>
              <div className='d-flex justify-content-center' style={{width:'50%'}} >
              <MDBBtn className= 'mbtn m-4'  style={{ backgroundColor: '#55acee'}} href='https://twitter.com/Dpsdmh' target='_blank'>
                <MDBIcon fab icon='twitter' />
              </MDBBtn>
              <MDBBtn className='mbtn m-4' style={{ backgroundColor: '#0082ca' }} href='https://www.linkedin.com/in/dipanshu-raj-5740791a0/' target='_blank'>
                <MDBIcon fab icon='linkedin-in' />
              </MDBBtn>
              <MDBBtn className='mbtn m-4'  style={{ backgroundColor: '#333333' }} href='https://github.com/dpsdmh' target='_blank'>
                <MDBIcon fab icon='github' />
              </MDBBtn>
          </div>
              </div>

            </div>   
       
      </Container>

    </>
  )
}

export default Home