import Footer from '@/components/Footer'
import MyNav from '@/components/MyNav'
import React from 'react'
import {
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from 'react-bootstrap'

const Contact = () => {
  return (
    <div>
      <MyNav />
      <div>Contact</div>
      <Container>
        <h3 className='text-center text-white'>Contact</h3>
        <br />
        <br />
        <br />
        <br />
        <Form>
          <FormGroup>
            <FormLabel className='text-white'>Name</FormLabel>
            <FormControl />
          </FormGroup>
          <FormGroup>
            <FormLabel className='text-white'>Email</FormLabel>
            <FormControl />
          </FormGroup>
          <FormGroup>
            <FormLabel className='text-white'>Phone </FormLabel>

            <FormControl />
          </FormGroup>
          <FormGroup>
            <FormLabel className='text-white'>Message </FormLabel>
            <FormControl as='textarea' />
          </FormGroup>
        </Form>
        <br />
        <br />
        <br />
        <br />
      </Container>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  )
}

export default Contact
