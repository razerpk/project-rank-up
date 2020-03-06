import React from 'react'

import { connect } from 'react-redux'
import { spendUnusedAttributePoint } from '../../reducers/userStatsReducer'
import { updateMissionRewards } from '../../reducers/missionsReducer'
import {
  Button,
} from '@material-ui/core'

const UserStatsTable = (props) => {
  if (!props.userStats){
    return null
  }

  const handleAttributeChange = (statName) => {

    if (props.userStats.unusedAttrPoins === 0) {
      console.log('not enough unused attribute points')
      return
    }

    props.spendUnusedAttributePoint(statName)
    props.updateMissionRewards(statName)
  }

  const showAddStatBtn = () => {
    if (props.userStats.unusedAttrPoints < 1) {
      return 'none'
    }
    return 'inline-block'
  }


  return (
    <div>
      <div className=''>
        <div><b>Stats</b></div>
      </div>

      {/*stat[0] is key, stat[1] is value*/}
      {Object.entries(props.userStats).map((stat) => {
        if(stat[0].length !== 3) return null// quick fix to hide rest of user info
        return (
          <div key={stat[0]}>
            <div className=''>
              {stat[0]}
            </div>
            <div className=''>
              {stat[1]}
              <Button
                style={{ display: showAddStatBtn() }}
                onClick={() => handleAttributeChange(stat[0])}
              >
                +
              </Button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userStats: state.userStats,
  }
}

const mapDispatchToProps = {
  spendUnusedAttributePoint,
  updateMissionRewards,
}
const ConnectedUserStatsTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserStatsTable)

export default ConnectedUserStatsTable