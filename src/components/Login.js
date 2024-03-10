import Footer from '@/components/Footer'
import MyNav from '@/components/MyNav'
import { useEffect } from 'react'
import { Button, FormControl } from 'react-bootstrap'
import { Card, CardBody, CardHeader, Container, Form } from 'reactstrap'

const Login = () => {
  // const fetcher = () => {
  //  fetch(/)
  // }
  return (
    <div>
      <MyNav />
      <Container style={{ width: '50%' }}>
        <Card>
          {/* <CardHeader>
            <h3>Login</h3>
          </CardHeader> */}
          <CardBody>
            <Container className='text-center'>
              <h3 className='text-center text-white'>Login</h3>
              <br />
              <Form>
                <FormControl placeholder='Email goes here!' />
                <br />
                <FormControl placeholder='Password goes here!' />
                <br />
                <br />
                <Button className='text-center' variant='dark'>
                  Submit
                </Button>
              </Form>
              <br />
            </Container>
          </CardBody>
        </Card>
      </Container>
      <Footer />
    </div>
  )
}

export default Login
