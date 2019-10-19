import initialMissions from '../data/initialMissions'

const reducer = (state = initialMissions, action) => {
  switch (action.type) {
  case 'INIT_MISSIONS':
    return action.data
  case 'UPDATE_MISSIONS':
    return action.data
  case 'UPDATE_MISSION_REWARDS':
    return action.data
  default: return state
  }
}

export const initializeMissions = (missions) => {
  return async dispatch => {
    dispatch({
      type: 'INIT_MISSIONS',
      data: missions
    })
  }
}

export const updateMissionRewards = (statName) => {
  return async (dispatch, getState) => {
    let missions = getState().missions

    for (let [key, value] of Object.entries(missions)) {
      const statMulti = missions[key].resourceMultipliers[statName]
      missions = {
        ...missions,
        [key]: {
          ...missions[key],
          reward: {
            ...missions[key].reward,
            resources: {
              ...missions[key].reward.resources,
              gold: {
                ...missions[key].reward.resources.gold,
                value: Math.round(missions[key].reward.resources.gold.value * statMulti * 10) /10
              }
            },
          }
        }
      }
    }

    dispatch({
      type: 'UPDATE_MISSION_REWARDS',
      data: missions
    })
  }
}

export const updateMissions = (missions) => {
  return async dispatch => {
    dispatch({
      type: 'UPDATE_MISSIONS',
      data: missions
    })
  }
}

export default reducer