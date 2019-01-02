## Basic backend API for simple movie MongoDB database.

Database is created on localhost (this will be configurable in the future) and requires active installation of MongoDB.

This API is able to use four basic HTTP methods (get, post put and delete).

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