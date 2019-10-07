const initialialUserStats =  {
  con: 1,
  str: 1,
  dex: 1,
  int: 1,
  wil: 1,
  stamina: 50,
  maxStamina: 100,
  xp: 0,
}

const reducer = (state = initialialUserStats, action) => {
  switch (action.type) {
  case 'INIT_USER_STATS':
    return action.data
  case 'UPDATE_STATS':
    return action.data
  default: return state
  }
}

export const initializeUserStats = () => {
  return async dispatch => {
    dispatch({
      type: 'INIT_USER_STATS',
      data: null // TODO
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