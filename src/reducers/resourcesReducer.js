const initialialResources = {
  gold: { curVal: 10000, perTick: 0 },
  silver: { curVal: 100, perTick: 0 },
}

const reducer = (state = initialialResources, action) => {
  switch (action.type) {
  case 'INIT_RESOURCES':
    return action.data
  case 'UPDATE_RESOURCES':{
    let updatedResources = state
    for (let [key, value] of Object.entries(state)) {
      updatedResources = {
        ...updatedResources,
        [key]: {
          ...updatedResources[key],
          curVal: Math.round((value.curVal + value.perTick) * 10) / 10,
        }
      }
    }

    return updatedResources
  }
  case 'UPDATE_RESOURCE_VALUES_AND_GAINS':
    return action.data
  default: return state
  }
}


export const initializeResources = () => {
  return async dispatch => {
    dispatch({
      type: 'INIT_RESOURCES',
      data: null // TODO
    })
  }
}

export const updateResources = () => {
  return async dispatch => {
    dispatch({
      type: 'UPDATE_RESOURCES'
    })
  }
}

export const updateResourceValueAndPerTick = (resources, cost, buildingProduce) => {

  let updatedResources = resources

  // Subtracts building cost from resources
  for (let [key, value] of Object.entries(cost)) {
    updatedResources = {
      ...updatedResources,
      [key]: {
        ...updatedResources[key],
        curVal: Math.round((updatedResources[key].curVal - value) * 10) / 10,
      }
    }
  }

  // Updates the perTick for given resources
  for (let [key, value] of Object.entries(buildingProduce)) {
    updatedResources = {
      ...updatedResources,
      [key]: {
        ...updatedResources[key],
        perTick: Math.round((updatedResources[key].perTick + value.baseValue) * 10) / 10,
      }
    }
  }

  return async dispatch => {
    dispatch({
      type: 'UPDATE_RESOURCE_VALUES_AND_GAINS',
      data: updatedResources
    })
  }
}

export default reducer