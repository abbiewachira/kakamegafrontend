import React from "react";
import { Form, InputGroup, Button, Col } from "react-bootstrap";
import styles from "./style.css";
function Login() {  

  const [validated, setValidated] = React.useState(false);
  //Declare two states. The useState method lets one add
  //React state to function components

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      //Prevent the Submit event and execute Validator

      event.preventDefault();
      //Prevent parent elements from execution
      
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div >
      <div className="Appwelcome"></div>

      <div className="AppwelcomeText">
        <h2 className={styles.AppwelcomeText}>
          Welcome to the Kakamega Job Portal
        </h2>
      </div>
      <div className="AppTextbox">
        <Form
          className="formStyle"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <h2 className={styles.Applogin}>LOGIN </h2>
          <Form.Row>
            {/* The form Textbox for Username */}
            <Form.Group as={Col} md="6" controlId="validationCustomUsername">
              <Form.Label>Enter Username</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="InputGroupPrepend">@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a Username
                </Form.Control.Feedback>
              </InputGroup>
              <Form.Label>Password</Form.Label>
          <InputGroup>
          <InputGroup.Prepend>
          <InputGroup.Text id="inputGroupPrepend">**</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control type="password" placeholder="password" aria-describedby="InputGroupPrepend" required />
          <Form.Control.Feedback type="invalid"> Please enter password</Form.Control.Feedback>
          </InputGroup>
          <br />
          <Button className="btnLogin" type="submit">Login</Button>
            </Form.Group>
          </Form.Row>
         
        </Form>
      </div>
    </div>
  );
}

export default Login;
