import { supabaseClient } from '../../lib/useSupabase';


export default async function handler(
  req,
  res
) {


  if (req.method === 'POST') {
    const { currentPlayer, card, price } = JSON.parse(req.body);

    const response = await supabaseClient
      .from('players')

      .select()
      .eq("id", currentPlayer.id)

    const player = response.data[0]
    await supabaseClient.from('players').update({ money: player?.money - price }).eq("id", currentPlayer.id)
    const towns = response.data[0]?.towns ? response.data[0]?.towns.split(",") : []
    const findTown = towns.find(town => town === card)
    if (findTown) { 
      towns.splice(towns.indexOf(findTown), 1)
      await supabaseClient.from('players').update({ money: player?.money + price }).eq("id", currentPlayer.id)
    } else {

      towns.push(card)
    }
    // towns.push("dame")
    console.log(towns)
    
    // console.log()
    const res = await supabaseClient.from('players').update({ towns: towns.join(",") }).eq("id", currentPlayer.id)
    // console.log(res)
  }

  // return res.status(400).json({
  //   message: 'Unsupported Request'
  // });
}

