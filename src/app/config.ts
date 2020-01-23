import coreConfig from 'core/config';

export default {
  ...coreConfig,
  title: process.env.REACT_APP_TITLE,
  description: process.env.REACT_APP_DESCRIPTION,
  services: {
    /* import service env vars here */
    chirps: {
      url: process.env.REACT_APP_CHIRPS_SERVICE_URL,
    },
  },
};
