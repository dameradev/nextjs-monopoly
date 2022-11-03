import { supabaseClient } from '../../lib/useSupabase';


export default async function handler(
  req,
  res
) {


  if (req.method === 'POST') {
    const { currentPlayer, payToPlayer, nextPlayer, priceF } = JSON.parse(req.body);

    await supabaseClient.from('players').update({ money: currentPlayer?.money - price }).eq("id", currentPlayer.id)
    if (payToPlayer) await supabaseClient.from('players').update({ money: payToPlayer.money + price }).eq("id", payToPlayer.id) 
  }

  return res.status(400).json({
    message: 'Unsupported Request'
  });
}

