import React, { useState, useEffect } from 'react'
import { Container, Menu, Segment } from 'semantic-ui-react'
import BuildingTable from './components/BuildingTable'
import UserStatsTable from './components/UserStatsTable'


// move to init folder
const initializeUserStats =  [
  { attribute: 'con', value: 1 },
  { attribute: 'str', value: 1 },
  { attribute: 'dex', value: 1 },
  { attribute: 'int', value: 1 },
  { attribute: 'wil', value: 1 },
  { attribute: 'maxStamina', value: 100 },
  { attribute: 'xp', value: 0 }
]

const initializeResources = [
  { type: 'gold', value: 215 }
]

const initializeBuildings = [
  { name: 'building1', level: 0 },
  { name: 'building2', level: 0 },
  { name: 'building3', level: 0 },
  { name: 'building4', level: 0 }
]

const App = () => {

  const [userStats, setUserStats] = useState(initializeUserStats)
  const [resources, setResourses] = useState(initializeResources)
  const [buildings, setBuildings] = useState(initializeBuildings)

  const [isLoading, setIsLoading] = useState(false)
  const [seconds, setSeconds] = useState(0)
  const [currentStamina, setCurrentStamina] = useState(0)

  // Keep track of current sessions playtime
  // Main game loop TODO
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1)
      setCurrentStamina(currentStamina => currentStamina + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

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

  // 100 200 300 400 500 ...
  const buildingCost = (building) => {
    if (building === 0)
      return 100
    return (building * 100 + 100)
  }

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
            name='The One'
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
            stamina {currentStamina} / {userStats.find(attr => attr.attribute === 'maxStamina').value} <br />
            gold {resources.find( ({ type }) => type === 'gold').value} <br />
            xp {userStats.find(attr => attr.attribute === 'xp').value}
          </div>

          <BuildingTable
            buildingCost={buildingCost}
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
