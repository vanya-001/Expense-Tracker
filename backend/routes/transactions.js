const { addIncome, getIncome, deleteIncome } = require('../controllers/income');

const R1 = require('express').Router();




R1.post('/add-income', addIncome)

    .get('/get-income', getIncome)
    .delete('/delete-income/:id', deleteIncome)

module.exports = R1; 
