# Spotify Song Player

For this project, you need to install node v10 and MySql.
After clone or extract project to your folder follow this step.

## Database

You can find 5 sql dump files on this directory **(server\models)**.
Create new database in your mysql and excute two sql file using this command.

```
mysql -u "your_username" -p "your_password" "database-name" < users.sql
mysql -u "your_username" -p "your_password" "database-name" < rooms.sql
mysql -u "your_username" -p "your_password" "database-name" < dj_lists.sql
mysql -u "your_username" -p "your_password" "database-name" < listen_lists.sql
mysql -u "your_username" -p "your_password" "database-name" < playlists.sql
```

Remember your "database-name".

```
For admin user, Username: admin, Password: admin
```

## Back-End

1. cd folder\server
2. npm install
3. cp .env.sample .env
4. Edit env file for DB_USER, DB_PASSWORD, DB_NAME (this is "database-name" in above step)
5. Launch server with this command.

```
node start.js
```

## Front-End

1. cd folder\client
2. npm install
3. cp .env.sample .env
4. Edit env file for [REACT_APP_CLIENT_ID](https://developer.spotify.com/documentation/web-api/quick-start/)
   - In the `Register Your Application`, you can see `CLIENT_ID`.
   - In the app setting, please add redirect url(http://localhost:3000/account) for your application.
   - Also add redirect url(http://localhost:3000/admin/rooms) for your application.
5. Launch server with this command.

```
npm start
```

# Development

## Setup client

```bash
$ cd ./client
$ yarn
$ yarn dev
```

More details about `client` is [here](./client/README.md)

## Setup server

```bash
$ cd ./server
$ yarn
$ cp .env.example .env

# After editing the `.env` file we need to setup DB
$ yarn db:create
$ yarn dev

```

More details about `server` is [here](./server/README.md)

## GraphQL playground

http://localhost:4000/graphql
