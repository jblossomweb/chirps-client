import React from 'react';
import Window from 'window-or-global';

import { KnobsInterface, storyBuilder } from 'core/stories';
import Template from 'app/templates/LightCentered';

import mockChirps from 'app/__mocks__/chirps.json';

import ChirpCards, { Props } from '.';

export const mockProps: Props = {
  chirps: mockChirps,
  upvoteChirp: (id: string) => {
    Window.console.log(`upvoteChirp(${id})`);
  }
};

export const renderScene = (
  knobProps: Props,
) => (
  knobs: KnobsInterface,
  props: Props = knobProps,
) => (
  <ChirpCards
    chirps={knobs.object('chirps', props.chirps)}
    upvoteChirp={mockProps.upvoteChirp}
  />
);

export const scenes = {
  'sample': renderScene({
    ...mockProps,
  }),
};

storyBuilder(
  scenes,
  'molecules/ChirpCards',
  Template,
);
