import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import React from "react";

import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import RoutesBar from "./routes/RoutesBar";

function App() {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [loginState, setLoginState] = useState("fail");

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          {loginState === "fail" ? (
            <Navbar.Brand href="/">Money Manager Application</Navbar.Brand>
          ) : (
            ""
          )}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav-links">
              {loginState === "fail" ? (
                <>
                  <Link to="/SignUp" className="nav-link">
                    Sign up
                  </Link>
                  <Link to="/Login" className="nav-link">
                    Login
                  </Link>
                  <Link to="/Forgot" className="nav-link">
                    Forgot password
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/expensetracker" className="nav-link">
                    Expense Tracker
                  </Link>
                </>
              )}{" "}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <RoutesBar
        loginState={loginState}
        setLoginState={setLoginState}
        token={token}
        setToken={setToken}
        email={email}
        setEmail={setEmail}
      />
    </>
  );
}

export default App;
