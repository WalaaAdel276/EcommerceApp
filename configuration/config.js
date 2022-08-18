const mySql = require('mysql2');
const connection = mySql.createConnection({
    host:"localhost",
    port:"3306",
    database :"NewShop",
    user:"root",
    password:"271996"

});
module.exports= connection;