import React from 'react';
import {
    Container,
    Row, 
    Col,
} from 'reactstrap';

const Login = () => {
  return (
    <div className='bg__wrapper'>
        <Container className='lg__card'>
                <Row className='mt-5 '>
                    <Col>
                        <h1>Welcome to RideSharing</h1>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col>
                        <h2>Login</h2>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col>
                        <input type={"text"} placeholder="Enter mobile number" className='' />
                        <span className='d-block'>We will send a text to verify your account</span>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col>
                        <input type={'checkbox'} id="keep-login" /> <label htmlFor="keep-login">Keep me sign in</label>
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col>
                        <button>Next</button>
                    </Col>
                </Row>
        </Container>
    </div>
  );
}

export default Login;