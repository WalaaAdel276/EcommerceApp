const connection = require('../../../configuration/config');

//GET CATEGORY
const getCategory = (req, res, next) => {
    const { id } = req.query;
    let query = '';
    if (id) {
        query = `SELECT * FROM category WHERE id=${id}`
    } else {
        query = 'SELECT * FROM category'
    }
    connection.execute(query, (err, data) => {
        if (err) throw new Error(err);
        res.json({ message: "Success", data })

    })

}


// create category  (id ,title , description )

const addCategory = (req, res, next) => {
    const { title, description } = req.body;

    let query = `INSERT INTO category (title,description) VALUES('${title}','${description}')`
    connection.execute(query, (err, data) => {
        if (err) throw new Error(err);
        res.json({ message: "Added Successfully", data })

    })

}


// 3- edit category  
const updateCategory = (req, res, next) => {
    const { id } = req.params;
    const { title, description } = req.body;
    let query = `SELECT * FROM category WHERE id=${id}`
    connection.execute(query, (err, data) => {
        if (err) throw new Error(err);
        if (data.length) {
            query = `update category  set title='${title}' , description='${description}'
             where id =${id}`
            connection.execute(query, (err, data) => {
                if (err) throw new Error(err);
                res.json({ message: "Updated Successfully", data })


            })
        } else {
            res.json({ message: "Category Not Found" })
        }

    })

}

// 4-delete  Category By ID
const deleteCategory = (req, res, next) => {
    const { id } = req.params;
    let query = `SELECT * FROM category WHERE id=${id}`
    connection.execute(query, (err, data) => {
        if (err) throw new Error(err);
        if (data.length) {
            let query = `DELETE FROM category WHERE id = ${id}`
            connection.execute(query, (err, data) => {
                if (err) throw new Error(err);
                res.json({ message: "Deleted Successfully" })

            })
        } else {
            res.json({ message: "Category Not Found" })
        }

    })


}


module.exports = {
    getCategory,
    addCategory,
    updateCategory,
    deleteCategory
}