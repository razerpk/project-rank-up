import React from 'react'
import { connect } from 'react-redux'
import { LinearProgress } from '@material-ui/core'
import './ResourcesList.scss'

const ResourcesList = ({ resources, userStats }) => {

  return (
    <div className='resources-content'>
      {/**move to own separate component */}
      <div className='stamina-bar'>
        {<LinearProgress id='bar'
          variant='determinate'
          color='secondary'
          value={userStats.xp / userStats.xpToLevel * 100}
          label={`Xp: ${userStats.xp}/${userStats.xpToLevel}`}
        />}
      </div>

      <div className='currency-item'>
        <div>gold {resources.gold.curVal}</div>
        <div>{resources.gold.perTick}/s</div>
      </div>
      <div className='currency-item'>
        <div>silver {resources.silver.curVal}</div>
        <div>{resources.silver.perTick}/s</div>
      </div>
      <div className='currency-item'>
        <div>elixir {resources.elixir.curVal}</div>
        <div>{resources.elixir.perTick}/s</div>
      </div>

      <div className='progress-bar'>
        {<LinearProgress
          variant='determinate'
          color='primary'
          value={userStats.stamina.value / userStats.stamina.max * 100}
          label={`Stamina: ${userStats.stamina.value}/${userStats.stamina.max}`}
        />}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    resources: state.resources,
    userStats: state.userStats,
  }
}

const ConnectedResourcesList = connect(
  mapStateToProps,
)(ResourcesList)

export default ConnectedResourcesList