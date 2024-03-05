import { useState } from 'react'
import {
  Collapse,
  Container,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from 'reactstrap'

const MyNav = () => {
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => setCollapsed(!collapsed)
  return (
    <div style={{ minHeight: '100px' }}>
      <br />
      <Container>
        <Navbar color='black' dark>
          <NavbarBrand href='/' className='me-auto'>
            Betting APP
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className='me-2' />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href='/components/'>Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='https://github.com/reactstrap/reactstrap'>
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </div>
  )
}

export default MyNav
