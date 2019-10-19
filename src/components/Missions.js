import React from 'react'
import { Grid, Button, Popup } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { updateStats } from '../reducers/userStatsReducer'
import { updateResourceValues } from '../reducers/resourcesReducer'

const Missions = (props) => {
  if (!props.missions){
    return null
  }

  const handleMissionClick = (missionName) => {
    const mission = { ...props.missions[missionName] }

    if (props.userStats.stamina.value < mission.stamCost) {
      console.log(`not enough stamina, stamina: ${props.userStats.stamina.value}`)
      return
    }

    // loses getter function from original object
    let updatedStats = {
      ...props.userStats,
      stamina: {
        ...props.userStats.stamina,
        value: props.userStats.stamina.value - mission.stamCost,
      },
      xp: props.userStats.xp + mission.reward.xp.value,
    }

    // check if enough xp to level up
    if (updatedStats.xp >= updatedStats.xpToLevel) {
      updatedStats = {
        ...updatedStats,
        level: updatedStats.level + 1,
        unusedAttrPoins: updatedStats.unusedAttrPoins + 3,
        xp: updatedStats.xp - updatedStats.xpToLevel,
        get xpToLevel() {
          return Math.round(100 * this.lvUpMulti ** this.level)
        },
      }
    }
    // basic functionality, needs to be modified to take modifiers into account
    props.updateStats(updatedStats)
    props.updateResourceValues(mission.reward.resources, 'increment')
  }

  return (
    <Grid celled>
      <Grid.Row>
        <Grid.Column width={6}>
          <Popup
            content='Number inside brackets is stamina cost'
            trigger={<b>Tasks</b>}
          />
        </Grid.Column>
        <Grid.Column>Rewards</Grid.Column>
      </Grid.Row>

      {/*stat[0] is key, stat[1] is value*/}
      {Object.entries(props.missions).map((mission) => {
        return (
          <Grid.Row key={mission[0]}>
            <Grid.Column width={6}>
              <Popup
                content={`MISSION INFO HERE ${mission[1].description}`}
                trigger={
                  <Button onClick={() => handleMissionClick(mission[0])}>
                    {`${mission[0]} (${mission[1].stamCost})`}
                  </Button>
                }
                on='hover'
              />
            </Grid.Column>
            <Grid.Column width={1}>
              {mission[1].reward.resources.gold.value}g {mission[1].reward.xp.value}xp
            </Grid.Column>
          </Grid.Row>
        )
      })}
    </Grid>
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
  updateStats,
  updateResourceValues,
}

const ConnectedMissions = connect(
  mapStateToProps,
  mapDispatchToProps
)(Missions)

export default ConnectedMissions