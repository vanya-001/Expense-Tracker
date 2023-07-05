const { addExpense, getExpense, deleteExpense } = require('../controllers/expenses');
const { addIncome, getIncome, deleteIncome } = require('../controllers/income');
const {addDetailSignup, getDetail} = require('../controllers/Signup');

const R1 = require('express').Router();




R1.post('/add-income', addIncome)

    .get('/get-income', getIncome)
    .delete('/delete-income/:id', deleteIncome)
    .post('/add-expense', addExpense)
    .get('/get-expense', getExpense)
    .delete('/delete-expense/:id', deleteExpense)
    .get('/get-detail', getDetail)
    .post('/post-detail', addDetailSignup)

module.exports = R1; 
