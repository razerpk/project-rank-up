import React, { useState, /*useEffect*/ } from 'react'
import useInterval from './hooks/useInterval'
import TopMenu from './components/topMenu/TopMenu'
import ContentTabs from './components/contentTabs/ContentTabs'
import ResourcesList from './components/resourcesList/ResourcesList'
import { connect } from 'react-redux'
import { updateStamina } from './reducers/userStatsReducer'
import { updateResources } from './reducers/resourcesReducer'
import { initializeBuildings } from './reducers/buildingsReducer'
import {
  Paper,
  //Progress,
} from '@material-ui/core'
import './App.scss'

const App = (props) => {
  const [seconds, setSeconds] = useState(0)

  // Main game loop
  useInterval(() => {
    setSeconds(seconds + 1)
    // Your custom logic here
    if (props.userStats.stamina.value < props.userStats.stamina.max) {
      props.updateStamina()
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
    <>
      <div className='body'>
        <Paper className='main-paper'>
          <TopMenu saveData={saveData} seconds={seconds} />
          <div className='main-view-row'>
            <div className='main-view-item'>
              <ResourcesList />
            </div>

            <div className='main-view-item'>
              <div className='main-view-item'>
                <ContentTabs />
              </div>
            </div>
          </div>

        </Paper>
      </div>
    </>
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
  mapStateToProps, { updateResources, initializeBuildings, updateStamina }
)(App)
