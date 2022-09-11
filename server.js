const fs = require('fs');
const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT ||3000;

app.use(express.urlencoded ({extended:true}));
app.use(express.json());
app.use(express.static(__dirname));

require('./Develop/routes/routes');

app.listen(PORT,function(){
    console.log('app listened on port: '+PORT);
})