import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { Form, Card, Button, Container, Row, Col } from "react-bootstrap";
function ReviewsScreen() {
  const [review, setReview] = useState([]);
  const [reviewvalue, setValue] = useState("");
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  console.log(currentUser);
  const getReviews = async () => {
    try {
      const { data } = await axios.get("/api/review/getreview");
      setReview(data);
    } catch (error) {
      console.log(error);
    }
  };
  const sendReview = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/review/addreview", {
        name: currentUser.name,
        email: currentUser.email,
        review: reviewvalue,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getReviews();
  }, []);

  return (
    <Container>
      <Row>
        {currentUser ? (
          <Card style={{ padding: "30px", marginTop: "20px" }}>
            <Form onSubmit={sendReview}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Add Your Review</Form.Label>
                <Form.Control
                  value={reviewvalue}
                  onChange={(e) => setValue(e.target.value)}
                  type="text"
                  placeholder="Enter Review"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card>
        ) : null}

        {review.map(({ name, email, review }) => (
          <>
            <Col md={4} style={{ display: "flex", flexWrap: "wrap" }}>
              <Card body style={{ width: "400px", marginTop: "20px" }}>
                <Card.Title>{name}</Card.Title>
                <Card.Title>{email}</Card.Title>
                {review}
              </Card>
            </Col>
          </>
        ))}
      </Row>
    </Container>
  );
}

export default ReviewsScreen;
