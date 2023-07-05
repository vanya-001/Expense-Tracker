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
            await axios.addDetail(BASE_URL, {email,password})
            .then(res=>{
                if(res.data="exist"){
                    <meta http-equiv="refresh" href =
                    "frontend\src\components\Dashboard\Dashboard.js" />
                }
                else if(res.data = "Does not exist"){
                    alert("User have not signed up!")
                }
            })
            .catch(e=>{
                alert("Wronf Details")
                console.log(e);
            })

        } catch (e) {
            console.log(e);
        }
    }
  return (
    <LoginStyled>
        <div className="signup">
            <h1>Login</h1>
            <form action="POST" method="post">
                <input type="email" onChange={(e) =>{setEmail(e.target.value)}} placeholder="Email" name="" id="" />
                <input type="password" onChange={(e) => {setPassword(e.target.value)}} placeholder='Password' name="" id="" />
                <input type="submit" onClick={submit} />
            </form>
            <br />
            <p>OR</p>
            <br />
            <a href="frontend\src\components\SignUp\SignUp.js" id="link">SignUp</a>

        </div>
    </LoginStyled>
  )
}

const LoginStyled = styled.div`

`;

export default SignUp
