import React, { useState } from 'react';
import { initialMissions, Missions } from '../data/initialMissions';

export type MissionsProviderProps = {
  missions: Missions,
  setMissions: (missions: Missions) => void,
}

export const MissionsContext = React.createContext({} as MissionsProviderProps);

export const MissionsProvider = (props: any) => {
  const [missions, setMissions] = useState<Missions>(initialMissions);

  return (
    <MissionsContext.Provider value={{ missions: missions, setMissions: setMissions }}>
      {props.children}
    </MissionsContext.Provider>
  )
}