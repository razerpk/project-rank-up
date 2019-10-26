import React from 'react'
import { Grid, Button, Popup } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { missionXpAndStamina } from '../reducers/userStatsReducer'
import { addResources } from '../reducers/resourcesReducer'

const Missions = (props) => {
  if (!props.missions){
    return null
  }

  const handleMissionClick = (missionName) => {
    const mission = { ...props.missions[missionName] }
    const { xp, ...resourceRewards } = mission.rewards

    if (props.userStats.stamina.value < mission.stamCost) {
      console.log(`not enough stamina, stamina: ${props.userStats.stamina.value}`)
      return
    }

    props.missionXpAndStamina(mission)
    props.addResources(resourceRewards)
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
              {mission[1].rewards.gold.value}g {mission[1].rewards.xp.value}xp
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
  missionXpAndStamina,
  addResources,
}

const ConnectedMissions = connect(
  mapStateToProps,
  mapDispatchToProps
)(Missions)

export default ConnectedMissions