import { supabaseClient } from '../../lib/useSupabase';


export default async function handler(
  req,
  res
) {


  if (req.method === 'POST') {
    
    const response = await supabaseClient
    .from('players')
      .select()
    response.data.forEach(async player => {
      await supabaseClient.from('players').update({ money: 1500 }).eq("id", player.id)
    })


    // await supabaseClient.from('players').update({ money: currentPlayer.money }).eq("id", currentPlayer.id)
    // await supabaseClient.from('players').update({ money: payToPlayer.money }).eq("id", payToPlayer.id)
  }

  // return res.status(400).json({
  //   message: 'Unsupported Request'
  // });
}

