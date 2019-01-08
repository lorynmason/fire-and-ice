import React from 'react'

export const Card = ({item}) => {
  return (
    <div className="card">
      <h1>{item.name}</h1>
      <p>{item.founded}</p>
      <p>{item.seats}</p>
      <p>{item.titles}</p>
      <p>{item.coatOfArms}</p>
      <p>{item.ancestralWeapons}</p>
      <p>{item.words}</p>
    </div>
  )
}