import Footer from '@/components/Footer'
import MyNav from '@/components/MyNav'
import axios from 'axios'
export default function players({ players }) {
  return (
    <div>
      <MyNav />
      {players.map((player) => {
        return (
          <div key={player.id}>
            <div style={{ color: 'white', backgroundColor: 'gray' }}>
              Name: {player.player_name}, age: {player.age},games:{' '}
              {player.games}, games_started: {player.games_started}
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
      })}
      {/* {players}  */}
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const data = await axios({
    method: 'get',
    url: 'https://nba-stats-db.herokuapp.com/api/playerdata/season/2023',
    // responseType: 'stream',
  })
  const res = JSON.stringify(data.data.results)
  const players = JSON.parse(res)
  // console.log(players)

  return {
    props: {
      players,
    },
  }
}
