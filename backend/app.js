const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Cors = require('cors');
const sequelize = require('./util/database');
const formroute =require('./routes/formroute');

app.use(Cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(formroute);

sequelize.sync().then(res=>app.listen(3000)).
catch(err=>console.log(err));
