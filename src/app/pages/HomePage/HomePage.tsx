import React from 'react';
import { Button } from 'semantic-ui-react';

import Template from 'app/templates/LightCentered';
import ChirpCards from 'app/components/molecules/ChirpCards';
import ChirpForm from 'app/components/organisms/ChirpForm';

import * as AppTypes from 'app/types';
import * as Style from './HomePage.style';

export interface StateProps {
  chirps: AppTypes.Chirps,
  thinking: boolean,
};

export interface DispatchProps {
  getChirps: () => void,
  createChirp: (chirp: AppTypes.Chirp['text']) => void,
  upvoteChirp: (id: AppTypes.Chirp['id']) => void,
};

export type Props = StateProps & DispatchProps;

const HomePage: React.FC<Props> = ({
  chirps,
  getChirps,
  createChirp,
  upvoteChirp,
  thinking,
}) => (
  <Template>
    <Style.Wrapper>
      <h1>Chirps</h1>
      <p>
        Handshake Demo App
      </p>
      <p>
        <ChirpForm
          thinking={thinking}
          createChirp={createChirp}
        />
      </p>
      <ChirpCards
        chirps={chirps || []}
        upvoteChirp={upvoteChirp}
      />
      <p>
        <Button
          content={`load`}
          onClick={getChirps}
          icon={thinking ? `spinner spin` : `download`}
          disabled={thinking}
        />  
      </p>
    </Style.Wrapper>
  </Template>
);

export default HomePage;
