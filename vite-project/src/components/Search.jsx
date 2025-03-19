import { Container, Form, Row, Col, Button, Card } from "react-bootstrap";

function FlightSearch() {
  return (
    <div className="flight-search-section text-center py-5" style={{ background: "linear-gradient(to bottom, #007bff, #0056b3)", color: "#fff" }}>
      <Container>


        <h1 className="fw-bold">Let's explore & travel the world</h1>
        <p>Find the best destinations and the most popular stays!</p>

        <Card className="p-4 mt-4 mx-auto" style={{ maxWidth: "900px", borderRadius: "10px" }}>
          <h5 className="text-start">
            <b>SEARCH FLIGHTS</b>
          </h5>
          <Row className="align-items-center mt-3"> 


            <Col md={3}>
              <Form.Group>
                <Form.Label>Departure</Form.Label>
                <Form.Control type="text" placeholder="Singapore (SIN)" />
              </Form.Group>
            </Col>

            <Col md={3}>
              <Form.Group>
                <Form.Label>Arrival</Form.Label>
                <Form.Control type="text" placeholder="Los Angeles (LA)" />
              </Form.Group>
            </Col>

            <Col md={3}>
              <Form.Group>
                <Form.Label>Date</Form.Label>
                  <Form.Control type="text" placeholder="01/05/2022"  />
              
              </Form.Group>
            </Col>

            <Col md={3} className="d-flex justify-content-end">
              <Button variant="warning" className="fw-bold px-4">Search Flights</Button>
            </Col>
          </Row>

          <div className="d-flex mt-3">
            <Form.Check type="radio" label="Return" name="tripType" className="me-3" />
            <Form.Check type="radio" label="One-way" name="tripType" defaultChecked />
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default FlightSearch;
