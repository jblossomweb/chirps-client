import { Map } from 'immutable';

export type Chirps = Map<string, any>;
export const defaultChirps: Chirps = Map({});

export type Thinking = boolean;
export const defaultThinking: Thinking = false;

export type Error = Map<string, any> | undefined;
export const defaultError: Error = undefined;

