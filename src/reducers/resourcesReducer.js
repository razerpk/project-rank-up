const initialialResources = {
  gold: 215,
}


const reducer = (state = initialialResources, action) => {
  switch (action.type) {
  case 'INIT_RESOURCES':
    return action.data
  case 'UPDATE_RESOURCES':
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

export const updateResources = (resources) => {
  return async dispatch => {
    dispatch({
      type: 'UPDATE_RESOURCES',
      data: resources
    })
  }
}

export default reducer