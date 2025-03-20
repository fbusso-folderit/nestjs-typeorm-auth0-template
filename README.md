# NestJS + TypeORM + Auth0

## Project setup

```bash
$ yarn install
```

## Environment Variables

- `PORT`: The port the server will listen to.
- `AUTH0_ISSUER_URL`: The issuer URL of the Auth0 application.
- `AUTH0_AUDIENCE`: The audience of the Auth0 application.
- `ALLOWED_ORIGINS`: The allowed origins for the server as a list of comma separated values.
- `DATABASE_HOST`: The host of the database.
- `DATABASE_PORT`: The port of the database.
- `DATABASE_USER`: The user of the database.
- `DATABASE_PASSWORD`: The password of the database.
- `DATABASE_NAME`: The name of the database.

## Compile and run the project

```bash
# development
$ yarn run start
````

```bash
# watch mode
$ yarn run start:dev
````

```bash
# production mode
$ yarn run start:prod
````

## Run tests

```bash
# unit tests
$ yarn run test
```

```bash
# test coverage
$ yarn run test:cov
```