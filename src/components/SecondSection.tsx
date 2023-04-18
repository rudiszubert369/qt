import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const SecondSection = () => {
  return (
      <Container style={{ marginTop: '29px', marginBottom: '50px' }}>
        <Row>
          <Col md={6} style={{ paddingLeft: 0, border: '1px solid' }}>
            <Row style={{ height: '116px' }}>
              <Col md={4}>
                <div
                  style={{
                    marginTop: '-21px',
                    height: '111px',
                    backgroundColor: '#F3B700',
                  }}
                >
                  <div style={{ textAlign: 'center', marginTop: '21px' }}>
                    <p style={{ height: '10px' }}>1</p>
                    <p>height: 200px;</p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div
                  style={{
                    marginTop: '-21px',
                    height: '111px',
                    backgroundColor: '#F3B700',
                  }}
                >
                  <div style={{ textAlign: 'center', marginTop: '21px' }}>
                    <p style={{ height: '10px' }}>1</p>
                    <p>height: 200px;</p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div
                  style={{
                    marginTop: '-21px',
                    height: '111px',
                    backgroundColor: '#F3B700',
                    width: '109px',
                    paddingRight: 0,
                  }}
                >
                  <div style={{ textAlign: 'center', marginTop: '21px' }}>
                    <p style={{ height: '10px' }}>1</p>
                    <p>height: 200px;</p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row style={{ marginTop: '27px' }}>
              <Col md={12} style={{ height: '80px' }}>
                <div style={{ textAlign: 'center', marginTop: '32px' }}>
                  <p>7</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6} style={{ height: '80px', backgroundColor: '#F3B700' }}>
                <div style={{ textAlign: 'center', marginTop: '43px' }}>
                  <p>7</p>
                </div>
              </Col>
              <Col md={6} style={{ height: '80px' }}>
                <div style={{ textAlign: 'center', marginTop: '43px' }}>
                  <p>7</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <div style={{ marginTop: '23px', border: '1px solid', height: '111px' }}>
              <div style={{ textAlign: 'center', marginTop: '21px' }}>
                <p style={{ height: '10px' }}>1</p>
                <p>height: 200px;</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

  );
}

export default SecondSection;
