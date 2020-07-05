import React, {
  useState,
  useEffect,
  useContext
} from 'react';
import useInterval from './hooks/useInterval';
import { BuildingsContext } from './stores/BuildingsProvider'
import { ResourcesContext } from './stores/ResourcesProvider'
//import './App.scss';

const App = (props: any) => {
  const [seconds, setSeconds] = useState(0);

  const { buildings, setBuildings } = useContext(BuildingsContext);
  const { resources, setResources } = useContext(ResourcesContext);

  console.log('buildings :>> ', buildings);
  // Main game loop
  useInterval(() => {

    setResources({ ...resources, gold: { ...resources.gold, curVal: resources.gold.curVal + 1 } })
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
        //stats,
        //resources,
        //buildings,
      })
    );
  };

  return (
    <div>
      <div className='body'>
        <div>Workign as intended</div>
        {resources.gold.curVal}
      </div>
    </div>
  );
};

export default App