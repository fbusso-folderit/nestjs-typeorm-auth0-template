// TODO: Complete the type definition for the config object based on your application needs.
export interface Config {
   port: number;
   auth0: {
      issuerUrl: string;
      audience: string;
   };
   database: {
      host: string;
      port: number;
      database: string;
      user: string;
      password: string;
   };
}
