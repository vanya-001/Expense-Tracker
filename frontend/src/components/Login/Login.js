import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Button from '../Button/Button';
import { InnerLayout } from '../../styles/Layouts'; 
// import SignUp from '../SignUp/SignUp';
// import Dashboard from "../Dashboard/Dashboard";
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const BASE_URL = "http://localhost:5000/api/v1/";

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [showDashboard, setShowDashboard] = useState(false);
    const navigate = useNavigate();

    async function handleSignup(){
        navigate('/SignUp')
    }

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
                if(res.data != null){
                    navigate('/Dashboard');
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

  return (
    <LoginStyled>
        <InnerLayout>
            <div className="signup">
                <h1>Login</h1>
                <form action="POST" method="post">
                    <input id="input-control" type="email" onChange={(e) =>{setEmail(e.target.value)}} placeholder="Email" name="" />
                    <input type="password" onChange={(e) => {setPassword(e.target.value)}} placeholder='Password' name="" id="input-control" />

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
                <p>OR</p>
                <div className="submit-btn">
                    <Button 
                        name = {'SignUp'}
                        bPad = {'.8rem 1.6rem'}
                        bRad = {'30px'}
                        bg = {'var(--color-accent)'}
                        color = {'#fff'}
                        hColor = {'var(--color-blue)'}
                        onClick={handleSignup}
                    />
                </div>
            </div>
        </InnerLayout>
    </LoginStyled>
  )
}

const LoginStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90vh;


    h1 {
    text-align: center;
    }

    input{
    position: relative;
    display: block;
    left: 40%;
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
    .input-control input {
    width: 100%;
    }

    .submit-btn button{
    margin-top: 1rem;
    position: relative;
    top: 50%;
    left: 45%;
    }

    a:link,
    a:visited {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f44336;
    color: white;
    padding: 14px 25px;
    text-align: center;
    text-decoration: none;
    }

    a:hover {
    color: darkgreen;
    text-decoration: underline;
    background-color: lightgreen;
    }

    p {
    text-align: center;
    }
`;

export default Login
