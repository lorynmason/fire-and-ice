import React from 'react'

export const Card = ({item}) => {
  return (
    <div className="card">
      <h1>{item.name}</h1>
      <p>Founded:{item.founded}</p>
      <p>Seats:{item.seats}</p>
      <p>Titles:{item.titles}</p>
      <p>Coat of Arms:{item.coatOfArms}</p>
      <p>Weapons: {item.ancestralWeapons}</p>
      <p>Words:{item.words}</p>
    </div>
  )
}