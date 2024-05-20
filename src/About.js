import React from 'react'
import { Container } from 'react-bootstrap'
import Skills from './Components/SkillsData/Skills'
function About() {
  return (
    <>
      <Container >
        <div id='about' className='pt-3'>
          <div className='mt-1'>
            <div className='mt-5' style={{ fontSize: '4.5rem', fontWeight: '500', color: 'LightGrey' }}>About Me</div>

            <div >
              <div style={{ color: 'Gainsboro', fontSize: '1.1rem' }}>
                A Java Full Stack Developer and Full Stack Web Developer, having knowledge in Java, JavaScript, Data Structure, React.JS, NodeJS, Redux, SQL, MySQL Seeking a beginner’s role to explore and enhance my technical knowledge gained at University hold a B.Tech Degree in Electronics and Telecommunication from Government engineering college Jagdalpur and completed a professional course in full stack web development.
              </div>
            </div>
          </div>
        </div>
        <Skills />


      </Container>


    </>
  )
}

export default About