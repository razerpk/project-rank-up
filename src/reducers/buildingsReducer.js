const initialialBuildings = {
  'Mine': { level: 0, initCost: 100, costMulti: 1.15, lvUpMulti: 1.1 , produce: { gold: { baseValue: 0.1 } } },
  'mid-level shop': { level: 0, initCost: 200, costMulti: 1.15, lvUpMulti: 1.1 , produce: { gold: { baseValue: 0.1 } } },
  'expensive': { level: 0, initCost: 1000, costMulti: 1.10, lvUpMulti: 1.1 , produce: { gold: { baseValue: 0.1 } } },
  'Spa Fountain': { level: 0, initCost: 100, costMulti: 1.15, lvUpMulti: 1.1 , produce: { stamina: { baseValue: 20 } } },
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