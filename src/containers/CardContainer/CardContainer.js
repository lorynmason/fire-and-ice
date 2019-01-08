import React from 'react';
import { connect } from 'react-redux';
import { Card } from '../../components/Card/Card'
import { Loader } from '../../components/Loader/Loader';

export const CardContainer = ({ house, isLoading }) => {

  const cards = house.map( item => {
    return <Card item={item}/>
  })

  if(isLoading) {
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

export const mapStateToProps = state => ({
  house: state.house,
  isLoading: state.isLoading
})

export default connect(mapStateToProps)(CardContainer);