import React, { useState } from 'react';
import { Button, Input } from 'semantic-ui-react';

import * as Style from './ChirpForm.style';

export interface Props {
  createChirp: (chirp: string) => void,
  thinking?: boolean,
};

export const ChirpForm: React.FC<Props> = ({
  createChirp,
  thinking,
}) => {
  const [chirp, setChirp] = useState('');
  return (
    <Style.Wrapper>
      <Input
        size={`mini`}
        disabled={thinking}
        loading={thinking}
        onChange={(event, { value }) => {
          setChirp(value);
        }}
      />
      <Button
        content={`create chirp`}
        disabled={thinking}
        onClick={() => {
          createChirp(chirp);
        }}
      />
    </Style.Wrapper>
  );
}

export default ChirpForm;
