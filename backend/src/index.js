const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
/*Esse comando serve para o express transformar o json que vem no body da request em um 
objeto JS em que a aplicação posssa entender */
app.use(express.json());
app.use(routes);



app.listen(3333);