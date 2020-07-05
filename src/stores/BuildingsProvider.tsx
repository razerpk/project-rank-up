import React, { useState } from 'react';
import { initialBuildings, Buildings } from '../data/initialBuildings';

export type BuildingsProviderProps = {
  buildings: Buildings,
  setBuildings: (buildings: Buildings) => void,
}

export const BuildingsContext = React.createContext({} as BuildingsProviderProps);

export const BuildingsProvider = (props: any) => {
  const [buildings, setBuildings] = useState<Buildings>(initialBuildings);

  return (
    <BuildingsContext.Provider value={{ buildings: buildings, setBuildings: setBuildings }}>
      {props.children}
    </BuildingsContext.Provider>
  )
}