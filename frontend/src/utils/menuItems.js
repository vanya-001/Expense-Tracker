import {dashboard, expenses, transactions, trend} from '../utils/icons'

export const menuItems = [
    {
        id: 1,
        title: 'Login',
        icon: dashboard,
        link: '/Login'
    },
    {
        id: 2,
        title: "View Transactions",
        icon: transactions,
        link: "/Dashboard"
    },
    {
        id: 3,
        title: "Incomes",
        icon: trend,
        link: "/Incomes"
    },
    {
        id: 4,
        title: "Expenses",
        icon: expenses,
        link: "/Expenses" 
    }


]