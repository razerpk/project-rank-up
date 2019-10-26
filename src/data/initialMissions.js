const initialMissions = {
  'Collect bottles': {
    description: 'Collect bottles from the streets and trash for some pocket money.',
    lvReq: 0,
    prReq: 0,
    stamCost: 0,
    rewardMultipliers: {
      con: 1.1,
      str: 1.1,
      dex: 1.1,
      int: 1.1,
      wil: 1.1,
    },
    rewards: {
      gold: {
        baseValue: 1,
        value: 1
      },
      xp: {
        baseValue: 0,
        value: 0,
      }
    }
  },
  'Help citizens': {
    description: 'Help ordinary citizens with their everyday errands.',
    lvReq: 0,
    prReq: 0,
    stamCost: 25,
    rewardMultipliers: {
      con: 1.1,
      str: 1.05,
      dex: 1,
      int: 1,
      wil: 1,
    },
    rewards: {
      gold: {
        baseValue: 10,
        value: 10
      },
      xp: {
        baseValue: 5,
        value: 5,
      },
    }
  },
  'Exercise': {
    description: '50 push-ups, 50 sit-ups, 50 squats and 5km running twice a day should help the body to get in peak condition!',
    lvReq: 0,
    prReq: 0,
    stamCost: 25,
    rewardMultipliers: {
      con: 1.05,
      str: 1.05,
      dex: 1.05,
      int: 1,
      wil: 1.05,
    },
    rewards: {
      gold: {
        baseValue: 0,
        value: 0
      },
      xp: {
        baseValue: 40,
        value: 40,
      }
    }
  },
}

export default initialMissions