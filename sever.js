'use strict'

const express = require ('express');
const cors = require ('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT;
const {getDegimon,
    addFavorite,
    getFavorite,
    deleteFavorite,
    updateFavorite} = require('./controller/degimon.controller')




const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test2',
 {useNewUrlParser: true, useUnifiedTopology: true});



app.get('/' , (req , res)=>{
res.send('alive')
});

app.get('/degimon',getDegimon)

app.get('/favorite',getFavorite)

app.post('/favorite',addFavorite)

app.delete('/favorite/:name',deleteFavorite)

app.put('/favorite/:name',updateFavorite)



app.listen(port)