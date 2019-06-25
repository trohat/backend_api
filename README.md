## Basic backend API for simple movie database

This API is created in Node.js with the help of Express. The database used is MongoDB with mongoose. 

This API is used as a base for [Node.js articles on ITnetwork](https://www.itnetwork.cz/javascript/nodejs/rest-api-soap-graph-a-json).

Database is created on localhost (this will be configurable in the future) and requires active installation of MongoDB.

This API is able to use four basic HTTP methods (get, post, put and delete).

For validation, the Joi module as well as implicit mongoose validation is used.

To install dependencies, type `npm install` in the app root directory.

### Endpoints:
(replace the expression in parentheses as appropriate)


#### GET requests:
to get all movies:
```
localhost:(port_number)/api/movies
```
or to get one particular movie:
```
localhost:(port_number)/api/movies/(movie_id)
```

#### POST requests:
```
localhost:(port_number)/api/movies
```

#### PUT requests:
```
localhost:(port_number)/api/movies/(movie_id)
```

#### DELETE requests:
```
localhost:(port_number)/api/movies/(movie_id)
```
