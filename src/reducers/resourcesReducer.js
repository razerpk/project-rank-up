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
  case 'UPDATE_RESOURCE_VALUES_AND_GAINS':
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

export const updateResourcesWithMissionRewards = (resources, rewards) => {
  return async dispatch => {
    let updatedResources = resources

    for (let [key, value] of Object.entries(rewards.resources)) {
      updatedResources = {
        ...updatedResources,
        [key]: {
          ...updatedResources[key],
          curVal: updatedResources[key].curVal + value,
        }
      }
    }

    dispatch({
      type: 'UPDATE_RESOURCES_FROM_MISSION',
      data: updatedResources
    })
  }
}

export default reducer