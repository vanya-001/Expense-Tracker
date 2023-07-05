import React, {useState} from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { plus } from '../../utils/icons';
import Button from '../Button/Button';
import { useGlobalContext } from '../../context/globalContext';

function Form() {
    const {addIncome, getIncome, error, setError} = useGlobalContext()
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
        setError('')
    }

    const handleSubmit = e=>{
        e.preventDefault()
        addIncome(inputState)
        getIncome()
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        })

    }

  return (
    <FormStyled onSubmit={handleSubmit}>
        {error && <p className='error'>{error}</p>}
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
        <div className='selects input-control'>
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
        <div className="submit-btn">
            <Button 
                name = {'Add-Income'}
                icon = {plus}
                bPad = {'.8rem 1.6rem'}
                bRad = {'30px'}
                bg = {'var(--color-accent)'}
                color = {'#fff'}
                hColor = {'var(--color-blue)'}

            />
        </div>
    </FormStyled>
  )
}

const FormStyled = styled.form`
display: flex;
flex-direction: column;
gap: 2rem;
input, textarea, select{
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    padding: .5rem 1rem;
    border-radius: 5px;
    border: 2px solid #fff;
    background: transparent;
    resize: none;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    color: rgba(34, 34, 96, 0.9);
    &::placeholder{
        color: rgba(34, 34, 96, 0.4);
    }
}
.input-control{
    input{
        width: 100%;
    }
}

.selects{
    display: flex;
    justify-content: flex-end;
    select{
        color: rgba(34, 34, 96, 0.4);
        &:focus, &:active{
            color: rgba(34, 34, 96, 1);
        }
    }
}

.submit-btn{
    button{
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        &:hover{
            background: var(--color-green) !important;
        }
    }
}

`;

export default Form
