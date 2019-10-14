import initialBuildings from '../data/initialBuildings'

const reducer = (state = initialBuildings, action) => {
  switch (action.type) {
  case 'INIT_BUILDINGS':
    return action.data
  case 'UPDATE_BUILDINGS':
    return action.data
  case 'UPDATE_BUILDING_COSTS':
    return action.data
  default: return state
  }
}

export const initializeBuildings = (buildings) => {
  return async dispatch => {
    dispatch({
      type: 'INIT_BUILDINGS',
      data: buildings // TODO
    })
  }
}

export const updateBuildingCosts = (buildings, building, buildingName, cost) => {
  return async dispatch => {
    let updatedBuilding
    for (let [key, value] of Object.entries(cost)) {
      updatedBuilding = {
        ...building,
        cost: {
          ...cost,
          [key]: Math.round(value * building.costMulti[key])
        }
      }
    }

    const updatedBuildings = { ...buildings, [buildingName]: updatedBuilding }

    dispatch({
      type: 'UPDATE_BUILDING_COSTS',
      data: updatedBuildings
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