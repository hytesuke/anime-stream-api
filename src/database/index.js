'use strict'
// require mongoose module
import mongoose from 'mongoose';

// require chalk module to give colors to console text
import chalk from 'chalk';
const connected = chalk.bold.cyan;
const error = chalk.bold.yellow;
const disconnected = chalk.bold.red;
const termination = chalk.bold.magenta;

// import config file

// require database URL from properties file
const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB
} = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
};

//const url = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}/${MONGO_DB}?retryWrites=true&w=majority`;
const url = process.env.MONGO_DB_URL;
console.log(url);
// connection to mongodb 
mongoose.connect(url, options);

// mongodb instance 
const db = mongoose.connection;
db.on('connected', () => {
    console.log(connected("Mongoose default connection is open"), url);
});

db.on('error', (err) => {
    console.log(error("Mongoose default connection has occured "+err+" error"));
    throw err
});

db.on('disconnected', () => {
    console.log(disconnected("Mongoose default connection is disconnected"));
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log(termination("Mongoose default connection is disconnected due to application termination"));
        process.exit(0)
    });
});
process.on('SIGTERM', () => {
    db.close();
});
process.on('SIGUSR2', () => {
    db.close();
});
process.on('exit', () => {
    db.close();
});