const express = require('express')
const serviceRouter = require('./route/services')
const purposeRouter = require('./route/purpose')
const datatypeRouter = require('./route/datatype')
const webappRouter = require('./route/webappRouter')
const app = express()
const dotenv = require('dotenv');


const connectDB = require('./database/connection');
dotenv.config( { path : 'config.env'} )

connectDB();

const api = "/api";

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))


  app.use('/', webappRouter);

  // API Routes
  app.use(`${api}/services`, serviceRouter);
  app.use(`${api}/purposes`, purposeRouter);
  app.use(`${api}/datatypes`, datatypeRouter);

  
  app.listen(5000)