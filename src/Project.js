import React from 'react'
import ProjectData from './Components/ProjectData';
import Cards from './Components/Cards';
import { Container } from 'react-bootstrap';

function Project() {
  return (
   <>
   <Container className='pt-5 '>
   <div className='pt-3' id="project" style={{ fontSize:'4.5rem', fontWeight:'500', color:'LightGrey' }}>Projects</div>
   <Cards details={ProjectData}/>
   
   </Container>
   </>
  );
  }


export default Project