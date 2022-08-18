const { getCategory, addCategory, updateCategory,deleteCategory } = require("../controller/categoryControl");

const  Router  = require("express").Router();

Router.get('/getCategory',getCategory);
Router.post('/addCategory',addCategory)
Router.put('/updateCategory/:id',updateCategory)
Router.delete('/deleteCategory/:id',deleteCategory)



module.exports = Router;