const initialialResources = {
  gold: { curVal: 10000, perTick: 0 },
}


const reducer = (state = initialialResources, action) => {
  switch (action.type) {
  case 'INIT_RESOURCES':
    return action.data
  case 'UPDATE_RESOURCE_VALUES':
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

export const updateResourceValue = (resources, cost) => {

  let updatedResources
  for (let [key, value] of Object.entries(resources)) {
    updatedResources = {
      ...resources,
      [key]: { curVal: value.curVal - cost[key], ...[key] }
    }
  }

  return async dispatch => {
    dispatch({
      type: 'UPDATE_RESOURCE_VALUES',
      data: updatedResources
    })
  }
}

export default reducer