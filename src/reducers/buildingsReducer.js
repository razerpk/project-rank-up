const initialialBuildings = {
  building1: { level: 0, initCost: 100, costMulti: 1.15, lvUpMulti: 1.1 , produce: { gold: { baseValue: 0.1 } } },
  building2: { level: 0 },
  building3: { level: 0 },
  building4: { level: 0 },
}

const reducer = (state = initialialBuildings, action) => {
  switch (action.type) {
  case 'INIT_BUILDINGS':
    return action.data
  case 'UPDATE_BUILDINGS':
    return action.data
  default: return state
  }
}

export const initializeBuildings = () => {
  return async dispatch => {
    dispatch({
      type: 'INIT_BUILDINGS',
      data: null // TODO
    })
  }
}

export const updateBuildings = (buildings) => {
  return async dispatch => {
    dispatch({
      type: 'UPDATE_BUILDINGS',
      data: buildings
    })
  }
}

export default reducer