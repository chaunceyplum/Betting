export default function players({ players }) {
  return (
    <ul>
      {players.map((player) => {
        ;<li>{player.first_name}</li>
      })}
    </ul>
  )
}

export async function getStaticProps() {
  const data = await axios({
    method: 'get',
    url: 'https://betback-184f1d538cbf.herokuapp.com/get_all_active_players',
    // responseType: 'stream',
  })
  const players = await data.json()
  // .then((data1) => {
  //   const response = { data: data1 }
  //   res.status(200)
  //   // console.log(response)
  //   res.send(response)
  // })

  return {
    props: {
      players,
    },
  }
}
