// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

export default async function handler(req, res) {
  const data = await axios({
    method: 'get',
    url: 'https://betback-184f1d538cbf.herokuapp.com/get_all_active_players',
    // responseType: 'stream',
  }).then((data1) => {
    const response = { data: data1 }
    res.status(200)
    // console.log(response)
    res.send(response)
  })
}
