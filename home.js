import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Form, Col, Button, Row } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (

            <div className="home" >
                <h2>Search thousands of job oportunities available in Kakamega County</h2>
                <div className="homesearch">

                    <Form>
                        <Row className="form">
                            <Row className="textboxes">
                                <Col>
                                    <Form.Control className="formtext" placeholder="location" />
                                </Col>
                                <Col>
                                    <Form.Control className="formtext" placeholder="job type" />
                                </Col>

                            </Row>
                            

                                <div className='row justify-content-around '>
                                    <div className='col'>
                                        <Button className="btnfindjob" variant="success" type="submit">
                                            Find
                    </Button>

                                    </div>
                                    <div className='col'>
                                        <Button className="btnpostjob" variant="success" type="submit">
                                            Post
                    </Button>
                                    </div>
                                </div>


                           

                        </Row>
                    </Form>

                </div>

            </div>
        );
    }
}

export default Home