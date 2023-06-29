import React, {useState} from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalContext';
function Form() {
    const {addIncome} = useGlobalContext()
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })

    const {title, amount, date, category, description} = inputState;

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
    }

    const handleSubmit = e=>{
        e.preventDefault()
        addIncome(inputState)
    }

  return (
    <FormStyled onSubmit={handleSubmit}>
        <div className="input-control">
            <input 
                type="text" 
                value={title}
                name = {'title'}
                placeholder='Enter Title'
                onChange={handleInput('title')}
            />
        </div>
        <div className="input-control">
            <input 
                type="text" 
                value={amount}
                name= {'amount'}
                id={'amount'}
                placeholder='Enter Amount'
                onChange={handleInput('amount')}
            />
        </div>
        <div className="input-control">
            <DatePicker 
                id='date'
                placeholderText='Enter a Date'
                selected={date}
                dateFormat='dd/MM/yyyy'
                onChange={(date) => {
                    setInputState({...inputState, date: date})
                }}
            />
        </div>
        <div className="input-control">
            <textarea 
                type="text" 
                value={description}
                name= {'description'}
                id={'description'}
                placeholder='Describe'
                cols='30'
                rows='4'
                onChange={handleInput('description')}
            />
        </div>
        <div className='.selects input-control'>
                <select required value = {category} name='category' id='category' onChange={handleInput('category')}>
                    <option value="" disabled> Select Option</option>
                    <option value="salary">Salary</option>
                    <option value="freelancing">Freelancing</option>
                    <option value ="investements">Investments</option>
                    <option value="stocks">Stocks</option>
                    <option value="bitcoin">Bitcoin</option>
                    <option value="bank">Bank</option>
                    <option value="youtube">YouTube</option>
                    <option value="other">Other</option>
                </select>
        </div>
        <div className="submit-btn">
            <button>Add Income</button>
        </div>
    </FormStyled>
  )
}

const FormStyled = styled.div``;
export default Form
