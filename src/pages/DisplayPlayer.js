import React from 'react'
import Footer from '@/components/Footer'
import MyNav from '@/components/MyNav'
import axios from 'axios'
import { useState } from 'react'
export default function Players({ players }) {
  const [search, setSearch] = useState('')
  return (
    <div>
      <MyNav />
      <div>
        <div>SearchPlayer</div>
        <input
          type='text'
          onChange={(event) => setSearch(event.target.value)}
          className='text-white'
          placeholder='Search by name'
        />
        {players
          .filter((player) => {
            // console.log(cur)
            if (search == '') {
              return player
            } else if (
              player.player_name.toLowerCase().includes(search.toLowerCase()) ||
              player.team.toLowerCase().includes(search.toLowerCase())
            ) {
              return player
            }
          })

          .map((player) => {
            return (
              <div key={player.id}>
                <div style={{ color: 'white', backgroundColor: 'gray' }}>
                  Id: {player.id}, Name: {player.player_name}, age: {player.age}
                  ,games: {player.games}, games_started: {player.games_started}
                  ,minutes_played: {player.minutes_played}, field_goals:{' '}
                  {player.field_goals},field_attempts: {player.field_attempts},
                  field_percent: {player.field_percent},three_fg:{' '}
                  {player.three_fg}
                  ,three_attempts: {player.three_attempts}, three_percent:{' '}
                  {player.three_percent},two_fg: {player.two_fg}, two_attempts:{' '}
                  {player.two_attempts},two_percent: {player.two_percent},
                  effect_fg_percent: {player.effect_fg_percent},ft: {player.ft}
                  ,fta: {player.fta}, ft_percent: {player.ft_percent},ORB:{' '}
                  {player.ORB}
                  ,DRB: {player.DRB},TRB: {player.TRB}, AST: {player.AST},STL:{' '}
                  {player.STL},BLK: {player.BLK},TOV: {player.TOV},PF:{' '}
                  {player.PF}, PTS: {player.PTS},TEAM: {player.team},Season:{' '}
                  {player.season}
                </div>
                <br />
              </div>
            )
          })}
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
