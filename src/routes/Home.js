import React from "react";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <Container className="container">
      <div className="home-header">Welcome!</div>
      <div className="home-content">
      “Money Manager ” is an optimized application for personal account management. Easy to track daily expense on the go.
      </div>
    </Container>
  );
}

export default Home;