# penpals-server (Express js)
### library ต้องลง
  ```
  "bcrypt": "^5.0.0",
  "body-parser": "^1.19.0",
  "express": "^4.17.1",
  "jsonwebtoken": "^8.5.1",
  "passport": "^0.4.1",
  "passport-jwt": "^4.0.0",
  "passport-local": "^1.0.0",
  "sequelize": "^6.3.5",
  "sequelize-auto-migrations": "github:scimonster/sequelize-auto-migrations#a063aa6535a3f580623581bf866cef2d609531ba",
  "sqlite3": "^5.0.0",
  ```

### start
$ yarn start

### test api path
GET localhost:3000/search/user

POST localhost:3000/login
- body
  ```json
  {
    "username": "admin1",
    "password": "1234",
  }
  ```
