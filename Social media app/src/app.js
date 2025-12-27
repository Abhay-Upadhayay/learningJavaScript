const express = require('express');
const authRoute = require('./routes/auth.routes');
const userRoute = require('./routes/user.routes')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use('/', authRoute);

app.use('/user', userRoute);


module.exports = app;