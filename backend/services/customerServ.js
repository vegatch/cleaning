// const db = require('../db')

// module.exports.getAllCustomers = async () =>{
//     const [rows]= await db.query('SELECT * FROM cleaningdb.person;')
//     .catch(err => console.log('error', err))
//     return rows
// }

// module.exports.getCustomerById = async (id) =>{
//     const [rows]= await db.query('SELECT * FROM cleaningdb.person where personID = ?', [id])
//     .catch(err => console.log('error', err))
//     return rows
// }

// module.exports.deleteCustomerById = async (id) =>{
//     const [rows]= await db.query('DELETE FROM cleaningdb.person where personID = ?', [id])
//     .catch(err => console.log('error', err))
//     return rows.affectedRows
// }

// module.exports.addOrUpdateCustomer = async () =>{
//     const [rows] = await db.query('CALL insertUpdate( ?, ?, ?, ?, ?);', 
//     [ obj.PersonID, obj.LastName, obj.FirstName, obj.Address, obj.City])
//     .catch(err => console.log('error', err))
//     return rows.affectedRows
   

// }


module.exports.addOrEditEmployee = async (obj) => {
    // let obj = req.body
    const sql = "SET @id =?;  SET @name =?;  SET @employee_code =?; SET @salary =?; \
    CALL insertUpdate( @id,  @name, @employee_code,  @salary )"
    db.query(sql, [obj.id, obj.name, obj.employee_code, obj.salary], (err, rows, field) =>{
        if(!err){
            rows.array.forEach(element => {
                if(element.constructor === Array)
                console.log('Inserted id : '+ element[0].id)
                res.status(201).send('Inserted id : '+ element[0].id)
            });
            res.send(rows)
            console.log('created' + rows)
        }
        else 
        console.log(err)

    })
    // return affectedRows;
}



const db = require('../db')

module.exports.getAllEmployees = async () => {
    const [records] = await db.query("SELECT * FROM employees")
    return records;
}

module.exports.getEmployeeById = async (id) => {
    const [[record]] = await db.query("SELECT * FROM employees WHERE id = ?", [id])
    return record;
}

module.exports.deleteEmployee = async (id) => {
    const [{ affectedRows }] = await db.query("DELETE FROM employees WHERE id = ?", [id])
    return affectedRows;
}

// module.exports.addOrEditEmployee = async (obj, id=true) => {
//     const [[[{affectedRows}]]] = await db.query("CALL insertUpdate(id,name,employee_code,salary)",
//         [obj.id, obj.name, obj.employee_code, obj.salary])
//     return affectedRows;
// }