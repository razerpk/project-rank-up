import React, { useState, useEffect } from 'react'
import { Container, Menu } from 'semantic-ui-react'
import BuildingTable from './components/BuildingTable'
import UserStatsTable from './components/UserStatsTable'

const App = () => {

  const [userStats, setUserStats] = useState( [
    { attribute: 'agi', value: 10 },
    { attribute: 'str', value: 10 },
    { attribute: 'int', value: 10 },
    { attribute: 'maxStamina', value: 100 },
    { attribute: 'xp', value: 0 }
  ])
  const [resources, setRecourses] = useState({ gold: 215 })
  const [buildings, setBuildings] = useState([
    { name: 'building1', level: 0 },
    { name: 'building2', level: 0 },
    { name: 'building3', level: 0 },
    { name: 'building4', level: 0 }
  ])

  const [isLoading, setIsLoading] = useState(false)
  const [seconds, setSeconds] = useState(0)

  // Keep track of current sessions playtime
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  // fetch saved gamedata on page load
  useEffect(() => {
    const gameData = JSON.parse(window.localStorage.getItem('gameData'))
    if (gameData !== null){
      setIsLoading(true)

      setUserStats(gameData.userStats)
      setRecourses([{ gold: gameData.gold }])
      setBuildings(gameData.buildingLevels)
      setIsLoading(false)
    }
  }, []) // eslint-disable-line

  // Save the game every 5 min
  useEffect(() => {
    const interval = setInterval(() => {
      window.localStorage.setItem('gameData', JSON.stringify({
        userStats,
        gold: resources.gold,
        buildings
      }))
    }, 5 * 60 * 1000) // 5 min
    return () => clearInterval(interval)
  }, []) // eslint-disable-line

  // 100 200 300 400 500 ...
  const buildingCost = (building) => {
    if (building === 0)
      return 100
    return (building * 100 + 100)
  }

  const saveData = () => {
    window.localStorage.setItem('gameData', JSON.stringify({
      userStats,
      gold: resources.gold,
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
            name='The One'
          />
          <Menu.Item className='menu-right'
            name='save'
            onClick={() => saveData()}
          />
        </Menu>

        <div>
          {userStats.xp} xp, {resources.gold} gold
        </div>

        <BuildingTable
          buildingCost={buildingCost}
          buildings={buildings}
          setRecourses={setRecourses}
          resources={resources}
          setBuildings={setBuildings}
        />
        <UserStatsTable
          userStats={userStats}
        />

        <div>
          {seconds} seconds played
        </div>

      </Container>
    </div>
  )
}


export default App
