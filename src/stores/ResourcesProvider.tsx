import React, { useState } from 'react';
import { initialResources, Resources } from '../data/initialResources';

export type ResourceProviderProps = {
  resources: Resources,
  setResources: (resources: Resources) => void,
}

export const ResourcesContext = React.createContext({} as ResourceProviderProps);

export const ResourcesProvider = (props: any) => {
  const [resources, setResources] = useState<Resources>(initialResources);

  return (
    <ResourcesContext.Provider value={{ resources: resources, setResources: setResources }}>
      {props.children}
    </ResourcesContext.Provider>
  )
}