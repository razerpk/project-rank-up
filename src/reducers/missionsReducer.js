import initialMissions from '../data/initialMissions';

const reducer = (state = initialMissions, action) => {
  switch (action.type) {
    case 'INIT_MISSIONS':
      return action.data;
    case 'UPDATE_MISSIONS':
      return action.data;
    case 'UPDATE_MISSION_REWARDS':
      return action.data;
    default:
      return state;
  }
};

export const initializeMissions = missions => {
  return async dispatch => {
    dispatch({
      type: 'INIT_MISSIONS',
      data: missions,
    });
  };
};

export const updateMissionRewards = statName => {
  return async (dispatch, getState) => {
    let missions = getState().missions;
    const statValue = getState().userStats.attributes[statName].value;

    for (let [mission, missionFields] of Object.entries(missions)) {
      const statMulti = missions[mission].rewardMultipliers[statName];

      for (let [resource, resourceFields] of Object.entries(
        missionFields.rewards
      )) {
        missions = {
          ...missions,
          [mission]: {
            ...missions[mission],
            rewards: {
              ...missions[mission].rewards,
              [resource]: {
                ...resourceFields,
                value:
                  Math.round(
                    resourceFields.baseValue * statMulti ** statValue * 10
                  ) / 10,
              },
            },
          },
        };
      }
    }

    dispatch({
      type: 'UPDATE_MISSION_REWARDS',
      data: missions,
    });
  };
};

export const updateMissions = missions => {
  return async dispatch => {
    dispatch({
      type: 'UPDATE_MISSIONS',
      data: missions,
    });
  };
};

export default reducer;
