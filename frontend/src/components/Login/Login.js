import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Button from '../Button/Button';
import { InnerLayout } from '../../styles/Layouts'; 
import SignUp from '../SignUp/SignUp';
import Dashboard from "../Dashboard/Dashboard";

const BASE_URL = "http://localhost:5000/api/v1/";

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e){
        e.preventDefault();

        try {      
            const data = {
                email: email,
                password: password
            }
      
            await axios.post(`${BASE_URL}get-detail`, data)
            .then(res=>{
                console.log(email);
                console.log(password);
                console.log(res);
                if(res.data !== null){
                    <Dashboard />
                }
                else{
                    alert("User have not signed up!")
                }
            })
            .catch(e=>{
                alert("Wrong Details")
                console.log(e);
            })

        } catch (e) {
            console.log(e);
        }
    }
    // const handleSignUp = () => {
    //     setShowSignUp(true);
    //   };

  return (
    <LoginStyled>
        <InnerLayout>
            <div className="signup">
                <h1>Login</h1>
                <form action="POST" method="post">
                    <input id="input-control" type="email" onChange={(e) =>{setEmail(e.target.value)}} placeholder="Email" name="" />
                    <input type="password" onChange={(e) => {setPassword(e.target.value)}} placeholder='Password' name="" id="input-control" />
                    <br />
                    <div className="submit-btn">
                        
                        <Button 
                            name = {'Submit'}
                            bPad = {'.8rem 1.6rem'}
                            bRad = {'30px'}
                            bg = {'var(--color-accent)'}
                            color = {'#fff'}
                            hColor = {'var(--color-blue)'}
                            onClick={submit}
                        />
                    </div>
                </form>
                <br />
                <p>OR</p>
                <br />
                {/* <Button 
                    name = {'SignUp'}
                    bPad = {'.8rem 1.6rem'}
                    bRad = {'30px'}
                    bg = {'var(--color-accent)'}
                    color = {'#fff'}
                    hColor = {'var(--color-blue)'}
                    onClick={handleSignUp}
                /> */}
                 <a href={SignUp} id="link">SignUp</a> 

            </div>
        </InnerLayout>
    </LoginStyled>
  )
}

const LoginStyled = styled.div`
    h1{
        display: center;
        overflow: auto;
    }
    input{
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
    .submit-btn{
    button{
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        &:hover{
            background: var(--color-green) !important;
            }
        }
    }
    a:link, a:visited {
        background-color: #f44336;
        color: white;
        padding: 14px 25px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
    }
    a:hover{
        color: dark green;
        text-decoration: underline;
        background-color: lightgreen;
    }
    p{
        display: center;
        font-size: large;
    }
    
`;

export default Login
