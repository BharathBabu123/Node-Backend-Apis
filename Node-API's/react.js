const pg = require('pg');                                                          //npm install pg
const url='postgres://postgres:Admin@123@localhost:5432/postgres';
const client =  new pg.Client(url);
client.connect(function(err){
if(err){
return console.error('Please Give Me Valid Url');
}
});


function InsertData(req,res){
    var user ={
     id:req.body.id,
     name:req.body.name,
     email:req.body.email,
     phone:req.body.phone
    }
let InseartQuarry=`INSERT INTO react.reactapi(name,email,phone) VALUES
                    ('${user.name}','${user.email}','${user.phone}')`;
               //1....**IN Promise Formate**/
client.query(InseartQuarry)
.then(result =>res.send(user))
.catch(err =>console.error('Please Enter A Valid Query'+err))
}


function Delete (req,res){
    id=req.body.id;
    let DeleteQuary = `DELETE from react.reactapi where id = ${id}`;
           //**IN Promise Format**/
     client.query(DeleteQuary)
     .then(result =>res.send(result.rows))
     .catch(err =>console.error(err))
}


function Update (req,res){
        var user ={
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone
           }
    let UpdateQuary=`UPDATE react.reactapi set name='${user.name}',
                      email='${user.email}' where phone='${user.phone}'`;
                      //**IN Promise Formate**/
    client.query(UpdateQuary)
    .then(result =>res.send(user))
    .catch(err =>console.error("Please Give Me A Valid Update Query"+err))
}


function Retrive(req,res){
    //**IN Promise Format**/
let RetriveQuary = `SELECT * from react.reactapi`;
client
.query(RetriveQuary)
.then(result => res.send(result.rows))
.catch(err => console.error('Please Enter A Valid Query'+err))
}


function singleid(req,res){
    id=req.body.id;
let SigleIdQurey = `SELECT * from react.reactapi where id=${id}`
client.query( SigleIdQurey)
.then(result =>res.send(result.rows))
.catch(err=>console.error("PLease Provide a Valid SingleId URL"+err))
}




module.exports = {add : InsertData , dlt : Delete , updte : Update , rtve : Retrive , sngle:singleid}