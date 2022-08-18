// Assignment 6
// Create 3 tables User, product ,categories 
// 1_ create user  (id ,userName , email , password , phone )
// 2- edit user (userName , password , phone)
// 3-delete user By ID
// ====
// 4- create category  (id ,title , description)
// 5-edit category 
// 6-delete category 
// ≈=======
// 7- Create  product (name , title , description ,price , FK{ createdBy = userID}, FK {category = categoryID} , time)
//  for each product contain title description  price  , createdBy =userID  reference to user table  and  category=categoryID  reference to categories  table   and 
// check if userID exist  in user table and  categoryID  exist in category table
// 8- delete product  by id
// 9_edit product (title , description , price , category) and check if new categoryID exist in category table
// 10_ get product  by category 
// 11- get all user products by category id  
//  ≈=======Bonus point====
// search how to Create cart table contains  all product that user added to it  it should contain  fk userID reference to user table and FK productID reference to product table 

const express = require("express") ;
const app = express();
const usersRoutes = require('./modules/users/routes/usersRoutes');
const categoryRoutes =require('./modules/category/routes/categoryRoutes');
const productRoutes =require('./modules/product/routes/productRoutes')
const cartRoutes =require('./modules/cart/routes/cartRoutes')
app.listen(5000,()=>{
    console.log('App listening on port 5000!');
})

app.use(express.json());
app.use(usersRoutes,categoryRoutes,productRoutes,cartRoutes);

//cartID | memberID | itemID | shopID | cartQuant | cartDetail |     added
