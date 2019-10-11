const initialialBuildings = {
  'Mine': { level: 0, cost: { gold: 100 }, costMulti: { gold: 1.15 }, lvUpMulti: 1.1 , produce: { gold: { baseValue: 0.1 } } },
  'mid-level shop': { level: 0, cost: { gold: 200 }, costMulti: { gold: 1.15 }, lvUpMulti: 1.1 , produce: { gold: { baseValue: 0.1 } } },
  'expensive': { level: 0, cost: { gold: 1000 }, costMulti: { gold: 1.10 }, lvUpMulti: 1.1 , produce: { gold: { baseValue: 0.1 } } },
  'Spa Fountain': { level: 0, cost: { gold: 100 }, costMulti: { gold: 1.15 }, lvUpMulti: 1.1 , produce: { stamina: { baseValue: 20 } } },
}

const reducer = (state = initialialBuildings, action) => {
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

export const initializeBuildings = () => {
  return async dispatch => {
    dispatch({
      type: 'INIT_BUILDINGS',
      data: null // TODO
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

    console.log('updatedBuildings :', updatedBuildings);
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