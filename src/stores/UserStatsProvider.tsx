import React, { useState } from 'react';
import { initialUserStats, UserStats } from '../data/initialStats';

export type UserStatsProviderProps = {
  userStats: UserStats,
  setUserStats: (resources: UserStats) => void,
}

export const UserStatsContext = React.createContext({} as UserStatsProviderProps);

export const UserStatsProvider = (props: any) => {
  const [userStats, setUserStats] = useState<UserStats>(initialUserStats);

  return (
    <UserStatsContext.Provider value={{ userStats: userStats, setUserStats: setUserStats }}>
      {props.children}
    </UserStatsContext.Provider>
  )
}