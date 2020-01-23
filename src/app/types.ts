export interface Chirp {
  id: string,
  text: string,
  created: number,
  updated?: number,
  votes?: number,
};

export type Chirps = Chirp[];

export interface ChirpMap {
  [id: string]: Chirp,
};
