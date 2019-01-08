import React from 'react';
import { connect } from 'react-redux';
import { Card } from '../../components/Card/Card'
import { Loader } from '../../components/Loader/Loader';

export const CardContainer = ({ house }) => {

  const cards = house.map( item => {
    return <Card item={item}/>
  })

  if(!house.length) {
    return (
    <div className="Container">
      <Loader />
    </div>)
  }

  return (
    <div className="card-container">
      {cards}
    </div>
  )
}

const mapStateToProps = state => ({
  house: state.house
})

export default connect(mapStateToProps)(CardContainer);