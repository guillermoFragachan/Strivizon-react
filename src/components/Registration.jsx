import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";

const Registration = (props) => {
  const [form, setForm] = useState({
    name: null,
    surname: null,
    email: null,
    password: "",
    confirmation: '',
  });
  const [passOk, setPassOk] = useState(false);

  const handleInput = (key, value) => {
    setForm({
      ...form,
      [key]: value,
    });
  };

  const submitRegistration = (e) => {
    e.preventDefault();
    if (form.password.length > 8) {
      const hasNumbers = (t) => {
        var regex = /\d/g;
        return regex.test(t);
      };
      if (hasNumbers(form.password)) {
        setPassOk(true);
      }
    } else {
      alert("Check you password");
    }
  };

  return (
    <BrowserRouter>
      <Container className={passOk && "d-none"}>
        <Row>
          <Col xs={1} md={2}></Col>
          <Col xs={10} md={8} className="d-flex flex-column align-items-center">
            <h1 className="text-center mt-4">create account</h1>
            <Form
              className="w-75 d-flex flex-column align-items-center"
              onSubmit={submitRegistration}
            >
              <Form.Group className="w-100">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={form.name}
                  onChange={(e) => {
                    handleInput("name", e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="w-100">
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  type="text"
                  value={form.surname}
               
                  onChange={(e) => {
                    handleInput("surname", e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="w-100" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
               
                  value={form.email}
                  onChange={(e) => {
                    handleInput("email", e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="w-100">
                <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                <Form.Control
                  type="password"
              
                  value={form.password}
        
                  onChange={(e) => {
                    handleInput("password", e.target.value);
                  }}
                />
    
              </Form.Group>
              <Form.Group className="w-100">
                <Form.Label htmlFor="inputpass">Confirm Password2</Form.Label>
                <Form.Control
                  type="password"
              
                  value={form.confirmation}
                  
                  
                  onChange={(e) => {
                    handleInput("confirmation", e.target.value);
                  }}
                />
            
              </Form.Group>
              <Button
                type="submit"
                className="w-50 mt-3"
                disabled={
                  (!form.name, !form.surname, !form.email, !form.password, form.confirmation!==form.password)
                }
              >
                Sign-up
              </Button>
            </Form>
          </Col>
          <Col xs={1} md={2}></Col>
        </Row>
      </Container>
      <Container
        className={
          passOk === false ? "d-none" : "d-flex flex-column align-items-center"
        }
      >
        <hr />
        <h1>Your account</h1>
        <hr />
        <p>Your name: {form.name} </p>
        <p>Your surname: {form.surname}</p>
        <p>Your email: {form.email}</p>
        <p>Your password: {form.password}</p>
      </Container>
    </BrowserRouter>
  );
};
export default withRouter(Registration);