import React from 'react';
import moment from 'moment';
import { Card, CardProps, Button } from 'semantic-ui-react';

import * as AppTypes from 'app/types';
import * as Style from './ChirpCards.style';

export interface Props {
  chirps: AppTypes.Chirps,
  upvoteChirp: (id: AppTypes.Chirp['id']) => void,
};

export const mapChirp: (
  chirp: AppTypes.Chirp,
) => CardProps = (
  chirp: AppTypes.Chirp,
) => ({
  id: chirp.id,
  meta: moment(chirp.created).fromNow(),
  description: chirp.text.toUpperCase(),
  votes: chirp.votes,
});

export const ChirpCards: React.FC<Props> = ({
  chirps,
  upvoteChirp,
}) => (
  <Style.Wrapper>
    <Card.Group centered>
      {chirps.map(mapChirp).map(mappedChirp => (
        <Card key={mappedChirp.id}>
          <Card.Meta>
            {mappedChirp.meta}
          </Card.Meta>
          <Card.Description>
            {mappedChirp.description}
          </Card.Description>
          <Card.Description>
            {mappedChirp.votes || 0} votes
          </Card.Description>
          <Card.Description>
            <Button
              content={`upvote`}
              icon={`thumbs up outline`}
              onClick={() => {
                upvoteChirp(mappedChirp.id);
              }}
            />
          </Card.Description>
        </Card>
      ))}
    </Card.Group>
  </Style.Wrapper>
);

export default ChirpCards;
