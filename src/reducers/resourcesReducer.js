import initialResources from '../data/initialResources'

const reducer = (state = initialResources, action) => {
  switch (action.type) {
  case 'INIT_RESOURCES':
    return action.data
  case 'UPDATE_RESOURCES': {
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
  case 'ADD_RESOURCES':
    return action.data
  case 'SUBTRACT_RESOURCES':
    return action.data
  case 'UPDATE_RESOURCE_PERTICK':
    return action.data
  case 'UPDATE_RESOURCES_FROM_MISSION':
    return action.data
  default: return state
  }
}


export const initializeResources = (resources) => {
  return async dispatch => {
    dispatch({
      type: 'INIT_RESOURCES',
      data: resources
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

export const addResources = (change) => {
  return async (dispatch, getState) => {
    let updatedResources = getState().resources

    for (let [key, value] of Object.entries(change)) {
      updatedResources = {
        ...updatedResources,
        [key]: {
          ...updatedResources[key],
          curVal: Math.round((updatedResources[key].curVal + value.value) * 10) / 10,
        }
      }
    }

    dispatch({
      type: 'ADD_RESOURCES',
      data: updatedResources,
    })
  }
}

export const subtractResources = (change) => {
  return async (dispatch, getState) => {
    let updatedResources = getState().resources

    for (let [key, value] of Object.entries(change)) {
      updatedResources = {
        ...updatedResources,
        [key]: {
          ...updatedResources[key],
          curVal: Math.round((updatedResources[key].curVal - value) * 10) / 10,
        }
      }
    }

    dispatch({
      type: 'SUBTRACT_RESOURCES',
      data: updatedResources,
    })
  }
}

export const updateResourcePerTick = (buildingProduce) => {
  return async (dispatch, getState) => {
    let updatedResources  = getState().resources
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
    dispatch({
      type: 'UPDATE_RESOURCE_PERTICK',
      data: updatedResources
    })
  }
}

export default reducer