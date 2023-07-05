import React, {useState} from 'react';
import styled from 'styled-components';
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
    </SignUpStyled>
  )
}

const SignUpStyled = styled.div`

`;

export default SignUp
