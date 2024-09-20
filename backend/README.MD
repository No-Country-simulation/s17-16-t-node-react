# 📘 Backend for ![Logo](./src/assets/img/logo.png) Restify App

- [`📚 Repo`](../README.md)/[`📕 Frontend`](../frontend/README.MD)/
- [`📚 Repo`](../README.md)/`📘 Backend`/

## 📖 Table of Contents

- [📘 Backend for  Restify App](#-backend-for--restify-app)
  - [📖 Table of Contents](#-table-of-contents)
  - [👀 Motivation 🔝](#-motivation-)
  - [🧰 Technology Stack 🔝](#-technology-stack-)
  - [🤵‍♂️ Team communication channels 🔝](#️-team-communication-channels-)
  - [🧑‍💻 Developer Teams 🔝](#-developer-teams-)
  - [🗃️ Project info 🔝](#️-project-info-)
    - [📚 License 🔝](#-license-)
    - [📚 Workspaces 🔝](#-workspaces-)
    - [📚 Deploy 🔝](#-deploy-)
  - [🛠️ Requirements 🔝](#️-requirements-)
    - [1. Clone the repository from GitHub](#1-clone-the-repository-from-github)
    - [2. Navigate to the backend folder](#2-navigate-to-the-backend-folder)
    - [3. Install the necessary dependencies](#3-install-the-necessary-dependencies)
    - [4 In the backend folder, create a .env file](#4-in-the-backend-folder-create-a-env-file)
    - [5. Add the following keys to the .env file](#5-add-the-following-keys-to-the-env-file)
    - [6. Run the following command to start the server](#6-run-the-following-command-to-start-the-server)
    - [7. Open your browser and navigate to http://localhost:3001/api/v1/docs](#7-open-your-browser-and-navigate-to-httplocalhost3001apiv1docs)
  - [🎚️ Scripts 🔝](#️-scripts-)
  - [🩻 Progress Report on Router Development 🔝](#-progress-report-on-router-development-)
    - [✨ Root Base](#-root-base)
    - [✨ Start Route 🔝](#-start-route-)
    - [⛔ Invalid Route 🔝](#-invalid-route-)
    - [📑 Docs Route 🔝](#-docs-route-)
    - [🔐 Authorization Routes 🔝](#-authorization-routes-)
    - [🙎‍♂️User Routes 🔝](#️user-routes-)
    - [🛍️ Category Routes 🔝](#️-category-routes-)
    - [📖 Menus Routes 🔝](#-menus-routes-)
    - [📑 orders Routes 🔝](#-orders-routes-)
    - [💵 Payment Routes 🔝](#-payment-routes-)
    - [🍽️ Restaurant Routes 🔝](#️-restaurant-routes-)
    - [🎎 Roles Routes 🔝](#-roles-routes-)
    - [🎏 States Routes 🔝](#-states-routes-)
    - [🎆 Tables Routes 🔝](#-tables-routes-)

## 👀 Motivation [🔝](#-backend-for--restify-app)

We chose a RESTful API with MongoDB for Restify's backend because these technologies allow us to build a scalable, fast, and flexible solution. Node.js is ideal for real-time applications, as it efficiently handles multiple connections, which is essential for the continuous management of data in a food business. Additionally, MongoDB offers us a NoSQL database that perfectly adapts to changes in storage and data structure requirements, providing the flexibility we need to grow and adapt without complications. This combination ensures an agile and robust platform to manage all aspects of the business.

## 🧰 Technology Stack [🔝](#-backend-for--restify-app)

[![JavaScript Link](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white "JavaScript Link")](https://nodejs.org/docs/latest-v20.x/api/index.html) [![Node Link](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white "Node Link")](https://nodejs.org/docs/latest-v20.x/api/index.html) [![Express Link](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge "express Link")](https://expressjs.com/)
[![Npm Link](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white "Npm Link")](https://www.npmjs.com/) [![Postman Link](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white "Postman Link")](https://www.postman.com/) [![Cloudinary Link](https://img.shields.io/badge/cloudinary-%233448C5?style=for-the-badge&logo=cloudinary&logoColor=ffffff "Cloudinary Link")](https://cloudinary.com/)
[![Swagger Link](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=black "Swagger Link")](https://swagger.io/) [![Markdown Link](https://img.shields.io/badge/Markdown-03a7dd?style=for-the-badge&logo=markdown&logoColor=white "Markdown Link")](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)
[![Zod Link](https://img.shields.io/badge/zod-3E67B1?style=for-the-badge&logo=zod&logoColor=892CA0&color=313131)](https://zod.dev/ "Zod Link") [![JSON_WEB_TOKENS Link](https://img.shields.io/badge/JSON_WEB_TOKENS-212121?style=for-the-badge&logo=jsonwebtokens&logoColor=ffffff "JSON_WEB_TOKENS Link")](https://jwt.io/)
[![MongoDB Link](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white "MongoBD Link")](https://www.mongodb.com/atlas/database)

## 🤵‍♂️ Team communication channels [🔝](#-backend-for--restify-app)

[![Slack Link](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white "Slack Link")](https://slack.com) [![Discord Link](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white "Discord Link")](https://discord.com) [![LinkedIn Link](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white "LinkedIn Link")](https://linkedIn.com)

## 🧑‍💻 Developer Teams [🔝](#-backend-for--restify-app)

|                                                                                                                                            ![Avatar](https://avatars.githubusercontent.com/u/33846439?s=96&v=4)                                                                                                                                             |                                                                                                                                              ![Avatar](https://avatars.githubusercontent.com/u/69812733?s=96&v=4)                                                                                                                                               |                                                                                                                                                 ![Avatar](https://avatars.githubusercontent.com/u/87831696?s=96&v=4)                                                                                                                                                 |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                                                                                                                      **Aracely Cruz**                                                                                                                                                                       |                                                                                                                                                                        **David Caycedo**                                                                                                                                                                        |                                                                                                                                                                          **Gabriel Braga**                                                                                                                                                                           |
| [![Github Link](https://img.shields.io/badge/github-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white "Github Link")](https://github.com/aracely33)[![LinkedIn Link](https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white "LinkedIn Link")](https://www.linkedin.com/in/aracruzdelangel/) | [![Github Link](https://img.shields.io/badge/github-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white "Github Link")](https://github.com/David-Coach-Dev)[![LinkedIn Link](https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white "LinkedIn Link")](https://www.linkedin.com/in/davidcoachdev/) | [![Github Link](https://img.shields.io/badge/github-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white "Github Link")](https://github.com/guebebraga)[![LinkedIn Link](https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white "LinkedIn Link")](https://www.linkedin.com/in/gabriel-braga-24b546232/) |

## 🗃️ Project info [🔝](#-backend-for--restify-app)

### 📚 License [🔝](#-backend-for--restify-app)

| License | [![License Link](https://img.shields.io/badge/MIT-FF0000?style=for-the-badge&logo=amazoniam&logoColor=white "License Link")](./LICENSE.MD) |
| :-----: | :----------------------------------------------------------------------------------------------------------------------------------------: |

### 📚 Workspaces [🔝](#-backend-for--restify-app)

|     Name     |   Path   |     Description      |
| :----------: | :------: | :------------------: |
| `🎛️ Backend` | /backend | application Back-End |

### 📚 Deploy [🔝](#-backend-for--restify-app)

| Description |                                                                                 Deploy                                                                                 |                                link                                 |
| :---------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------: |
|   Backend   |            [![Vercel Link](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white "Vercel Link")](https://vercel.com/)             |  [Backend](https://s17-16-t-node-react-dev.vercel.app/api/v1/docs)  |
|  Data Base  | [![MongoDB Link](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white "MongoBD Link")](https://www.mongodb.com/atlas/database) | [Data Base](https://s17-16-t-node-react-dev.vercel.app/api/v1/docs) |

## 🛠️ Requirements [🔝](#-backend-for--restify-app)

👉🏻 To use the front end locally for the Restify app, you need to:

### 1. Clone the repository from GitHub

```sh
git clone https://github.com/No-Country/c17-29-n-node.git
```

### 2. Navigate to the backend folder

```sh
cd backend
```

### 3. Install the necessary dependencies

```sh
npm install
```

### 4 In the backend folder, create a .env file

```sh
touch .env
```

### 5. Add the following keys to the .env file

```sh
//==================
// Environment
//==================
PORT=****
API_KEY=****
HOST_DEV=****
HOST_PROD_FRONT=****
HOST_PROD_BACK=****

//==================
// BCRYPT
//==================
BCRYPT_SALT=****

//==================
// JWT
//==================
TOKEN_SECRET=****
TOKEN_EXPIRATION=****

//==================
// MONGODB
//==================
URL_MONGO=****
DB_PROD_MONGO=****
DB_TEST_MONGO=****
DB_RATE_LIMIT_MONGO=****
USER_MONGO=****
PASS_MONGO=****

//==================
// CLOUDINARY
//==================
CLOUDINARY_CLOUD_NAME=****
CLOUDINARY_API_KEY=****
CLOUDINARY_API_SECRET=****
CLOUDINARY_RESOURCE_TYPE_EXT=****
CLOUDINARY_RESOURCE_TYPE=****
CLOUDINARY_MAX_FILE_SIZE=****
CLOUDINARY_SIZE_IMAGE=****
```

### 6. Run the following command to start the server

```sh
npm run dev
```

### 7. Open your browser and navigate to [http://localhost:3001/api/v1/docs](http://localhost:3001/api/v1/docs)

## 🎚️ Scripts [🔝](#-backend-for--restify-app)

- `npm rum start`: Run the application development server with node
- `npm rum dev`: Run the application development server with nodemon.

## 🩻 Progress Report on Router Development [🔝](#-backend-for--restify-app)

### ✨ Root Base

[http://localhost:3001/api/v1/docs](http://localhost:3001/api/v1/docs)

### ✨ Start Route [🔝](#-backend-for--restify-app)

| Method | Router  | Endpoint | Documentation | Api Key | Token |
| :----: | :-----: | :------: | :-----------: | :-----: | :---: |
|  Get   |    /    |    ✔️    |      ❌       |   ❌    |  ❌   |
|  Get   |  /api   |    ✔️    |      ❌       |   ❌    |  ❌   |
|  Get   | /api/v1 |    ✔️    |      ❌       |   ❌    |  ❌   |

### ⛔ Invalid Route [🔝](#-backend-for--restify-app)

| Method | Router | Endpoint | Documentation | Api Key | Token |
| :----: | :----: | :------: | :-----------: | :-----: | :---: |
|  Get   |  /\*   |    ✔️    |      ✔️       |   ❌    |  ❌   |

### 📑 Docs Route [🔝](#-backend-for--restify-app)

| Method |    Router    | Endpoint | Documentation | Api Key | Token |
| :----: | :----------: | :------: | :-----------: | :-----: | :---: |
|  Get   | /api/v1/docs |    ✔️    |      ✔️       |   ❌    |  ❌   |

### 🔐 Authorization Routes [🔝](#-backend-for--restify-app)

| Method |     Router     | Endpoint | Documentation | Api Key | Token |
| :----: | :------------: | :------: | :-----------: | :-----: | :---: |
|  Get   | /user/profile  |    ✔️    |      ✔️       |   ✔️    |  ✔️   |
|  Post  | /user/register |    ✔️    |      ✔️       |   ✔️    |  ❌   |
|  Post  |  /user/login   |    ✔️    |      ✔️       |   ✔️    |  ❌   |

### 🙎‍♂️User Routes [🔝](#-backend-for--restify-app)

| Method |    Router     | Endpoint | Documentation | Api Key | Token |
| :----: | :-----------: | :------: | :-----------: | :-----: | :---: |
|  Get   |  /users/all  |    ✔️    |      ✔️       |   ✔️    |  ❌   |
|  Get   |   /users/id   |    ✔️    |      ✔️       |   ✔️    |  ❌   |
|  Post  |  /users/create   |    ✔️    |      ✔️       |   ✔️    |  ✔️   |
|  Put   | /users/update |    ✔️    |      ✔️       |   ✔️    |  ✔️   |
| Delete | /users/delete |    ✔️    |      ✔️       |   ✔️    |  ✔️   |

### 🛍️ Category Routes [🔝](#-backend-for--restify-app)

| Method |       Router       | Endpoint | Documentation | Api Key | Token |
| :----: | :----------------: | :------: | :-----------: | :-----: | :---: |
|  Get   |  /categories/all   |    ✔️    |      ✔️       |   ✔️    |  ❌   |
|  Get   |   /categories/id   |    ✔️    |      ✔️       |   ✔️    |  ❌   |
|  Get   | /categories/search |    ✔️    |      ✔️       |   ✔️    |  ❌   |
|  Post  | /categories/create |    ✔️    |      ✔️       |   ✔️    |  ✔️   |
|  Put   | /categories/update |    ✔️    |      ✔️       |   ✔️    |  ✔️   |
| Delete | /categories/delete |    ✔️    |      ✔️       |   ✔️    |  ✔️   |

### 📖 Menus Routes [🔝](#-backend-for--restify-app)

| Method |    Router     | Endpoint | Documentation | Api Key | Token |
| :----: | :-----------: | :------: | :-----------: | :-----: | :---: |
|  Get   |  /menus/all   |    ✔️    |      ✔️       |   ✔️    |  ❌   |
|  Get   |   /menus/id   |    ✔️    |      ✔️       |   ✔️    |  ❌   |
|  Post  | /menus/create |    ✔️    |      ✔️       |   ✔️    |  ✔️   |
|  Put   | /menus/update |    ✔️    |      ✔️       |   ✔️    |  ✔️   |
| Delete | /menus/delete |    ✔️    |      ✔️       |   ✔️    |  ✔️   |

### 📑 orders Routes [🔝](#-backend-for--restify-app)

| Method |     Router     | Endpoint | Documentation | Api Key | Token |
| :----: | :------------: | :------: | :-----------: | :-----: | :---: |
|  Get   | /orders/search |    ✔️    |      ✔️       |   ✔️    |  ❌   |
|  Post  | /orders/create |    ✔️    |      ✔️       |   ✔️    |  ✔️   |
|  Put   | /orders/update |    ✔️    |      ✔️       |   ✔️    |  ✔️   |
| Delete | /orders/delete |    ✔️    |      ✔️       |   ✔️    |  ✔️   |

### 💵 Payment Routes [🔝](#-backend-for--restify-app)

| Method |      Router      | Endpoint | Documentation | Api Key | Token |
| :----: | :--------------: | :------: | :-----------: | :-----: | :---: |
|  Get   | /payments/all    |    ✔️    |      ✔️       |   ✔️    |  ❌   |
|  Get   | /payments/id     |    ✔️    |      ✔️       |   ✔️    |  ❌   |
|  Post  | /payments/create |    ✔️    |      ✔️       |   ✔️    |  ✔️   |
|  Put   | /payments/update |    ✔️    |      ✔️       |   ✔️    |  ✔️   |
| Delete | /payments/delete |    ✔️    |      ✔️       |   ✔️    |  ✔️   |

### 🍽️ Restaurant Routes [🔝](#-backend-for--restify-app)

| Method |       Router        | Endpoint | Documentation | Api Key | Token |
| :----: | :-----------------: | :------: | :-----------: | :-----: | :---: |
|  Get   | /Restaurants/all    |    ✔️    |      ✔️       |   ✔️    |  ❌   |
|  Get   | /Restaurants/id     |    ✔️    |      ✔️       |   ✔️    |  ❌   |
|  Get   | /Restaurants/search |    ✔️    |      ✔️       |   ✔️    |  ❌   |
|  Post  | /Restaurants/create |    ✔️    |      ✔️       |   ✔️    |  ✔️   |
|  Put   | /Restaurants/update |    ✔️    |      ✔️       |   ✔️    |  ✔️   |
| Delete | /Restaurants/delete |    ✔️    |      ✔️       |   ✔️    |  ✔️   |

### 🎎 Roles Routes [🔝](#-backend-for--restify-app)

| Method |     Router     | Endpoint | Documentation | Api Key | Token |
| :----: | :------------: | :------: | :-----------: | :-----: | :---: |
|  Get   | /roles/search |    ✔️    |      ✔️       |   ✔️    |  ❌   |
|  Post  | /roles/create |    ✔️    |      ✔️       |   ✔️    |  ✔️   |
|  Put   | /roles/update |    ✔️    |      ✔️       |   ✔️    |  ✔️   |
| Delete | /roles/delete |    ✔️    |      ✔️       |   ✔️    |  ✔️   |

### 🎏 States Routes [🔝](#-backend-for--restify-app)

| Method |     Router     | Endpoint | Documentation | Api Key | Token |
| :----: | :------------: | :------: | :-----------: | :-----: | :---: |
|  Get   | /states/search |    ✔️    |      ✔️       |   ✔️    |  ❌   |
|  Post  | /states/create |    ✔️    |      ✔️       |   ✔️    |  ✔️   |
|  Put   | /states/update |    ✔️    |      ✔️       |   ✔️    |  ✔️   |
| Delete | /states/delete |    ✔️    |      ✔️       |   ✔️    |  ✔️   |

### 🎆 Tables Routes [🔝](#-backend-for--restify-app)

| Method |     Router     | Endpoint | Documentation | Api Key | Token |
| :----: | :------------: | :------: | :-----------: | :-----: | :---: |
|  Get   | /tables/search |    ✔️    |      ✔️       |   ✔️    |  ❌   |
|  Post  | /tables/create |    ✔️    |      ✔️       |   ✔️    |  ✔️   |
|  Put   | /tables/update |    ✔️    |      ✔️       |   ✔️    |  ✔️   |
| Delete | /tables/delete |    ✔️    |      ✔️       |   ✔️    |  ✔️   |
