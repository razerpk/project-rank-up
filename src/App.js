import React, { useState, /*useEffect*/ } from 'react'
import { Container, Menu, Segment } from 'semantic-ui-react'
import useInterval from './hooks/useInterval'
import BuildingTable from './components/BuildingTable'
import UserStatsTable from './components/UserStatsTable'
import Missions from './components/Missions'
import { connect } from 'react-redux'
import { updateStats } from './reducers/userStatsReducer'
import { updateResources } from './reducers/resourcesReducer'

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

      setIsLoading(false)
    }
  }, []) // eslint-disable-line*/

  /* Broken for now, enable later -> if saves and page is reloaded the page crashes
  // Save the game every 5 min
  useEffect(() => {
    const interval = setInterval(() => {
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
    window.localStorage.setItem('gameData', JSON.stringify({
      ...props.userStats,
      ...props.resources,
      ...props.buildings
    }))
  }

  return (
    <div>
      <Container>
        {/* move menu to component */}
        <Menu inverted>
          <Menu.Item
            name='Project Rank Up'
          />
          <Menu.Item className='menu-right'
            name='save'
            onClick={() => saveData()}
          />
          <Menu.Item>
            playtime {seconds} s
          </Menu.Item>
        </Menu>

        <Segment>
          {/* move to useStatsTable with rest of the userstats? */}
          <div>
            stamina {props.userStats.stamina} / {props.userStats.maxStamina} <br />
            gold {props.resources.gold.curVal} <br />
            gold gain {props.resources.gold.perTick}<br />
            silver {props.resources.silver.curVal} <br />
            silver gain {props.resources.silver.perTick}<br />
            xp {props.userStats.xp} <br />
          </div>

          <BuildingTable seconds={seconds}/>
          <UserStatsTable/>
          <Missions/>
        </Segment>
      </Container>
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
  mapStateToProps, { updateStats, updateResources }
)(App)
