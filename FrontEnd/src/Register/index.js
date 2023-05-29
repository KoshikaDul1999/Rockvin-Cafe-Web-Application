import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Alert } from "react-bootstrap";
import "./register.css";

function RegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    axios
      .post("http://localhost:8080/api/auth/register", {
        firstName,
        lastName,
        email,
        password,
        //confirmPassword,
      })
      .then((response) => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        //setConfirmPassword("");
        setError("");
        setIsLoading(false);
        // Handle successful registration
      })
      .catch((error) => {
        setError(error.response.data.message);
        setIsLoading(false);
      });
  }

  return (
    <div className="register-container">
    <h1 className="rHead">Register New Admin</h1>
    <Form onSubmit={handleSubmit}>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group controlId="firstName">
        <Form.Label className="form-label">First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          required
          className="form-control"
        />
      </Form.Group>
      <Form.Group controlId="lastName">
        <Form.Label className="form-label">Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          required
          className="form-control"
        />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label className="form-label">Email Address</Form.Label>
        <Form.Control
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className="form-control"
        />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label className="form-label">Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          className="form-control"
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={isLoading}>
        {isLoading ? "Loading..." : "Submit"}
      </Button>
    </Form>
    </div>
  );
}

export default RegistrationForm;


/*import React, { useState, useEffect } from 'react';
import { Form, Formik } from 'react-hook-form';
import { Button, Col, FormGroup, FormLabel, Row } from 'react-bootstrap';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const handleSubmit = () => {
      const data = {
        username,
        email,
        password,
        confirmPassword,
      };
      axios.post('/api/register', data).then((res) => {
        if (res.status === 201) {
          // Redirect to the login page
          window.location.href = '/login';
        } else {
          setError(res.message);
        }
      });
    };
    return () => {
      // Remove event listeners
    };
  }, [username, password, email, confirmPassword]);

  return (
    <Formik
      initialValues={{
        username,
        email,
        password,
        confirmPassword,
      }}
      onSubmit={handleSubmit}
    >
      {({ errors, isValid }) => (
        <Form>
          <Row>
            <Col sm="12">
              <FormGroup>
                <FormLabel>Username</FormLabel>
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  isValid={!errors.username}
                  helperText={errors.username}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <FormGroup>
                <FormLabel>Email</FormLabel>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  isValid={!errors.email}
                  helperText={errors.email}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <FormGroup>
                <FormLabel>Password</FormLabel>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  isValid={!errors.password}
                  helperText={errors.password}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <FormGroup>
                <FormLabel>Confirm Password</FormLabel>
                <input
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  isValid={!errors.confirmPassword}
                  helperText={errors.confirmPassword}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <Button
                type="submit"
                disabled={!isValid}
                variant="primary"
              >
                Register
              </Button>
            </Col>
          </Row>
          {error && <p>{error}</p>}
        </Form>
      )}
    </Formik>
  );
};

export default Register;  */