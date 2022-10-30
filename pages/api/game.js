import { supabaseClient } from '../../lib/useSupabase';


export default async function handler(
  req,
  res
) {

  // const response = await supabaseClient
  //     .from('posts')


  // .filter('name', 'eq', "Dame");

  // console.log(response)

  // console.log(response)
  if (req.method === 'GET') {
    //   // Query the pages table in the database where slug equals the request params slug.
    //   const response = await supabaseClient
    //     .from('players')
    const response = await supabaseClient
      .from('players')
      .select()

    //   // console.log(response)
    if (response?.data) {
      return res.status(200).json({
        data: response.data
      });
    }
  }


  if (req.method === 'POST') {
    const { currentPlayer, payToPlayer, nextPlayer } = JSON.parse(req.body);

    // console.log(currentPlayer)
    // await supabase
    // .from('countries')
    // .update({ name: 'Australia' })
    // .eq('id', 1)
    await supabaseClient.from('players').update({ isOnTurn: true }).eq("id", nextPlayer.id)
    const res = await supabaseClient.from('players').update({ money: currentPlayer.money, isOnTurn: false }).eq("id", currentPlayer.id)
    await supabaseClient.from('players').update({ money: payToPlayer.money }).eq("id", payToPlayer.id)
    console.log(res)

  }

  return res.status(400).json({
    message: 'Unsupported Request'
  });
}
