import React, { useState, /*useEffect*/ } from 'react'
import { Grid, Progress } from 'semantic-ui-react'
import useInterval from './hooks/useInterval'
import TopMenu from './components/TopMenu'
import BuildingTable from './components/BuildingTable'
import UserStatsTable from './components/UserStatsTable'
import Missions from './components/Missions'
import { connect } from 'react-redux'
import { updateStats } from './reducers/userStatsReducer'
import { updateResources } from './reducers/resourcesReducer'
import { initializeBuildings } from './reducers/buildingsReducer'

const App = (props) => {

  const [seconds, setSeconds] = useState(0)

  // Main game loop
  useInterval(() => {
    setSeconds(seconds + 1)
    // Your custom logic here
    if (props.userStats.stamina < props.userStats.maxStamina) {
      props.updateStats({ ...props.userStats, stamina: props.userStats.stamina + 1 })
    }
    props.updateResources()
  }, 1000)

  // fetch saved gamedata on page load
  /*useEffect(() => {
    const gameData = JSON.parse(window.localStorage.getItem('gameData'))
    if (gameData !== null){
      setIsLoading(true)
      props.initializeBuildings(gameData.buildings)
      props.initializeResources(gameData.resources)
      props.initializeUserStats(gameData.userStats)
      props.initializeMissions(gameData.missions)
      setIsLoading(false)
    }
  }, []) // eslint-disable-line*/

  /* Broken for now, enable later -> if saves and page is reloaded the page crashes
  // Save the game every 5 min
  useEffect(() => {
    const interval = setInterval(() => {
      const resources = props.userStats
      const userStats = props.resources
      const buildings = props.buildings
      window.localStorage.setItem('gameData', JSON.stringify({
        userStats,
        resources,
        buildings
      }))
    }, 5 * 60 * 1000) // 5 min
    return () => clearInterval(interval)
  }, []) // eslint-disable-line
  */

  const saveData = () => {
    const resources = props.userStats
    const userStats = props.resources
    const buildings = props.buildings
    window.localStorage.setItem('gameData', JSON.stringify({
      userStats,
      resources,
      buildings
    }))
  }

  return (
    <div>
      <TopMenu saveData={saveData} seconds={seconds} />
      <Grid>
        <Grid.Row colums={3}>
          {/* move to useStatsTable with rest of the userstats? */}
          <Grid.Column width={2}>
            <div>
              <Progress
                value={props.userStats.stamina}
                total={props.userStats.maxStamina}
                progress='ratio'
                active
                color='green'
                label='Stamina'
              />
              gold {props.resources.gold.curVal} {props.resources.gold.perTick}/s<br />
              silver {props.resources.silver.curVal} {props.resources.silver.perTick}/s<br />
              xp {props.userStats.xp} <br />
            </div>
            <UserStatsTable/>
          </Grid.Column>

          <Grid.Column width={5}>
            <BuildingTable seconds={seconds}/>
          </Grid.Column>
          <Grid.Column width={5}>
            <Missions />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}


const mapStateToProps = state => {
  return {
    userStats: state.userStats,
    resources: state.resources,
    buildings: state.buildings,
  }
}

export default connect(
  mapStateToProps, { updateStats, updateResources, initializeBuildings }
)(App)
