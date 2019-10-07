const initialMissions = {
  mission1 : {
    title: 'title',
    desc: 'description',
    lvReq: 0,
    prReq: 0,
    stamCost: 30,
    reward: {
      resources: {
        gold: 50,
      },
      xp: 50,
    }
  },
  mission2 : {
    title: 'title2',
    desc: 'description2',
    lvReq: 0,
    prReq: 0,
    stamCost: 30,
    reward: {
      resources: {
        gold: 10,
      },
      xp: 90,
    }
  },
}

const reducer = (state = initialMissions, action) => {
  switch (action.type) {
  case 'INIT_MISSIONS':
    return action.data
  case 'UPDATE_MISSIONS':
    return action.data
  default: return state
  }
}

export const initializeMissions = () => {
  return async dispatch => {
    dispatch({
      type: 'INIT_MISSIONS',
      data: null // TODO
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