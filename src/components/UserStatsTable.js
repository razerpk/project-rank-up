import React from 'react'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'

const UserStatsTable = (props) => {
  if (!props.userStats){
    return null
  }

  return (
    <Grid celled>
      <Grid.Row>
        <Grid.Column><b>Stats</b></Grid.Column>
      </Grid.Row>

      {/*stat[0] is key, stat[1] is value*/}
      {Object.entries(props.userStats).map((stat) => {
        if(stat[0].length !== 3) return // quick fix to hide rest of user info
        return (
          <Grid.Row key={stat[0]}>
            <Grid.Column width={7}>{stat[0]}</Grid.Column>
            <Grid.Column width={1}>{stat[1]}</Grid.Column>
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

const ConnectedUserStatsTable = connect(
  mapStateToProps,
)(UserStatsTable)

export default ConnectedUserStatsTable