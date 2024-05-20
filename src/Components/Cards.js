import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../Components/Cards.css'
function Cards(props) {
  return (
    <>
    <div className='mt-5' >
        <Container className='mt-5' >
          <Row xs={1} md={2} className=" g-5" >
          {props.details.map((value) => (
            <div key={value.id}>
              <Col className='card h-100' style={{backgroundColor:"AliceBlue"}}>
                <Card className='card1 h-100'  style={{ color: 'black', backgroundColor:'AliceBlue'}}>
                  <Card.Img variant="top" src={value.imgsrc} height={"300"} />
                  <Card.Body>
                    <Card.Title style={{fontWeight:'bold', color:'#4285F4'}}>{value.pname}</Card.Title>
                    <Card.Text>
                      {value.pabout}
                    </Card.Text>
                    <Card.Text style={{fontWeight:'bold'}}>
                      Language used: {value.planguage}
                    </Card.Text>
                    <Card.Link className='link1' style={{ fontWeight: 'bold' }} href={value.codelink} target='_blank'>Code</Card.Link>
                    <Card.Link className='link1' style={{ fontWeight: 'bold' }} href={value.sourcelink} target='_blank'>Source</Card.Link>
                  </Card.Body>
                </Card>
              </Col>

              </div>
            ))} 
          </Row>
        </Container>
      </div>
      
    </>
  );
}

export default Cards;