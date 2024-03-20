import React from 'react'
import { Container, Row, Col, NavItem, NavLink, Nav } from 'react-bootstrap'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import { Navbar } from 'react-bootstrap'

//  () => {
//   return (
//     <div style={{ backgroundColor: 'grey', height: '350px' }}>
//       <Container style={{ backgroundColor: 'grey' }}>Footer</Container>
//     </div>
//   )
// }

const Footer = () => {
  return (
    <footer className='' style={{ backgroundColor: 'grey', height: '350px' }}>
      <Container style={{ backgroundColor: 'grey', height: '350px' }}>
        <Row
          className='justify-content-between'
          style={{ backgroundColor: 'grey' }}
        >
          <Col md={4} className='' style={{ backgroundColor: 'grey' }}>
            <img src='/logo.png' alt='BetMaster Pro Logo' />
            <p>Your Ultimate Betting Companion</p>
          </Col>
          <Col md={4} className='d-flex-inline'>
            <Nav navbar className='d-flex-inline'>
              {/* <NavItem>
                <NavLink href='/Pricing'>Pricing</NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink href='/Home'>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/Contact'>Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/About'>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/DisplayPlayer'>Display Players</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href='/GamblingHelp'>Help</NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md={4} className='footer__social'>
            <h3>Follow Us</h3>
            <Nav className='flex-row'>
              <Nav.Link href='https://www.facebook.com'>
                <FaFacebookF />
              </Nav.Link>
              <Nav.Link href='https://www.twitter.com'>
                <FaTwitter />
              </Nav.Link>
              <Nav.Link href='https://www.instagram.com'>
                <FaInstagram />
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
      <div className='footer__bottom'>
        <Container>
          <Row>
            <Col>
              <p>
                &copy; {new Date().getFullYear()} BetMaster Pro. All Rights
                Reserved.
              </p>
            </Col>
            <Col>
              <p>Privacy Policy | Terms & Conditions</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
