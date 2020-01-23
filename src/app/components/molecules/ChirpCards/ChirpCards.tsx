import React from 'react';
import moment from 'moment';
import { Card, CardProps } from 'semantic-ui-react';

import * as AppTypes from 'app/types';
import * as Style from './ChirpCards.style';

export interface Props {
  chirps: AppTypes.Chirps,
};

export const mapChirp: (
  chirp: AppTypes.Chirp,
) => CardProps = (
  chirp: AppTypes.Chirp,
) => ({
  meta: moment(chirp.created).fromNow(),
  description: chirp.text,
});

export const ChirpCards: React.FC<Props> = ({
  chirps,
}) => (
  <Style.Wrapper>
    <Card.Group
      centered
      items={chirps.map(mapChirp)}
    />
  </Style.Wrapper>
);

export default ChirpCards;
