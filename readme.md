# DAW BIKES EXPRESS

## Introduction

Welcome to the educational project built with Node.js and Express! This project is a bike aggregator, a tool to help people find and discover new bikes. The API allows for easy management of bikes, brands, and shops, making it a great tool for bike enthusiasts. With a clean and intuitive design, our API makes it easy to integrate bike information into any application. This project is made by a student as a learning exercise, and we hope it will be helpful for others looking to learn about building APIs with Node.js and Express. Thanks for trying out our project!

---

## Get started

To start running the project, make sure to do these steps:

- Set up the .env file, for a quickstart you can run the next command
  - `cp .env.example .env` (or the equivalent to copy a file in your computer)

- Install all the dependencies:

  - `npm install`

### Connect your own Database
At this point you have the project started on localhost, but you are using an example db. If you want to have your own DataBase with your own data, you have to change on .env all the information about your database.

Once you've connected the project with the database, you have to run the next commands: 

- Set up the dattabase
    - `npm run migrate`
    - `npm run db:seed` (if you want dummy data for testing)

### .env configurations

- `NODE_ENV`

  - The node environment, this with the DB parameter will determine which database are you going to operate, there are 2 options parameters, production and development

- `DB_DRIVER`

  - The database driver, it has only been tested with pg driver, but it should be compatible with any driver of knex: mysql, sqlite3, pg, oracle...

#### You will have to specify this parameters for prod and dev just as it is on .env.example

- `DB_HOST`

  - you have the specify the ip or url where the db is located- `DB_HOST`

  - you have the specify the ip or url where the db is located

- `DB_USER`

  - you have the specify your username on the database, have in mind that for the correct operation of the app you need this user to have all the permissions the app needs (modify schema, read, write...) 
  
- `DB_PASSWORD`

  - you have the specify the password of the user you've provided

- `DB_NAME`

  - you have the specify the name of the database you want to operate on 
  
- `DB_PORT`

  - you have the specify the port where the db is located

- Finally, you can use:

  `npm run start`

---

## Technologies

| Characteristics    | Technologies     |
| ------------------ | ---------------- |
| Languages          | JavaScript       |
| Framework          | Express          |
| ORM                | Knex             |
| Database           | PostgreSQL       |
| Documentation      | OpenAPI          |

---

## Database scheme

![scheme](./doc/static/scheme.png)

---

## Development methodology

This project was developed using a cascade methodology, as the requirements of the app were clear from the start. However, this approach is not recommended unless the requirements are 100% clear and you have prior experience working in the domain of your project.

To keep track of the development process, branches were created for each of the layers of the application, as well as for critical fixes. Conventional commits were used to keep track of the changes made to the code, making it easier to identify and fix future errors.