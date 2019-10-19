import React from 'react'
import { Grid, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addStat } from '../reducers/userStatsReducer'
import { updateMissionRewards } from '../reducers/missionsReducer'

const UserStatsTable = (props) => {
  if (!props.userStats){
    return null
  }

  const handleAttributeChange = (statName) => {

    /*
    if (props.userStats.unusedAttrPoins === 0) {
      console.log('not enough unused attribute points')
      return
    }
    */
    props.addStat(statName)
    props.updateMissionRewards(statName)
  }

  return (
    <Grid celled>
      <Grid.Row>
        <Grid.Column><b>Stats</b></Grid.Column>
      </Grid.Row>

      {/*stat[0] is key, stat[1] is value*/}
      {Object.entries(props.userStats).map((stat) => {
        if(stat[0].length !== 3) return null// quick fix to hide rest of user info
        return (
          <Grid.Row key={stat[0]}>
            <Grid.Column mobile={8} tablet={8} computer={6}>
              {stat[0]}
            </Grid.Column>
            <Grid.Column mobile={8} tablet={8} computer={10}>
              {stat[1]}
              <Button circular icon='plus' size='mini' onClick={() => handleAttributeChange(stat[0])}/>
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
  }
}

const mapDispatchToProps = {
  addStat,
  updateMissionRewards,
}
const ConnectedUserStatsTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserStatsTable)

export default ConnectedUserStatsTable