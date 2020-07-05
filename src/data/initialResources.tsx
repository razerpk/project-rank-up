export type Resources = {
  gold: {
    curVal: number,
    perTick: number,
  },
  silver: {
    curVal: number,
    perTick: number,
  },
  elixir: {
    curVal: number,
    perTick: number,
  },
}

export const initialResources: Resources = {
  gold: {
    curVal: 10000,
    perTick: 0,
  },
  silver: {
    curVal: 150,
    perTick: 0,
  },
  elixir: {
    curVal: 0,
    perTick: 0,
  },
};
