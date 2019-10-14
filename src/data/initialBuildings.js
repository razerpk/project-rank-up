const initialBuildings = {
  'Mine': {
    level: 0,
    cost: {
      gold: 100,
      silver: 100,
    },
    costMulti: {
      gold: 1.15,
      silver:1.1,
    },
    lvUpMulti: 1.1,
    produce: {
      gold: {
        baseValue: 0.1,
      },
      silver: {
        baseValue: 0.2,
      },
    },
  },
  'mid-level shop': {
    level: 0,
    cost: {
      gold: 200,
    }, costMulti: {
      gold: 1.15,
    },
    lvUpMulti: 1.1,
    produce: {
      gold: {
        baseValue: 0.1,
      },
    },
  },
  'expensive': {
    level: 0,
    cost: {
      gold: 1000,
    },
    costMulti: {
      gold: 1.10,
    },
    lvUpMulti: 1.1,
    produce: {
      gold: {
        baseValue: 0.1,
      },
    },
  },
  'Spa Fountain': {
    level: 0,
    cost: {
      gold: 100,
    },
    costMulti: {
      gold: 1.15,
    },
    lvUpMulti: 1.1,
    produce: {
      gold: {
        baseValue: 20,
      },
    },
  },
}

export default initialBuildings