import Footer from '@/components/Footer'
import MyNav from '@/components/MyNav'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

export default function pricing() {
  return (
    <div>
      <MyNav />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Row>
          <Col>
            <Container className='text-center text-white'>
              <h2>
                Get the <span className='text-dark'>perfect</span> package that
                fits your budget
              </h2>

              <p>No contracts or surplus fees.</p>
            </Container>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col xs={12} md={4}>
            <Card className='Card'>
              <br />
              <Container className='text-center text-white'>
                <h2>
                  <strong className='text-dark'>$5.00</strong>
                </h2>
                <p>/month</p>
                <h4>Standard</h4>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li>
                    consectetur adipisicing elit. Officia quam molestiae porro
                  </li>
                  <li>
                    reiciendis ad enim odit nostrum, tempore doloremque ex neque
                    perferendis excepturi.
                  </li>
                </ul>
                <br />
                <br />
                <Button className='btn btn-dark'>Choose Plan</Button>
              </Container>
              <br />
            </Card>
            <br />
            <br />
            <br />
            <br />
          </Col>
          <Col xs={12} md={4}>
            <Card className='Card'>
              <br />
              <Container className='text-center text-white'>
                <h2>
                  <strong className='text-dark'>$10.00</strong>
                </h2>
                <p>/month</p>
                <h4>Plus</h4>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li>
                    consectetur adipisicing elit. Officia quam molestiae porro
                  </li>
                  <li>
                    reiciendis ad enim odit nostrum, tempore doloremque ex neque
                    perferendis excepturi.
                  </li>
                </ul>
                <br />
                <br />
                <Button className='btn btn-dark'>Choose Plan</Button>
              </Container>
              <br />
            </Card>
            <br />
            <br />
            <br />
            <br />
          </Col>
          <Col xs={12} md={4}>
            <Card className='Card'>
              <br />
              <Container className='text-center text-white'>
                <h2>
                  <strong className='text-dark'>$15.00</strong>
                </h2>
                <p>/month</p>
                <h4>Pro</h4>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li>
                    consectetur adipisicing elit. Officia quam molestiae porro
                  </li>
                  <li>
                    reiciendis ad enim odit nostrum, tempore doloremque ex neque
                    perferendis excepturi.
                  </li>
                </ul>
                <br />
                <br />
                <Button className='btn btn-dark'>Choose Plan</Button>
              </Container>
              <br />
            </Card>
            <br />
            <br />
            <br />
            <br />
          </Col>{' '}
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  )
}
