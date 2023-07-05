import React, {useState} from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/v1/";

function SignUp() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e){
        e.preventDefault();

        try {
            
            await axios.post(BASE_URL, {email,password})
            .then(res=>{
                if(res.data="exist"){
                    alert("User already exists")
                }
                else if(res.data = "Does not exist"){
                    <meta http-equiv="refresh" href =
                    "frontend\src\components\Dashboard\Dashboard.js" />
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
    <SignUpStyled>
        <InnerLayout>
            <div className="signup">
                <h1>SignUp</h1>
                <form action="POST" method="post">
                    <input type="email" onChange={(e) =>{setEmail(e.target.value)}} placeholder="Email" name="" id="" />
                    <input type="password" onChange={(e) => {setPassword(e.target.value)}} placeholder='Password' name="" id="" />
                    <input type="submit" onClick={submit} />
                </form>
                <br />
                <p>OR</p>
                <br />
                <a href="frontend\src\components\Login\Login.js" id="link">LOGIN</a>

            </div>
            </InnerLayout>
    </SignUpStyled>
  )
}

const SignUpStyled = styled.div`
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

export default SignUp
