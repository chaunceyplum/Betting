import React from 'react'
import { Button, Container } from 'react-bootstrap'

const Reasons = () => {
  return (
    <div className='landing-page'>
      <Container style={{ color: 'white' }}>
        <h1>Welcome to BetMaster Pro - Your Ultimate Betting Companion!</h1>
        <p>Unlock the Power of Predictions with BetMaster Pro!</p>
        <div className='features'>
          <h2>Why Choose BetMaster Pro?</h2>
          <ul>
            <li>
              <strong>Precision Predictions:</strong> Our algorithms crunch
              through vast amounts of data to deliver predictions with unmatched
              accuracy, giving you the confidence to place winning bets.
            </li>
            <li>
              <strong>Expert Insights:</strong> Benefit from the knowledge of
              seasoned betting experts who analyze trends, statistics, and
              performance indicators to provide you with informed predictions.
            </li>
            <li>
              <strong>Wide Coverage:</strong> Whether you're into football,
              basketball, tennis, or any other sport, BetMaster Pro covers it
              all! Never miss out on a lucrative betting opportunity again.
            </li>
            <li>
              <strong>User-Friendly Interface:</strong> BetMaster Pro is
              designed with simplicity in mind. Easily navigate through the app,
              explore predictions, and place bets effortlessly.
            </li>
            <li>
              <strong>Real-Time Updates:</strong> Stay ahead of the game with
              real-time updates on match predictions, odds fluctuations, and
              more. Never miss a beat, even when you're on the go.
            </li>
          </ul>
        </div>
        <div className='cta'>
          <h2>Ready to Take Your Betting Game to the Next Level?</h2>
          <p>
            Join thousands of satisfied users who have transformed their betting
            experience with BetMaster Pro. Whether you're a seasoned bettor or
            just starting out, our app is your ultimate companion for success in
            the world of sports betting.
          </p>
          <Button variant='dark'>
            Download BetMaster Pro now and start winning big today!
          </Button>
        </div>
      </Container>
    </div>
  )
}

export default Reasons
