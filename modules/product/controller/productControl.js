const connection = require('../../../configuration/config');


// get all product
const getAllProduct = (req, res, next) => {
    const { id } = req.query;
    let query = '';
    if (id) {
        query = `SELECT * FROM product WHERE product_id=${id}`
    } else {
        query = 'SELECT * FROM product'
    }
    connection.execute(query, (err, data) => {
        if (err) throw new Error(err);
        res.json({ message: "Success", data })

    })


}

// Add Product(check if userID exist  in user table and  categoryID  exist in category table)
const addProduct = (req, res, next) => {
    const { name, title, description, price, createdBy, category } = req.body;
    let query = `SELECT product.category,product.createdBy FROM product inner join category on product.category = category.id
    inner join users on product.createdBy = users.id
    where category.id=${category} and users.id=${createdBy}`
    connection.execute(query, (err, data) => {
        if (err) throw new Error(err);
        console.log(data);
        if (data.length) {
            query = `INSERT INTO product (name,title,description,price,createdBy,category)VALUES
             ('${name}','${title}','${description}','${price}','${createdBy}','${category}')`
            if (err) throw new Error(err);
            res.json({ message: " Product Added Successfully", data });

        }
    })
}



//Deleted Product
const deleteProduct = (req, res, next) => {
    const { id } = req.params;
    let query = `SELECT * FROM product WHERE product_id=${id}`;
    connection.execute(query, (err, data) => {
        if (err) throw new Error(err);
        if (data.length) {
            query = `DELETE FROM product WHERE product_id=${id};`
            connection.execute(query, (err, data) => {
                if (err) throw new Error(err);
                res.json({ message: " Product Deleted Successfully", data });
            })
        } else {
            res.json({ message: "Product Not Found" })
        }
    })
};

//update Product check if new categoryID exist in category table
const updateProduct = (req, res, next) => {

    const { id } = req.params;
   let { title, description, price, category } = req.body;
    let query = `SELECT product.category,category.title FROM product inner join category on product.category=category.id
    where product.category=${category}`;
    connection.execute(query, (err, data) => {
        if (err) throw new Error(err);
        if (data.length) {
         query =`UPDATE product set title='${title}',description='${description}',price=${price},category=${category} where product_id=${id}`,
                connection.execute(query, (err, data) => {
                    if (err) throw new Error(err);
                    res.json({ message:"Product Updated Successfully", data })
                })
        } else {
            res.json({ message:'Product Not Found' });
        }
    });

};

// Get By Category ID // title
const getByCategory = (req, res, next) => {
    const { id, title } = req.query;
    if (id) {
        let query = `SELECT * FROM product inner join category on category=${id}`
        connection.execute(query, (err, data) => {
            if (err) throw new Error(err);
            res.json({ message: "Success", data })
        })

    }
    if (title) {
        let query = `SELECT * FROM product inner join category on category.title ='${title}'`
        connection.execute(query, (err, data) => {
            if (err) throw new Error(err);
            res.json({ message: "Success", data })
        })

    }



}

// get all user products by category id 

const getUserProducts = (req, res, next) => {
    const { category, user } = req.params;
    let query = `SELECT product.createdBy,users.user_name,product.name,product.title,category.title,product.category,product.product_id 
     FROM product inner join users on product.createdBy = users.id 
     inner join category on product.category = category.id
     where category.id =${category} AND users.id=${user}`
    connection.execute(query, (err, data) => {
        if (err) throw new Error(err)
        res.json({ message: "Success", data })
    })

}

module.exports = {
    getAllProduct,
    addProduct,
    deleteProduct,
    getByCategory,
    getUserProducts,
    updateProduct
}
