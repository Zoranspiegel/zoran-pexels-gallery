import { cleanEnv, str, url } from 'envalid';

const env = cleanEnv(process.env, {
  PEXELS_API_KEY: str(),
  PEXELS_API_URL: url()
});

export default env;
