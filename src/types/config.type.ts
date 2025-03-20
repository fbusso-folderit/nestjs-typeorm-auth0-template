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
