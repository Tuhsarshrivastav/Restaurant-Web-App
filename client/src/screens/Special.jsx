import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpacial } from "../actions/pizzaAction";
const Special = () => {
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { pizzas } = useSelector((state) => state.getSpacial);
  console.log("imp", pizzas.length);
  useEffect(() => {
    dispatch(getSpacial());
  }, []);

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Card
            style={{ width: "18rem", marginTop: "30px", marginBottom: "50px" }}
          >
            <Card.Img
              variant="top"
              src={pizzas[0]?.image}
              style={{ height: "250px", cursor: "pointer" }}
            />
            <Card.Body>
              <Card.Title>{pizzas[0]?.name}</Card.Title>

              <hr />
              <Card.Text>
                <Row>
                  <Col md={6}>
                    <h6>Quantity</h6>
                    <select
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    >
                      {[...Array(10).keys()].map((v, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </Col>
                </Row>
              </Card.Text>
              <Row>
                <Col md={6}>
                  Price : {pizzas[0]?.prices[0][varient] * quantity}/-RS
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Special;
