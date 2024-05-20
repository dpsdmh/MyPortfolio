import React from 'react';
import '../Header/Header.css'
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router } from 'react-router-dom';

function Header() {
  return (
    <>
      <Router>
        <Nav className=  "mx-3 pt-2 justify-content-end fixed-top" style={{ fontWeight:'bold', fontSize:'1.2rem' }} activeKey="" >

          <Nav.Item className='nav mx-3'>
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item className='nav mx-3'>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item className='nav mx-3'>
            <Nav.Link href="#project">Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item className='nav mx-3'>
            <Nav.Link  href="mailto:dpsdmh@gmail.com">Contact</Nav.Link>
          </Nav.Item>

        </Nav>
        
      </Router>

    </>

  )
}

export default Header