
const express= require('express');
var app = express();
var cors=require('cors');
app.use(cors());
const bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const mainapi = require('./react');


app.post("/InsertData",mainapi.add);
app.post("/DeleteData/:id",mainapi.dlt);   
app.put('/UpDateData',mainapi.updte);
app.get("/RetriveingData",mainapi.rtve);
app.put("/SingleId",mainapi.sngle);

app.listen(7777, function () {

    console.log(" App listening at http://localhost:7777")
 });