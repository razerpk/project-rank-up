import React, { useState, useEffect } from 'react'
import { Container, Menu } from 'semantic-ui-react'
import BuildingTable from './components/BuildingTable'
import UserStatsTable from './components/UserStatsTable'

const App = () => {

  const [userStats, setUserStats] = useState({ agi: 10, str: 10, int: 10, stamina: 100, xp: 0 })
  const [resources, setRecourses] = useState({ gold: 215 })
  const [buildingLevels, setBuildingLevels] = useState({ building1: 0, building2: 0, building3: 0, building4: 0 })


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
      setUserStats({
        agi: gameData.agi,
        str: gameData.str,
        int: gameData.int,
        stamina: gameData.stamina,
        xp: gameData.xp,
      })
      setRecourses({ gold: gameData.gold })
      setBuildingLevels({
        building1: gameData.building1,
        building2: gameData.building2,
        building3: gameData.building3,
        building4: gameData.building4
      })
      setIsLoading(false)
    }
  }, []) // eslint-disable-line

  // Save the game every 5 min
  useEffect(() => {
    const interval = setInterval(() => {
      window.localStorage.setItem('gameData', JSON.stringify({
        agi: userStats.agi,
        str: userStats.str,
        int: userStats.int,
        stamina: userStats.stamina,
        xp: userStats.xp,
        gold: resources.gold,
        building1: buildingLevels.building1,
        building2: buildingLevels.building2,
        building3: buildingLevels.building3,
        building4: buildingLevels.building4,
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
      agi: userStats.agi,
      str: userStats.str,
      int: userStats.int,
      stamina: userStats.stamina,
      xp: userStats.xp,
      gold: resources.gold,
      building1: buildingLevels.building1,
      building2: buildingLevels.building2,
      building3: buildingLevels.building3,
      building4: buildingLevels.building4,
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
          buildingLevels={buildingLevels}
          setRecourses={setRecourses}
          resources={resources}
          setBuildingLevels={setBuildingLevels}
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
