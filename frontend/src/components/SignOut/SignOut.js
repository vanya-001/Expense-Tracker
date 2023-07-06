import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

function SignOut() {
    const navigate = useNavigate();
    async function handleLogin(){
        navigate('/Login');
    }
  return (
    <SignOutStyled>
        <h1>Thank You For Loging In!</h1>
        <h1>Hope to see you next time!</h1>
        <Button 
                    name = {'SignUp'}
                    bPad = {'.8rem 1.6rem'}
                    bRad = {'30px'}
                    bg = {'var(--color-accent)'}
                    color = {'#fff'}
                    hColor = {'var(--color-blue)'}
                    onClick={handleLogin}
                />
    </SignOutStyled>
  )
}

const SignOutStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90vh;

    h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: var(--color-blue);
    text-align: center;
    }
`;
export default SignOut
