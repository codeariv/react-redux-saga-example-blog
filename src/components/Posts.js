import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";

export default function Posts() {
  const { posts, loadingPosts } = useSelector((state) => state.PostReducer);
  return (
    <Container>
      {loadingPosts ? (
        <div className="loader">
          <Loader
            type="Bars"
            color="#00BFFF"
            height={50}
            width={100}
            timeout={3000} //3 secs
          />
        </div>
      ) : (
        posts.map((item, index) => {
          return (
            <Row className="posts" key={index}>
              <Col lg={8} md={10} sm={12}>
                <Link to={`/${item.id}`}>
                  <Card>
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.body}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            </Row>
          );
        })
      )}
    </Container>
  );
}
