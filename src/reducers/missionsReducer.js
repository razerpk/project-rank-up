import initialMissions from '../data/initialMissions'

const reducer = (state = initialMissions, action) => {
  switch (action.type) {
  case 'INIT_MISSIONS':
    return action.data
  case 'UPDATE_MISSIONS':
    return action.data
  default: return state
  }
}

export const initializeMissions = (missions) => {
  return async dispatch => {
    dispatch({
      type: 'INIT_MISSIONS',
      data: missions // TODO
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