import React from 'react'
import Footer from '@/components/Footer'
import MyNav from '@/components/MyNav'
import axios from 'axios'
import { useState } from 'react'

import { Suspense } from 'react'
import { Card, Container } from 'react-bootstrap'

export default function Players({ players }) {
  const [search, setSearch] = useState('')
  return (
    <div>
      <MyNav />
      <div>
        <Container>
          <div>SearchPlayer</div>
          <input
            type='text'
            onChange={(event) => setSearch(event.target.value)}
            className='text-white'
            placeholder='Search by name'
          />
        </Container>
        <br />
        <Suspense fallback={<p>Loading players...</p>}>
          {players
            .filter((player) => {
              // console.log(cur)
              if (search == '') {
                return player
              } else if (
                player.player_name
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
                player.team.toLowerCase().includes(search.toLowerCase())
              ) {
                return player
              }
            })

            .map((player) => {
              return (
                <div key={player.id}>
                  <Container>
                    <Card>
                      <div style={{ color: 'white', backgroundColor: 'gray' }}>
                        <Container>
                          Id: {player.id}, <br />
                          Name: {player.player_name},<br /> age: {player.age}
                          ,games: {player.games},<br /> games_started:
                          {player.games_started}
                          , <br />
                          minutes_played: {player.minutes_played}, <br />
                          field_goals: {player.field_goals},<br />
                          field_attempts: {player.field_attempts},<br />
                          field_percent: {player.field_percent},<br />
                          three_fg: {player.three_fg}
                          ,<br />
                          three_attempts: {player.three_attempts},<br />
                          three_percent: {player.three_percent},<br />
                          two_fg: {player.two_fg},<br /> two_attempts:{' '}
                          {player.two_attempts}
                          ,<br />
                          two_percent: {player.two_percent},<br />{' '}
                          effect_fg_percent: {player.effect_fg_percent},<br />
                          ft: {player.ft}
                          ,<br />
                          fta: {player.fta},<br /> ft_percent:{' '}
                          {player.ft_percent}
                          ,<br />
                          ORB: {player.ORB}
                          ,<br />
                          DRB: {player.DRB},<br />
                          TRB: {player.TRB}, <br />
                          AST: {player.AST}
                          ,<br />
                          STL: {player.STL},<br />
                          BLK: {player.BLK},<br />
                          TOV: {player.TOV}
                          ,<br />
                          PF: {player.PF}, <br />
                          PTS: {player.PTS},<br />
                          TEAM: {player.team}
                          ,Season: {player.season}
                        </Container>
                      </div>
                    </Card>
                  </Container>
                  <br />
                </div>
              )
            })}
        </Suspense>
      </div>
      {/* {players.map((player) => {
        return (
          <div key={player.id}>
            <div style={{ color: 'white', backgroundColor: 'gray' }}>
              Id: {player.id}, Name: {player.player_name}, age: {player.age}
              ,games: {player.games}, games_started: {player.games_started}
              ,minutes_played: {player.minutes_played}, field_goals:{' '}
              {player.field_goals},field_attempts: {player.field_attempts},
              field_percent: {player.field_percent},three_fg: {player.three_fg}
              ,three_attempts: {player.three_attempts}, three_percent:{' '}
              {player.three_percent},two_fg: {player.two_fg}, two_attempts:{' '}
              {player.two_attempts},two_percent: {player.two_percent},
              effect_fg_percent: {player.effect_fg_percent},ft: {player.ft},fta:{' '}
              {player.fta}, ft_percent: {player.ft_percent},ORB: {player.ORB}
              ,DRB: {player.DRB},TRB: {player.TRB}, AST: {player.AST},STL:{' '}
              {player.STL},BLK: {player.BLK},TOV: {player.TOV},PF: {player.PF},
              PTS: {player.PTS},TEAM: {player.team},Season: {player.season}
            </div>
            <br />
          </div>
        )
      })} */}
      {/* {players} */}
      {/* {players} */}
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const data = await axios({
    method: 'get',
    url: 'https://betback-184f1d538cbf.herokuapp.com/get_all_active_players',
    // responseType: 'stream',
  })
  //const players = String(data.data)

  const players = data.data.data

  // console.log(data.data.data)
  // console.log()
  // console.log(players)

  return {
    props: {
      players,
    },
  }
}
