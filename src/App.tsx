import React, { useState /*useEffect*/ } from 'react';
import useInterval from './hooks/useInterval';
import { initialBuildings, Buildings } from './data/initialBuildings';
import initialMissions from './data/initialMissions';
import initialResources from './data/initialResources';
import initialStats from './data/initialStats';
//import './App.scss';

const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [resources, setResources] = useState(initialResources);
  const [missions, setMissions] = useState(initialMissions);
  const [buildings, setBuildings] = useState<Buildings>(initialBuildings);
  const [stats, setUserStats] = useState(initialStats);


  // Main game loop
  useInterval(() => {
    setSeconds(seconds + 1);
    // Your custom logic here
    if (false) {
      //setUserStats(0);
    }
    //setResources(0);
  }, 1000);

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
    window.localStorage.setItem(
      'gameData',
      JSON.stringify({
        stats,
        resources,
        buildings,
      })
    );
  };

  return (
    <div>
      <div className='body'>
        HELLO
      </div>
    </div>
  );
};

export default App