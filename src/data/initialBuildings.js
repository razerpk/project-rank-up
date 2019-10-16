const initialBuildings = {
  'Sidekick': {
    description: 'Hire others to do chores',
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
        baseValue: 0.1,
      },
    },
  },
  'Silver mine': {
    description: 'Buy part of the mine gaining continously silver',
    level: 0,
    cost: {
      gold: 200,
    }, costMulti: {
      gold: 1.15,
    },
    lvUpMulti: 1.1,
    produce: {
      silver: {
        baseValue: 0.1,
      },
    },
  },
  'Tavern': {
    description: 'Place to buy some beer. Unlocks Perks',
    level: 0,
    cost: {
      gold: 1000,
      silver: 150,
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
    },
  },
  'debug': {
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