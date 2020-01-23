import React from 'react';

import { KnobsInterface, storyBuilder } from 'core/stories';
import Template from 'app/templates/LightCentered';

import mockChirps from 'app/__mocks__/chirps.json';

import ChirpCards, { Props } from '.';

export const mockProps: Props = {
  chirps: mockChirps,
};

export const renderScene = (
  knobProps: Props,
) => (
  knobs: KnobsInterface,
  props: Props = knobProps,
) => (
  <ChirpCards
    chirps={knobs.object('chirps', props.chirps)}
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
