import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className=' text-center text-white'>
      <MDBContainer className=' m-5 p-2 pb-0'>
        <section className='mb-4'>
         
        <div className='text-end' >
        <MDBBtn className= 'm-4'  style={{ backgroundColor: '#55acee'}} href='https://twitter.com/Dpsdmh' target='_blank'>
          <MDBIcon fab icon='twitter' />
        </MDBBtn>
        <MDBBtn className='m-4' style={{ backgroundColor: '#0082ca' }} href='https://www.linkedin.com/in/dipanshu-raj-5740791a0/' target='_blank'>
          <MDBIcon fab icon='linkedin-in' />
        </MDBBtn>
        <MDBBtn className='m-4'  style={{ backgroundColor: '#333333' }} href='https://github.com/dpsdmh' target='_blank'>
          <MDBIcon fab icon='github' />
        </MDBBtn>
    </div>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright: Dipanshu_Raj
        
      </div>
    </MDBFooter>
  );
}