import initialUserStats from '../data/initialStats'

const reducer = (state = initialUserStats, action) => {
  switch (action.type) {
  case 'INIT_USER_STATS':
    return action.data
  case 'UPDATE_STATS':
    return action.data
  case 'ADD_STAT':
    return action.data
  case 'UPDATE_STAMINA':
    return {
      ...state,
      stamina: action.data,
    }
  default: return state
  }
}

export const initializeUserStats = (userStats) => {
  return async dispatch => {
    dispatch({
      type: 'INIT_USER_STATS',
      data: userStats // TODO
    })
  }
}

export const updateStats = (stats) => {
  return async dispatch => {
    dispatch({
      type: 'UPDATE_STATS',
      data: stats
    })
  }
}

export const addStat = (statName) => {
  return async (dispatch, getState) => {
    let userStats = getState().userStats

    userStats = {
      ...userStats,
      [statName]: userStats[statName] + 1
    }

    console.log('userStats :', userStats);
    dispatch({
      type: 'ADD_STAT',
      data: userStats
    })
  }
}

export const updateStamina = () => {
  return async (dispatch, getState) => {
    let updatedStamina = getState().userStats.stamina

    updatedStamina = {
      ...updatedStamina,
      value: updatedStamina.value + updatedStamina.perTick
    }

    dispatch({
      type: 'UPDATE_STAMINA',
      data: updatedStamina
    })
  }
}

export default reducer