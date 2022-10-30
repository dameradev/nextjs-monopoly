import React, { useEffect, useState } from "react"
import useSWR from 'swr'
import cards from '../cards';
import { supabaseClient } from '../lib/useSupabase';
export async function fetcher(
  input,
  init
) {
  const res = await fetch(input, init);
  return res.json();
}


export default ({ }) => {

  const [players, setPlayers] = useState([
    { name: "Dame", money: 1500, isOnTurn: true, customId: 1, payToPlayer: false },
    { name: "Viko", money: 1500, isOnTurn: false, customId: 2, payToPlayer: false },
    { name: "Goki", money: 1500, isOnTurn: false, customId: 3, payToPlayer: false },
    { name: "Gjose", money: 1500, isOnTurn: false, customId: 4, payToPlayer: false },
    { name: "Nela", money: 1500, isOnTurn: false, customId: 5, payToPlayer: false },
    { name: "Denicija", money: 1500, isOnTurn: false, customId: 6, payToPlayer: false },
  ])

  const pay = (player, amount) => {
    const newPlayers = [...players]
    const currentPlayer = newPlayers.find(player => player.isOnTurn);
    newPlayers[newPlayers.indexOf(player)].money += +amount;
    newPlayers[newPlayers.indexOf(currentPlayer)].money -= +amount;


    setPlayers(newPlayers)
  }

  const [amount, setAmount] = useState(0)

  const [timer, setTimer] = useState(10000)

  const { data } = useSWR(`/api/game`, fetcher, {
    refreshInterval: timer
  });

  useEffect(() => {
    if (data) {
      setPlayers(data.data)
    }
  }, [data]);


  return <div className='flex flex-col items-center' onClick={() => setTimer(10000)}>
    <h1 className='p-2'> Players</h1>
    <button
      onClick={() => {
        // set all players money to 1500
        const newPlayers = [...players]
        newPlayers.forEach(player => player.money = 1500)
        setPlayers(newPlayers)
      }}
    >Reset game</button>
    {/* <p onClick={()=>{setPlayers()}}>Bank</p> */}
    <button
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4'
      onClick={() => {

        const newPlayers = [...players]
        const currentPlayer = newPlayers.find(player => player.isOnTurn);
        const payToPlayer = newPlayers.find(player => player.payToPlayer);

        let nextPlayer = newPlayers.find(player => player.customId === currentPlayer.customId + 1)
        if (!nextPlayer) {
          nextPlayer = newPlayers[0]
        }
        fetch('/api/game', {
          method: 'POST',
          body: JSON.stringify({
            currentPlayer,
            payToPlayer,
            nextPlayer
          }),
        })



        newPlayers[newPlayers.indexOf(currentPlayer)].isOnTurn = false
        newPlayers[newPlayers.indexOf(nextPlayer)].isOnTurn = true;
        setPlayers(newPlayers)



      }}>
      NEXT PLAYER
    </button>


    <div>
      <input
        className='bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4 max-w-[10rem]  '
        type="number"
        placeholder="Amount"
        onChange={(e) => {
          setAmount(e.target.value)
        }}
        value={amount}
      />
      <button
        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
        onClick={() => {
          const payToPlayer = players.find(player => player.payToPlayer);
          pay(payToPlayer, amount)
        }}>Pay</button>
    </div>

    <ul className='grid grid-cols-2 pt-4'>
      {
        players.sort((a, b) => b.id > a.id ? -1 : 1).map(player => (
          <li className={`p-8
          text-white
          cursor-pointer
            ${player.isOnTurn ? 'bg-green-500' : 'bg-gray-500'}
            ${player.payToPlayer ? 'bg-red-500' : ''}
          `} key={player.name}
            onClick={() => {
              const newPlayers = [...players]

              const currentPayToPLayer = newPlayers.find(player => player.payToPlayer);
              if (currentPayToPLayer) {
                newPlayers[newPlayers.indexOf(currentPayToPLayer)].payToPlayer = false
              }

              newPlayers[newPlayers.indexOf(player)].payToPlayer = true;
              setPlayers(newPlayers)
            }}
          >
            <h2>{player.name}</h2>
            <p>Money: {player.money}</p>
            {/* <p>Is on turn: {player.isOnTurn ? "Yes" : "No"}</p>
            <p>Is pay on: {player.payToPlayer ? "Yes" : "No"}</p> */}
          </li>
        ))
      }
    </ul>

    <ul className='grid grid-cols-2'>
      {cards.sort((a, b) => b.posistion > a.posistion ? -1 : 1).map(
        (card, index) => (
          <li key={index} className={`px-2 mt-10 w-full flex flex-col gap-2   `}>
            <h2 className={`  text-${card.color}-100`}>{card.name}</h2>

            <p>Price: {card.price}</p>
            {card.rent && <p>Rent: {card.rent}</p>}
            {card.multpliedrent && <>
              Revenue:
              <ul className='flex flex-col'> {card.multpliedrent?.map(item => <li>{item}</li>)}</ul>
            </>}
            {card.housecost && <p>House: {card.housecost}</p>}

          </li>

        ))}
    </ul>

  </div>


}
