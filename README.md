# LAB - 3

## Project: Basic-Api-Server

### Author: Kale Lesko 

### Pull Requests

- [first push](https://github.com/Saynka/basic-api-server/pull/1)

- [first submission push](https://github.com/Saynka/basic-api-server/pull/3/files)

- [heroku push](https://github.com/Saynka/basic-api-server/compare/dev?expand=1)

### Links and Resources

- [ci/cd](https://github.com/Saynka/basic-api-server/actions)
<!-- - [back-end server url](http://xyz.com) (when applicable) -->
- [front-end application](https://api-server-rest.herokuapp.com/)

### Setup

├── .gitignore
├── .eslintrc.json
├── __tests__
│   ├── server.test.js
│   ├── logger.test.js
├── src
│   ├── error-handlers
│   │   ├── 404.js
│   │   ├── 500.js
│   ├── middleware
│   │   ├── logger.js
│   │   ├── validator.js
│   ├── models
│   │   ├── food.js
│   │   ├── clothes.js
│   ├── routes
│   │   ├── food.js
│   │   ├── clothes.js
│   ├── server.js
├── index.js
└── package.json

#### `.env` requirements (where applicable)

- eslint
- express
- jest 
- method-override
- supertest 


- `PORT` - 3000
- `MONGODB_URI` - URL to the running mongo instance/db

#### How to initialize/run your application (where applicable)

- `npm init -y`
- `npm start`

#### How to use your library (where applicable)

#### Tests

- npm test
- Any tests of note?
- Describe any tests that you did not complete, skipped, etc

#### UML

![UML Example](./assests/crud.jpg)