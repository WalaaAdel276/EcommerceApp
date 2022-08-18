const connection = require('../../../configuration/config')


//1-getUsers && singleUser 
const getUsers = (req, res, next) => {
    const { id } = req.query;
    let query = '';
    if (id) {
        query = `SELECT * FROM users WHERE id=${id}`
    } else {
        query = 'SELECT * FROM users'
    }
    connection.execute(query, (err, data) => {
        if (err) throw new Error(err);
        res.json({ message: "Success", data })

    })

}

// create user  (id ,userName , email , password , phone )

const addUser = (req, res, next) => {
    const {user_name, password, phone, email} = req.body;

    let query =`INSERT INTO users(user_name,email,password,phone)VALUES('${user_name}','${email}','${password}','${phone}')`
    connection.execute(query, (err, data) => {
        if (err) throw new Error(err);
        res.json({ message: "Added Successfully", data })

    })

}


// 3- edit user (userName , password , phone)
const updateUser = (req, res, next) => {
    const { id } = req.params;
    const { user_name, password, phone } = req.body;
    let query = `SELECT * FROM users WHERE id=${id}`
    connection.execute(query, (err, data) => {
        if (err) throw new Error(err);
        if (data.length) {
            query = `update users set user_name='${user_name}' , password='${password}',
    phone='${phone}' where id =${id};`
            connection.execute(query, (err, data) => {
                if (err) throw new Error(err);
                res.json({ message: "Updated Successfully", data })

            })

        } else {
            res.json({ message: "User Not Found" })
        }

    })

}

// 4-delete user By ID
const deleteUser = (req, res, next) => {
    const {id} = req.params;
    let query =`SELECT * FROM users WHERE id=${id}`
    connection.execute(query, (err, data) => {
        if (err) throw new Error(err);
        if (data.length) {
             query =`DELETE FROM users WHERE id = ${id}`
            connection.execute(query, (err, data) => {
                if (err) throw new Error(err);
                res.json({ message: "Deleted Successfully",data })

            })
        } else {
            res.json({ message: "User Not Found" })
        }

    })


}

module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser

}