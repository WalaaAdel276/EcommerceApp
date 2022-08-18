const {getAllProduct,addProduct,deleteProduct,getByCategory,getUserProducts,updateProduct } = require("../controller/productControl");
const Router  = require("express").Router();

Router.get("/getAllProduct", getAllProduct);
Router.post("/addProduct",addProduct)
Router.delete("/deleteProduct/:id",deleteProduct);
Router.put("/updateProduct/:id",updateProduct);
Router.get("/getByCategory",getByCategory);
Router.get("/getUserProducts/:category/:user",getUserProducts)



module.exports = Router;