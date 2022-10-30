import { supabaseClient } from '../../lib/useSupabase';


export default async function handler(
  req,
  res
) {


  if (req.method === 'POST') {
    const { currentPlayer, card } = JSON.parse(req.body);

    const response = await supabaseClient
      .from('players')

      .select()
      .eq("id", currentPlayer.id)

    console.log(response.data[0].towns)
    const towns = response.data[0]?.towns ? response.data[0]?.towns.split(",") : []
    const findTown = towns.find(town => town === card)
    console.log(findTown)
    if (findTown) { 
      towns.splice(towns.indexOf(findTown), 1)
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

