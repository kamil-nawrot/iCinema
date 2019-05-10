# iCinema - webapp for booking cinema tickets online
Find an alluring movie which is currently displayed on theatres, specify showtime, type and quantity of tickets, choose best seats, provide a few information about yourself - that's all you have to do to make a booking in **iCinema**. It provides both UI and server with MongoDB connected. Main goal was to simulate real-world booking proccess, taking care of every aspect of this operation.

# Features
## Movie Selection
To find all movies now being played in theatres, app make request to [The Movie Db API](https://www.themoviedb.org/documentation/api), to its `/now-playing` endpoint. Response includes all information needed and it's also used to generate view with movie details.

## Schedule
We don't have access to any cinema schedule, so the only way to simulate it was to fake it. All dates and times are being randomized on server-side on the runtime with (faker)[https://github.com/marak/Faker.js/]. There's also basic validation of the generated showtimes implemented to check if everything looks real.

# Built with
* [React](https://reactjs.org/) and [create-react-app](https://github.com/facebook/create-react-app) for user interface
* [node.js](https://nodejs.org) with [Express](https://expressjs.com) for backend server with basic API
* [MongoDB](https://mongodb.com) for storing information about all reservations

# Available scripts
Project contains both React client application and Node.js server, so first you need to install missing dependencies in root directory and in `client`. After it's finished, you can run whole app by simply running `npm start` in root directory. If you only want to run client-side or server-side, you can use `npm run client` and `npm run server`.
