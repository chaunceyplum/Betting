import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Hero = () => {
  return (
    <div>
      <div className='text-white'>
        <br />
        <br />

        <Container>
          <Row>
            <Col>
              <br />
              <div className=''>
                <br />
                <h2>Welcome to Betmaster Pro</h2>
                <br />
                <h6>Unlock the Power of Predictions with BetMaster Pro!</h6>
                <br />

                <p>
                  Are you tired of losing bets and feeling like youre just
                  guessing? Say goodbye to uncertainty and hello to winning
                  streaks with BetMaster Pro! Our cutting-edge betting
                  predictions application utilizes advanced algorithms and
                  expert analysis to provide you with the most accurate
                  predictions, giving you the edge you need to conquer the
                  betting world.
                </p>
                <Button variant='dark'>Learn More</Button>
                <br />
              </div>
              <br />
            </Col>
            <Col xs={6}></Col>
          </Row>
        </Container>
        <Container>
          <br />
          <br />
          <br />
          <br />

          <br />
          <br />
          <br />
        </Container>
      </div>
    </div>
  )
}

export default Hero
