import initialUserStats from '../data/initialStats'

const reducer = (state = initialUserStats, action) => {
  switch (action.type) {
  case 'INIT_USER_STATS':
    return action.data
  case 'UPDATE_STATS':
    return action.data
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

export default reducer