import initialUserStats from '../data/initialStats'

const reducer = (state = initialUserStats, action) => {
  switch (action.type) {
  case 'INIT_USER_STATS':
    return action.data
  case 'ADD_XP':
    return action.data
  case 'ADD_STAT':
    return action.data
  case 'SPEND_UNUSED_ATTRIBUTE_POINT':
    return action.data
  case 'UPDATE_STAMINA':
    return {
      ...state,
      stamina: action.data,
    }
  default: return state
  }
}

export const initializeUserStats = (userStats) => {
  return async dispatch => {
    dispatch({
      type: 'INIT_USER_STATS',
      data: userStats // TODO
    })
  }
}

export const missionXpAndStamina = (mission) => {
  return async (dispatch, getState) => {

    let stats = getState().userStats

    stats = {
      ...stats,
      stamina: {
        ...stats.stamina,
        value: Math.round((stats.stamina.value - mission.stamCost) * 10) / 10,
      },
      xp: Math.round((stats.xp + mission.rewards.xp.value) * 10) / 10,
    }

    // increase level while enough xp
    while (stats.xp >= stats.xpToLevel) {
      stats = {
        ...stats,
        level: stats.level + 1,
        unusedAttrPoints: stats.unusedAttrPoints + stats.attrPointsPerLevel,
        xp: Math.round((stats.xp - stats.xpToLevel) * 10) / 10,
        xpToLevel: Math.round(stats.xpToLevel * stats.lvUpMulti)
      }
    }

    dispatch({
      type: 'ADD_XP',
      data: stats
    })
  }
}

export const addStat = (statName, value=1) => {
  return async (dispatch, getState) => {
    let userStats = getState().userStats

    userStats = {
      ...userStats,
      [statName]: userStats[statName] + value,
    }

    dispatch({
      type: 'ADD_STAT',
      data: userStats
    })
  }
}

export const spendUnusedAttributePoint= (attribute) => {
  return async (dispatch, getState) => {
    let userStats = getState().userStats

    console.log('attribute :', attribute)
    userStats = {
      ...userStats,
      [attribute]: userStats[attribute] + 1,
      unusedAttrPoints: userStats.unusedAttrPoints - 1,
    }

    dispatch({
      type: 'SPEND_UNUSED_ATTRIBUTE_POINT',
      data: userStats
    })
  }
}

export const updateStamina = () => {
  return async (dispatch, getState) => {
    let updatedStamina = getState().userStats.stamina
    const maxStamina = getState().userStats.stamina.max

    updatedStamina = {
      ...updatedStamina,
      value: Math.min(maxStamina, updatedStamina.value + updatedStamina.perTick)
    }

    dispatch({
      type: 'UPDATE_STAMINA',
      data: updatedStamina
    })
  }
}

export default reducer