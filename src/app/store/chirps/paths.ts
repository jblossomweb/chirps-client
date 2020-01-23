import * as AppTypes from 'app/types';
const rootPath = 'chirps';

const paths = {
  chirps: () => [rootPath, 'chirps'],
  chirp: (id: AppTypes.Chirp['id']) => [rootPath, 'chirps', id],
  thinking: () => [rootPath, 'thinking'],
  error: () => [rootPath, 'error'],
};

export default paths;
