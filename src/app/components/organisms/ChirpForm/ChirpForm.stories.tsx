import React from 'react';
import Window from 'window-or-global';

import { KnobsInterface, storyBuilder } from 'core/stories';
import Template from 'app/templates/LightCentered';

import ChirpForm, { Props } from '.';

export const mockProps: Props = {
  createChirp: chirp => {
    Window.console.log(`createChirp(${chirp})`);
  },
};

export const renderScene = (
  knobProps: Props,
) => (
  knobs: KnobsInterface,
  props: Props = knobProps,
) => (
  <ChirpForm
    thinking={knobs.boolean('thinking', props.thinking || false)}
    createChirp={mockProps.createChirp}
  />
);

export const scenes = {
  'sample': renderScene({
    ...mockProps,
  }),
  'thinking': renderScene({
    ...mockProps,
    thinking: true,
  }),
};

storyBuilder(
  scenes,
  'organisms/ChirpForm',
  Template,
);
