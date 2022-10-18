import React from 'react';
import {
    Container,
    Row, 
    Col,
} from 'reactstrap';

const Login = () => {
  return (
    <div className='bg__wrapper'>
        <Container className='d-flex lg__wrapper'>
            <Row className='lg__card'>
                <Row className='mt-5 '>
                    <Col>
                        <h1>Welcome to RideSharing</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Login</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <input type={"text"} placeholder="Enter mobile number" />
                        <span className='d-block'>We will send a text to verify your account</span>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col>
                        <input type={'checkbox'} /> <span>Keep me sign in</span>
                    </Col>
                    
                </Row>
                <Row className='mt-4'>
                    <Col>
                        <button>Next</button>
                    </Col>
                </Row>
            </Row>
        </Container>
    </div>
  );
}

export default Login;