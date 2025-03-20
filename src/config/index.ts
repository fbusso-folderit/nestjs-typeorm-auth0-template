import * as process from 'node:process';

import { Config } from '../types';

const env = process.env;

export default (): Config => ({
   port: parseInt(env.PORT!, 10) || 3000,
   auth0: {
      issuerUrl: env.AUTH0_ISSUER_URL!,
      audience: env.AUTH0_AUDIENCE!,
   },
   database: {
      host: env.DATABASE_HOST!,
      port: parseInt(env.DATABASE_PORT!, 10) || 5432,
      database: env.DATABASE_NAME!,
      user: env.DATABASE_USER!,
      password: env.DATABASE_PASSWORD!,
   },
});
