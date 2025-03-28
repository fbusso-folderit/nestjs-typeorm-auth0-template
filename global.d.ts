import { RequestUser } from './src/types';

declare global {
   namespace Express {
      interface Request {
         user?: RequestUser;
      }
   }
}

export {};
