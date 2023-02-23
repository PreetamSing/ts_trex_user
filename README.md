## User Service

- ##### Note: For running all of the following commands, make sure you're in the project's working directory.

### Setup Guide:

- ```bash
  npm run copy-env
  ```
  OR
- Manually copy `.env.sample` into `.env`.
- Fill up appropriate values.

#### For Building image

```bash
docker-compose build ${prod/npm}
```

#### For Development start

```bash
docker-compose run --rm --service-ports --name auth_service_dev npm run dev
```

#### For Production start

```bash
docker-compose run --rm --service-ports -d --name auth_service_prod prod
```

#### To Stop Server

```bash
docker-compose down
```

#### To use npm utility image

- This utility image can be used to run any `npm` command, allowing every contributor to use the same `npm` version. It works even if you don't have `npm` installed locally. E.g.:
  - To run `npm init`
    ```bash
    docker-compose run --rm npm init
    ```
  - To run `npm i express`
    ```bash
    docker-compose run --rm npm i express
    ```
##
