import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {Container, Col,Row} from 'react-bootstrap';
import Senator from '../sen-malala-640x640.jpg';

class About extends Component{
    render(){
        return(
            <Container className="About">
                <Row>
                    <Col className="aboutpic"sm={3}><img
        src={Senator}
        width="100"
        height="100"
        className="senator"
        alt="logo"
      /></Col>
                    <Col className="abouttext"sm={9}>
                        <h2>
                            About Us
                        </h2>
                        Lorem ipsum dolor sit amet, qui cu wisi ludus splendide, pro quod movet melius ad, an mollis constituto reformidans vel. Eligendi delectus ut mea, duo eu enim utroque suscipiantur, ipsum ponderum cum an. Probo posse cu eum, ut per probatus deseruisse. Habeo modus falli sed eu, nec et utamur maiorum. Suas fastidii torquatos cu his. Melius appellantur eum ut.

Saperet repudiare urbanitas id sed, te mnesarchum intellegam omittantur vim. Mea epicurei recusabo repudiandae ad, sed graeco ornatus ut. Illud quodsi dolorem an vis, ei splendide rationibus disputando eos. Dico ridens postulant in duo, atomorum facilisis suavitate ut pro, eu wisi mucius vel. Vel sale velit alterum ad, his ea scriptorem liberavisse, voluptua appareat pro ex. Et simul nusquam eum.


                        
                        </Col>
                </Row>
            
            </Container>
        );
    }
}
export default About