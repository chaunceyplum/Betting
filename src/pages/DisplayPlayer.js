import axios from 'axios'
export default function players({ players }) {
  return (
    <div>
      {/* {players.data.map((key, player) => {
        ;<div style={{ color: 'white' }} key={key}>
          {player.first_name}
          {console.log(player)}
        </div>
      })} */}
      {players}
    </div>
  )
}

export async function getStaticProps() {
  const data = await axios({
    method: 'get',
    url: 'https://nba-stats-db.herokuapp.com/api/playerdata/season/2023',
    // responseType: 'stream',
  })

  const players = JSON.stringify(data.data)
  console.log(players)

  return {
    props: {
      players,
    },
  }
}
