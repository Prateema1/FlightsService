# Basic REST API and CRUD Implementation

Every table is going to be considered a model. So, in order to create a table, we have to create a model. We can do that:

- ```
  npx sequelize model:generate --name ModelName -- attributes col1:datatype,col2:datatype
  ```

On executing this command, it create a model file and also migration file for that model.

Note: This will not actually create tables in the database yet.

We have to execute the following migration command:

-- -- npx sequelize db:migrate

Now, using the migration file, it tells that using this version create the table i.e in the next model commit there will be table created with the listed properties and if we want to make changes we need to do it before commit.

We can certainly revert the changes though using:
-- npx sequelize db:migrate:undo

## DB level and JavaScript level constraint

- The contraints applied in the model.js file will be JavaScript level constraint whereas if we need the constraint in our db table too, then we need to apply that in the migration file too.

## Apply migration to create table

- Applies all the pending migration to our database. It knows and tracks using the unique number present in migration filename.

- ```
  npx sequelize db:migrate
  ```

## How To Undo The Last Migration

-```
npx sequelize db:migrate:undo

```

```

## Adding migration and Undo Migration

-- Adding : async up function is applied

-- Undo: async down function is applied. (It internally says drop the table, we might loose the data, so we have to be careful)

## seeders folder

-- use case: when testing we prepare seeders folder to test.

-- Command to create seeder file
--- npx sequelize seed: generate --n
ame add-airplanes
-- This will generate a custom seeder file where we can bulkInsert test data using async up function and also either bulk delete using async down function if we pass empty object else we can use Operator object provided by sequelize to delete based on conditional operators.

## Database level change, update previous model

-- npx sequelize migration:generate --name update-city-airport-association

-- Migration gives us timestamping or versioning of our database schema.

## Power of ORM

--

## Features

### Flights Search Service

-- flights model properties
-- airplane id
price
flightname : UK303
Destination airport , arrival airport
flight time

## Creating seed files

- npx sequelize seed:generate --name seedname
