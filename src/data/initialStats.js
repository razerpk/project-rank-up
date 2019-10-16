const initialUserStats =  {
  con: 1,
  str: 1,
  dex: 1,
  int: 1,
  wil: 1,
  stamina: 10,
  maxStamina: 100,
  level: 0,
  lvUpMulti: 1.1,
  xp: 0,
  get xpToLevel() {
    return Math.round(100 * this.lvUpMulti ** this.level)
  },
}

export default initialUserStats