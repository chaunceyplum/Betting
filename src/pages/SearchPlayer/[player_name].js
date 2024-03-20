import Footer from '@/components/Footer'
import MyNav from '@/components/MyNav'
import axios from 'axios'
import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'

export async function getStaticPaths() {
  const data = await axios({
    method: 'get',
    url: 'https://betback-184f1d538cbf.herokuapp.com/get_all_active_players',
    // responseType: 'stream',
  })
  //const players = String(data.data)
  const results = data.data.data
  const allplayers = []

  for (var x in results) {
    const name = results[x].player_name
    const param = { params: { player_name: name } }
    allplayers.push(param)
  }

  return {
    paths: allplayers,
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  // console.log(params)
  const url = `https://betback-184f1d538cbf.herokuapp.com/get_player/${params.player_name}`
  const data = await axios({
    method: 'get',
    url: url,
    // responseType: 'stream',
  })
  //const player = JSON.stringify(data.data)

  const player = data.data.results[0]

  // console.log(data.data.data)
  // console.log()
  console.log(player)

  return {
    props: {
      player,
    },
  }
}

const SearchPlayer = ({ player }) => {
  // const Results = player.results[0]
  // console.log(Results)
  const points = (player) => {
    return (
      <div>
        <span>
          <h2>player name: </h2>
          {/* <h2>{player.player_name}</h2> */}
        </span>
        <span>
          {/* <h2>player Year: </h2>
          <h2>{player.season}</h2> */}
        </span>
      </div>
    )
  }
  const secondary = (player) => {
    return (
      <div>
        <Container>
          <Row>
            {/* <Col>PTS: {player.PTS}</Col>
            <Col>AST: {player.AST}</Col>
          </Row>
          <Row>
            <Col>REB: {player.TRB}</Col>
            <Col>STL: {player.STL}</Col> */}
          </Row>
        </Container>
      </div>
    )
  }
  const tertiary = (player) => {
    return (
      <div>
        <Container>
          <Row>
            {/* <Col>FGA: {player.field_attempts}</Col>
            <Col>FGM: {player.field_goals}</Col>
            <Col>FGM: {player.field_percent}</Col>
          </Row>
          <Row>
            <Col>3FGA: {player.three_attempts}</Col>
            <Col>3FGM: {player.three_fg}</Col>
            <Col>3FGM: {player.three_percent}</Col> */}
          </Row>
        </Container>
      </div>
    )
  }

  const quaternary = (player) => {
    return (
      <div>
        <Container>
          <Row>
            {/* <Col>AGE: {player.age}</Col>
            <Col>GAMES PLAYED: {player.games_played}</Col>
            <Col>GAMES STARTED: {player.games_started}</Col> */}
          </Row>
          {/* <Row>
            <Col>3FGA: {player.three_attempts}</Col>
            <Col>3FGM: {player.three_fg}</Col>
            <Col>3FGM: {player.three_percent}</Col>
          </Row> */}
        </Container>
      </div>
    )
  }
  // console.log(typeof points)
  // const name = Results.player_name
  return (
    <div>
      <MyNav />
      <div style={{ height: '' }}>
        <Container style={{ height: '100%' }}>
          <Row style={{ height: '100%' }}>
            <Col style={{ height: '100%' }}>
              <Card style={{ height: '100%' }}>
                <CardBody style={{ height: '100%' }}>{points(player)}</CardBody>
              </Card>
            </Col>
            <Col style={{ height: '100%' }}>
              <Card style={{ height: '100%' }}>
                <CardBody style={{ height: '100%' }}>
                  {secondary(player)}
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row style={{ height: '100%' }}>
            <Col style={{ height: '100%' }}>
              <Card style={{ height: '100%' }}>
                <CardBody style={{ height: '100%' }}>
                  {tertiary(player)}
                </CardBody>
              </Card>
            </Col>
            <Col style={{ height: '100%' }}>
              <Card style={{ height: '100%' }}>
                <CardBody style={{ height: '100%' }}>
                  {quaternary(player)}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

// export async function generateStaticParams() {
//   const players = await fetch(
//     'https://betback-184f1d538cbf.herokuapp.com/get_all_active_players'
//   ).then((res) => res.json())

//   const posts = players.data.data.data
//   return posts.map((post) => ({
//     player_name: post.player_name,
//   }))
// }

export default SearchPlayer
