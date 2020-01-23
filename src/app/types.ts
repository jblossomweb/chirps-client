export interface Chirp {
  id: string,
  text: string,
  created: number,
  updated?: number,
};

export type Chirps = Chirp[];

export interface ChirpMap {
  [id: string]: Chirp,
};
