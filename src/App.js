import React, { useState, useEffect } from 'react'
import { Container, Menu, Segment } from 'semantic-ui-react'
import useInterval from './hooks/useInterval'
import BuildingTable from './components/BuildingTable'
import UserStatsTable from './components/UserStatsTable'


// move to init folder all init objects
const initialialUserStats =  {
  con: 1,
  str: 1,
  dex: 1,
  int: 1,
  wil: 1,
  stamina: 50,
  maxStamina: 100,
  xp: 0,
}

const initialialResources = {
  gold: 215,
}

const initialialBuildings = {
  building1: { level: 0, costMulti: 1.15, lvUpMulti: 1.1 , produce: { gold: { baseValue: 1 } } },
  building2: { level: 0 },
  building3: { level: 0 },
  building4: { level: 0 },
}

const App = () => {

  const [userStats, setUserStats] = useState(initialialUserStats)
  const [resources, setResourses] = useState(initialialResources)
  const [buildings, setBuildings] = useState(initialialBuildings)

  const [isLoading, setIsLoading] = useState(false)
  const [seconds, setSeconds] = useState(0)

  // Main game loop
  useInterval(() => {
    // Your custom logic here
    setSeconds(seconds + 1)
    if (userStats.stamina < userStats.maxStamina) {
      setUserStats({ ...userStats, stamina: userStats.stamina + 1 })
    }

  }, 1000)

  // fetch saved gamedata on page load
  useEffect(() => {
    const gameData = JSON.parse(window.localStorage.getItem('gameData'))
    if (gameData !== null){
      setIsLoading(true)

      setUserStats(gameData.userStats)
      setResourses(gameData.resources)
      setBuildings(gameData.buildingLevels)
      setIsLoading(false)
    }
  }, []) // eslint-disable-line

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
      userStats,
      resources,
      buildings
    }))
  }

  if (isLoading === true)
    return 'loading'

  return (
    <div>
      <Container>
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
          <div>
            stamina {userStats.stamina} / {userStats.maxStamina} <br />
            gold {resources.gold} <br />
            xp {userStats.xp}
          </div>

          <BuildingTable
            buildings={buildings}
            setResourses={setResourses}
            resources={resources}
            setBuildings={setBuildings}
          />
          <UserStatsTable
            userStats={userStats}
          />
        </Segment>
      </Container>
    </div>
  )
}


export default App
