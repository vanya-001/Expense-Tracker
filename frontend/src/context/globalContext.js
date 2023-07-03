import React, { useContext, useState } from "react"
import axios from "axios"


const BASE_URL = "http://localhost:5000/api/v1/";

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpense] = useState([])
    const [error, setError] = useState(null)

    // calculate incomes
    const addIncome = async (income) => {
        try {
          const response = await axios.post(`${BASE_URL}add-income`, income);
          console.log(response.data);
        } catch (err) {
          setError(err.response.data.message);
        }
        getIncome()
      };
      

    const getIncome = async () => {
        const response = await axios.get(`${BASE_URL}get-income`)
        setIncomes(response.data);
        console.log(response.data);
    }

    const deleteIncome =async(id) => {
        const res = await axios.delete(`${BASE_URL}delete-income/${id}`)
        getIncome()
    }

    const totalIncome = () =>{
        let totalIncome =0;
        incomes.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }

    // Calculate expenses
    const addExpense = async (income) => {
        try {
          const response = await axios.post(`${BASE_URL}add-expense`, income);
          console.log(response.data);
        } catch (err) {
          setError(err.response.data.message);
        }
        getExpense()
      };
      

    const getExpense = async () => {
        const response = await axios.get(`${BASE_URL}get-expense`)
        setExpense(response.data);
        console.log(response.data);
    }

    const deleteExpense =async(id) => {
        const res = await axios.delete(`${BASE_URL}delete-expense/${id}`)
        getExpense()
    }

    const totalExpense = () =>{
        let totalIncome =0;
        expenses.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }

    const totalBalance = () =>{
        return totalIncome() - totalExpense()
    }

    const transactionHistory = () =>{
        const history = [...incomes, ...expenses]
        history.sort((a,b) =>{
            return new Date(b.createdAt) - new Date(a.createdAt)
        })
        return history.slice(0, 3)
    }

    console.log("total Income", totalIncome())

    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncome,
            incomes,
            deleteIncome,
            totalIncome,
            expenses,
            addExpense,
            getExpense,
            deleteExpense,
            totalExpense,
            totalBalance,
            transactionHistory,
            error, 
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}