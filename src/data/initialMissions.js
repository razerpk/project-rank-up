const initialMissions = {
  'Collect bottles': {
    description: 'Collect bottles from the streets and trash for some pocket money.',
    lvReq: 0,
    prReq: 0,
    stamCost: 0,
    reward: {
      conMulti: 1.1,
      strMulti: 1.1,
      dexMulti: 1.1,
      intMulti: 1.1,
      wilMulti: 1.1,
      get xpMulti() {
        return 1
      },
      resources: {
        gold: 1,
      },
      xp: 0,
    }
  },
  'Help citizens': {
    description: 'Help ordinary citizens with their everyday errands.',
    lvReq: 0,
    prReq: 0,
    stamCost: 25,
    reward: {
      conMulti: 1.1,
      strMulti: 1.05,
      dexMulti: 1,
      intMulti: 1,
      wilMulti: 1,
      get xpMulti() {
        return this.conMulti
      },
      resources: {
        gold: 10,
      },
      xp: 5,
    }
  },
  'Exercise': {
    description: '50 push-ups, 50 sit-ups, 50 squats and 5km running twice a day should help the body to get in peak condition!',
    lvReq: 0,
    prReq: 0,
    stamCost: 25,
    reward: {
      conMulti: 1.05,
      strMulti: 1.05,
      dexMulti: 1.05,
      intMulti: 1,
      wilMulti: 1.05,
      get xpMulti() {
        return this.conMulti + this.strMulti + this.dexMulti
      },
      resources: {
        gold: 0,
      },
      xp: 40,
    }
  },
}

export default initialMissions