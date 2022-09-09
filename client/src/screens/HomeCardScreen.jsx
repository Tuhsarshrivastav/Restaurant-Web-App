import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const HomeCardScreen = () => {
  return (
    <Container>
      <Row>
        <Col md={4} style={{ display: "flex", padding: "80px" }}>
          <Link to="menus">
            <Card
              style={{
                width: "18rem",
                marginTop: "30px",
              }}
            >
              <Card.Img
                height={200}
                variant="top"
                src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/10/3/0/FNM_110117-Insert-Opener_s4x3.jpg.rend.hgtvcom.616.462.suffix/1507047921977.jpeg"
              />
              <Card.Body>
                <Card.Title>Menus</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col md={4} style={{ display: "flex", padding: "80px" }}>
          <Link to="special">
            <Card
              style={{
                width: "18rem",
                marginTop: "30px",
                marginBottom: "50px",
              }}
            >
              <Card.Img
                height={200}
                variant="top"
                src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/01/shutterstock_4148348021.jpg"
              />
              <Card.Body>
                <Card.Title>Special Dishe</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col md={4} style={{ display: "flex", padding: "80px" }}>
          <Link to="reviews">
            <Card
              style={{
                width: "18rem",
                marginTop: "30px",
                marginBottom: "50px",
              }}
            >
              <Card.Img
                variant="top"
                height={200}
                width={20}
                src="https://www.rivaliq.com/wp-content/uploads/2016/06/barismo.png"
              />
              <Card.Body>
                <Card.Title>Reviews</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeCardScreen;
