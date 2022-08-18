 const Router = require('express').Router();
const { getUsers,updateUser ,addUser,deleteUser} = require("../controller/usersControl");



 Router.get('/getUsers',getUsers);
 Router.post('/addUser',addUser)
 Router.put('/updateUser/:id',updateUser)
Router.delete('/deleteUser/:id',deleteUser)






 module.exports = Router;