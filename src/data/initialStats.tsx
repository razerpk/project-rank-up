export type UserStats = {
  attributes: {
    con: { value: number },
    str: { value: number },
    dex: { value: number },
    int: { value: number },
    wil: { value: number },
  },
  stamina: {
    value: number,
    max: number,
    perTick: number,
  },
  level: number,
  lvUpMulti: number,
  unusedAttrPoints: number,
  attrPointsPerLevel: number,
  xp: number,
  xpToLevel: number,
}

export const initialUserStats: UserStats = {
  attributes: {
    con: { value: 1 },
    str: { value: 1 },
    dex: { value: 1 },
    int: { value: 1 },
    wil: { value: 1 },
  },
  stamina: {
    value: 100,
    max: 100,
    perTick: 1,
  },
  level: 0,
  lvUpMulti: 1.1,
  unusedAttrPoints: 0,
  attrPointsPerLevel: 3,
  xp: 0,
  xpToLevel: 100,
};