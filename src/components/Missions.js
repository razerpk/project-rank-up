import React from 'react'
import { Grid, Button, Popup } from 'semantic-ui-react'
import { connect } from 'react-redux'

const Missions = (props) => {
  if (!props.missions){
    return null
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
                trigger={<Button>{`${mission[0]} (${mission[1].stamCost})`}</Button>}
              />
            </Grid.Column>
            <Grid.Column width={1}>
              {mission[1].reward.resources.gold}g {mission[1].reward.xp}xp
            </Grid.Column>
          </Grid.Row>
        )
      })}
    </Grid>
  )
}

const mapStateToProps = (state) => {
  return {
    missions: state.missions,
  }
}

const ConnectedMissions = connect(
  mapStateToProps,
)(Missions)

export default ConnectedMissions