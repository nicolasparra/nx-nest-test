# Mono Repo para POC

## Development server

Run `nx serve nest-general` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## Comandos utilizados

Crear un nuevo work space

```
npx create-nx-workspace my-workspace --preset=nest
```

Ejecutar un servidor

```
npx nx serve nombre-application
```

## Variables de entorno

```
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_PASSWORD=12345678
POSTGRES_DB=nest
PORT=3000
JWT_SECRET=JWT_SECRET
JWT_EXPIRATION_TIME=10000
```

## Repositorios de Referencia

- https://github.com/mwanago/nestjs-typescript/tree/master
