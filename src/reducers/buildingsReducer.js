import initialBuildings from '../data/initialBuildings';

const reducer = (state = initialBuildings, action) => {
  switch (action.type) {
    case 'INIT_BUILDINGS':
      return action.data;
    case 'UPDATE_BUILDINGS':
      return action.data;
    case 'UPDATE_BUILDING_ON_PURCHASE':
      return {
        ...state,
        [action.buildingName]: action.data,
      };
    default:
      return state;
  }
};

export const initializeBuildings = buildings => {
  return async dispatch => {
    dispatch({
      type: 'INIT_BUILDINGS',
      data: buildings, // TODO
    });
  };
};

export const updateBuildingOnPurchase = (buildingName, cost) => {
  return async (dispatch, getState) => {
    const buildings = getState().buildings;
    let buildingToUpdate = { ...buildings[buildingName] };

    buildingToUpdate = {
      ...buildingToUpdate,
      level: buildingToUpdate.level + 1,
    };

    for (let [key, value] of Object.entries(cost)) {
      buildingToUpdate = {
        ...buildingToUpdate,
        cost: {
          ...cost,
          [key]: Math.round(value * buildingToUpdate.costMulti[key]),
        },
      };
    }

    //const updatedBuildings = { ...buildings, [buildingName]: updatedBuilding }

    dispatch({
      type: 'UPDATE_BUILDING_ON_PURCHASE',
      data: buildingToUpdate,
      buildingName: buildingName,
    });
  };
};

export const updateBuildings = buildings => {
  return async dispatch => {
    dispatch({
      type: 'UPDATE_BUILDINGS',
      data: buildings,
    });
  };
};

export default reducer;
