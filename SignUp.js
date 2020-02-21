import React from "react";
import { Form, Col, Dropdown, Button } from "react-bootstrap";
import styles from "./style.css";
import validators from "./validators";

export default class Signup extends React.Component {  
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.select = this.select.bind(this);

    this.state = {
      dropdownOpen: false,
      value: "User Type",

      userInfo: {
        email: "",
        username: "",
        password: ""
      }
    };

    // Set of validators for signin form
    this.validators = validators;

    // This resets our form when navigating between views
    this.resetValidators();

    // Correctly Bind class methods to reacts class instance
    this.handleInputChange = this.handleInputChange.bind(this);
    this.displayValidationErrors = this.displayValidationErrors.bind(this);
    this.updateValidators = this.updateValidators.bind(this);
    this.resetValidators = this.resetValidators.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isFormValid = this.isFormValid.bind(this);
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  select(event) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      value: event.target.innerText
    });
  }

  /**
   * This function is called whenever a form input is changed
   * Which in turn updates the state of this component and validators
   */
  handleInputChange(event, inputPropName) {
    const newState = Object.assign({}, this.state);
    newState.userInfo[inputPropName] = event.target.value;
    this.setState(newState);
    this.updateValidators(inputPropName, event.target.value);
  }

  /**
   * This function handles the logic when submiting the form.
   * @TODO make an API request to authenticate the user
   */
  handleSubmit(e) {
    console.log(this.state.userInfo);
    console.log("Yepee! form submitted");
    e.preventDefault();
  }

  /**
   * This function updates the state of the validator for the specified validator
   */
  updateValidators(fieldName, value) {
    this.validators[fieldName].errors = [];
    this.validators[fieldName].state = value;
    this.validators[fieldName].valid = true;
    this.validators[fieldName].rules.forEach(rule => {
      if (rule.test instanceof RegExp) {
        if (!rule.test.test(value)) {
          this.validators[fieldName].errors.push(rule.message);
          this.validators[fieldName].valid = false;
        }
      } else if (typeof rule.test === "function") {
        if (!rule.test(value)) {
          this.validators[fieldName].errors.push(rule.message);
          this.validators[fieldName].valid = false;
        }
      }
    });
  }

  // This function resets all validators for this form to the default state
  resetValidators() {
    Object.keys(this.validators).forEach(fieldName => {
      this.validators[fieldName].errors = [];
      this.validators[fieldName].state = "";
      this.validators[fieldName].valid = false;
    });
  }

  // This function displays the validation errors for a given input field
  displayValidationErrors(fieldName) {
    const validator = this.validators[fieldName];
    const result = "";
    if (validator && !validator.valid) {
      const errors = validator.errors.map((info, index) => {
        return (
          <span className="error" key={index}>
            * {info}
          </span>
        );
      });

      return <div className="col s12 row">{errors}</div>;
    }
    return result;
  }

  // This method checks to see if the validity of all validators are true
  isFormValid() {
    let status = true;
    Object.keys(this.validators).forEach(field => {
      if (!this.validators[field].valid) {
        status = false;
      }
    });
    
    return status;
  }
  
  render() {
    return (
      
      <div>
        <div className="Appwelcome"></div>
        <div className="AppwelcomeText">
          <h2 className={styles.AppwelcomeText}>
            Welcome to the Kakamega Job Portal
          </h2>
        </div>
        <div className="AppTextbox">
          <Form className="formStyle">
            <h2 className={styles.Applogin}>SIGN UP </h2>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationFName">
                <Form.Label>First Name</Form.Label>
                <Form.Control required type="text" />
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="validationLName">
                <Form.Label>Last name</Form.Label>
                <Form.Control required type="text" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="8" controlId="validationUname">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                  required
                  id="email"
                  type="text"
                  style={{color:"green"}}
                  value={this.state.userInfo.email}
                  onChange={event => this.handleInputChange(event, "email")}
                />
                {this.displayValidationErrors("email")}
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationPass">
                <Form.Label>Enter Password</Form.Label>
                <Form.Control
                  required
                  id="password"
                  type="password"
                  value={this.state.userInfo.password}
                  onChange={event => this.handleInputChange(event, "password")}
                />
                {this.displayValidationErrors("password")}
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationRepass">
                <Form.Label>Retype Password</Form.Label>
                <Form.Control required id="confPassword" type="password" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationTel">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control required type="text" />
              </Form.Group>

              <Form.Group as={Col} md="3" controlId="validationUserType">
                <Form.Label> </Form.Label>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <Dropdown.Toggle split variant="Secondary">
                    {this.state.value}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={this.select}>
                      Job Seeker
                    </Dropdown.Item>
                    <Dropdown.Item onClick={this.select}>
                      Employer
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <br />
                <Button
                  className="btnLogin"
                  type="submit"
                  onSubmit={this.handleSubmit}
                >
                  SignUp
                </Button>
              </Form.Group>
            </Form.Row>
          </Form>
        </div>
      </div>
    );
  }
}
