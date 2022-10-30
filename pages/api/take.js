import { supabaseClient } from '../../lib/useSupabase';


export default async function handler(
  req,
  res
) {


  if (req.method === 'POST') {
    const { currentPlayer, payToPlayer, nextPlayer } = JSON.parse(req.body);

    await supabaseClient.from('players').update({ money: currentPlayer.money }).eq("id", currentPlayer.id)
  }

  // return res.status(400).json({
  //   message: 'Unsupported Request'
  // });
}

