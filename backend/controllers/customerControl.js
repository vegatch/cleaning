// const express = require('express');
// router = express.Router();
// const service = require('../services/customerServ')

// router.get('/', async (req, res) => {
   
//     const customers = await service.getAllCustomers()
//     if(customers.length === 0)
//         res.status(404).json('nothing found')
//     else
//     res.send(customers)
// })

// router.get('/:id', async (req, res) => {
   
//     const customer = await service.getCustomerById(req.params.id)
//     if(customer.length === 0)
//         res.status(404).json('no customer found wuth id = ' + req.params.id)
//     else
//     res.send(customer)
// })

// router.delete('/:id', async (req, res) => {
   
//     const affectedRows = await service.deleteCustomerById(req.params.id)
//     if(affectedRows === 0)
//         res.status(404).json('no customer found wuth id = ' + req.params.id)
//     else
//     res.send(req.params.id + '  deleted successfully')
// })

// router.post('/', async (req, res) => {   
//     await service.addOrUpdateCustomer(req.body)    
//     res.status(201).send('customer added successfully')


// })

// router.put('/:id', async (req, res) => {   
//     await service.addOrUpdateCustomer(req.body, req.params.id)    
//     res.status(201).send('customer added successfully')
// })
// module.exports = router;

const express = require('express'),
    router = express.Router()
    const db = require('../db')

const service = require('../services/customerServ')

//http://localhost:3000/api/employees/
router.get('/', async (req, res) => {
    const employees = await service.getAllEmployees()
    res.send(employees)
})

router.get('/:id', async (req, res) => {
    const employee = await service.getEmployeeById(req.params.id)
    if (employee == undefined)
        res.status(404).json('no record with given id : ' + req.params.id)
    else
        res.send(employee)
})

router.delete('/:id', async (req, res) => {
    const affectedRows = await service.deleteEmployee(req.params.id)
    if (affectedRows == 0)
        res.status(404).json('no record with given id : ' + req.params.id)
    else
        res.send('deleted successfully.')
})

router.post('/', async (req, res) => {
    await service.addOrEditEmployee(req.body)
    res.status(201).send('created successfully.')
})

// router.post('/',  (req, res) => {
//     let obj = req.body
//     const sql = "SET @id =?;  SET @name =?;  SET @employee_code =?; SET @salary =?; \
//     CALL insertUpdate( @id,  @name, @employee_code,  @salary )"
//     db.query(sql, [obj.id, obj.name, obj.employee_code, obj.salary], (err, rows, field) =>{
//         if(!err){
//             rows.array.forEach(element => {
//                 if(element.constructor === Array)
//                 console.log('Inserted id : '+ element[0].id)
//                 res.status(201).send('Inserted id : '+ element[0].id)
//             });
//             res.send(rows)
//             console.log('created' + rows)
//         }
//         else 
//         console.log(err)

//     })
// })

router.put('/:id', async (req, res) => {
    const affectedRows = await service.addOrEditEmployee(req.body, req.params.id)
    if (affectedRows == 0)
        res.status(404).json('no record with given id : ' + req.params.id)
    else
        res.send('updated successfully.')
})



module.exports = router;
