const express = require('express')
const cors = require('cors')
const app = express();
const connectDB = require('./config/db.js')
require('dotenv').config()

//Middlewares :

// Middleware to parse JSON data from request body
app.use(express.json()) 
// Middleware to parse URL-encoded form data from request body
app.use(express.urlencoded({extended:true}))

// Middleware to enable CORS for all routes
app.use(cors());

//connect to db
connectDB();


const useRoutes = require('./Routes/userRouter.js')
app.use('/',useRoutes)

module.exports = app;