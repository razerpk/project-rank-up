import React from 'react'

import { connect } from 'react-redux'
import { missionXpAndStamina } from '../../reducers/userStatsReducer'
import { addResources } from '../../reducers/resourcesReducer'
import {
  Button,
  Tooltip,
} from '@material-ui/core'

const Missions = (props) => {
  if (!props.missions) {
    return null
  }

  const handleMissionClick = (missionName) => {
    const mission = { ...props.missions[missionName] }
    // eslint-disable-next-line no-unused-vars
    const { xp, ...resourceRewards } = mission.rewards

    if (props.userStats.stamina.value < mission.stamCost) {
      console.log(`not enough stamina, stamina: ${props.userStats.stamina.value}`)
      return
    }

    props.missionXpAndStamina(mission)
    props.addResources(resourceRewards)
  }

  return (
    <div>
      <div className=''>
        <div className=''>
          <Tooltip disableHoverListener  title='Number inside brackets is stamina cost'>
            <b>Missions</b>
          </Tooltip>
        </div>
        <div>Rewards</div>
      </div>

      {/*stat[0] is key, stat[1] is value*/}
      {Object.entries(props.missions).map((mission) => {
        return (
          <div key={mission[0]}>
            <div className=''>
              <Tooltip
                title={`MISSION INFO HERE ${mission[1].description}`}
              >
                {
                  <Button onClick={() => handleMissionClick(mission[0])}>
                    {`${mission[0]} (${mission[1].stamCost})`}
                  </Button>
                }
              </Tooltip>
            </div>
            <div>
              {mission[1].rewards.gold.value}g {mission[1].rewards.xp.value}xp
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
    missions: state.missions,
    resources: state.resources,
  }
}

const mapDispatchToProps = {
  missionXpAndStamina,
  addResources,
}

const ConnectedMissions = connect(
  mapStateToProps,
  mapDispatchToProps
)(Missions)

export default ConnectedMissions