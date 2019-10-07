import React, { useState, /*useEffect*/ } from 'react'
import { Container, Menu, Segment } from 'semantic-ui-react'
import useInterval from './hooks/useInterval'
import BuildingTable from './components/BuildingTable'
import UserStatsTable from './components/UserStatsTable'
import Missions from './components/Missions'
import { connect } from 'react-redux'
import { updateStats } from './reducers/userStatsReducer'

const App = (props) => {

  const [seconds, setSeconds] = useState(0)

  // Main game loop
  useInterval(() => {
    // Your custom logic here
    setSeconds(seconds + 1)
    if (props.userStats.stamina < props.userStats.maxStamina) {
      props.updateStats({ ...props.userStats, stamina: props.userStats.stamina + 1 })
    }

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
            gold {props.resources.gold} <br />
            xp {props.userStats.xp}
          </div>

          <BuildingTable/>
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
    resources: state.resources
  }
}

export default connect(
  mapStateToProps, { updateStats }
)(App)
