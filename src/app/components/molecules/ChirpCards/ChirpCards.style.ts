import styled from 'styled-components';
import { rem } from 'polished';

export const Wrapper = styled.div`
  .ui.cards {
    display: grid;
    margin: ${rem(8)};
  }
  .ui.cards>.card {
    margin: ${rem(8)};
    font-size: ${rem(18)};
  }
`;
