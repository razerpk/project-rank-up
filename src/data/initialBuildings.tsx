export type Buildings = {
  guild: Guild;
  'Silver mine': SilverMine;
  tavern: Tavern;
  debug: Debug;
}

export type Guild = {
  description: string;
  level: number;
  cost: { gold: number };
  costMulti: { gold: number };
  lvUpMulti: number;
  produce: { gold: { baseValue: number } };
}

export type SilverMine = {
  description: string;
  level: number;
  cost: {
    gold: number;
  };
  costMulti: {
    gold: number
  };
  lvUpMulti: number;
  produce: {
    silver: {
      baseValue: number,
    },
  };
}

export type Tavern = {
  description: string;
  level: number;
  cost: {
    gold: number;
    silver: number;
  };
  costMulti: {
    gold: number;
    silver: number;
  };
  lvUpMulti: number;
  produce: {
    elixir: {
      baseValue: number,
    },
  },
}

export type Debug = {
  level: number,
  cost: {
    gold: number,
  },
  costMulti: {
    gold: number,
  },
  lvUpMulti: number,
  produce: {
    gold: {
      baseValue: number,
    },
  },
}
export const initialBuildings: Buildings = {
  guild: {
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
    },
    costMulti: {
      gold: 1.15,
    },
    lvUpMulti: 1.1,
    produce: {
      silver: {
        baseValue: 0.1,
      },
    },
  },
  tavern: {
    description: 'Place to buy some elixirs. Unlocks Perks',
    level: 0,
    cost: {
      gold: 1000,
      silver: 150,
    },
    costMulti: {
      gold: 1.15,
      silver: 1.1,
    },
    lvUpMulti: 1.1,
    produce: {
      elixir: {
        baseValue: 0.1,
      },
    },
  },
  debug: {
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
};
