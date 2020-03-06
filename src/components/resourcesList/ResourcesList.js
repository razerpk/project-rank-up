import React from 'react'
import { connect } from 'react-redux'
import './ResourcesList.scss'

const ResourcesList = (props) => {

  return (
    <div className='resources-content'>
      {/**move to own separate component */}
      <div className='stamina-bar'>
        {/*<Progress id='bar'
            percent={props.userStats.xp/props.userStats.xpToLevel*100}
            color='purple'
            label={`Xp: ${props.userStats.xp}/${props.userStats.xpToLevel}`}
          />*/}
      </div>

      <div className='currency-item'>
        <div>gold {props.resources.gold.curVal}</div>
        <div>{props.resources.gold.perTick}/s</div>
      </div>
      <div className='currency-item'>
        <div>silver {props.resources.silver.curVal}</div>
        <div>{props.resources.silver.perTick}/s</div>
      </div>
      <div className='currency-item'>
        <div>elixir {props.resources.elixir.curVal}</div>
        <div>{props.resources.elixir.perTick}/s</div>
      </div>

      <div className='progress-bar'>
        {/*<Progress
            percent={props.userStats.stamina.value/props.userStats.stamina.max*100}
            active
            color='green'
            label={`Stamina: ${props.userStats.stamina.value}/${props.userStats.stamina.max}`}
          />*/}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    resources: state.resources,
  }
}

const ConnectedResourcesList = connect(
  mapStateToProps,
)(ResourcesList)

export default ConnectedResourcesList