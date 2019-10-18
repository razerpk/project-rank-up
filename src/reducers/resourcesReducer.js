import initialResources from '../data/initialResources'

const reducer = (state = initialResources, action) => {
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
  case 'UPDATE_RESOURCE_VALUES':
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
      data: resources // TODO
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

export const updateResourceValues = (change, IncOrDesc) => {
  return async (dispatch, getState) => {
    let updatedResources = getState().resources

    if (IncOrDesc === 'increment'){
      for (let [key, value] of Object.entries(change)) {
        updatedResources = {
          ...updatedResources,
          [key]: {
            ...updatedResources[key],
            curVal: Math.round((updatedResources[key].curVal + value) * 10) / 10,
          }
        }
      }
    }else {
      for (let [key, value] of Object.entries(change)) {
        updatedResources = {
          ...updatedResources,
          [key]: {
            ...updatedResources[key],
            curVal: Math.round((updatedResources[key].curVal - value) * 10) / 10,
          }
        }
      }
    }
    dispatch({
      type: 'UPDATE_RESOURCE_VALUES',
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