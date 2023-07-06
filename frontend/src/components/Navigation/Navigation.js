import React from 'react'
import styled from 'styled-components'
import avatar from '../../images/Avatar.png'
import { menuItems } from '../../utils/menuItems'
import {signout} from '../../utils/icons'
import { Link } from 'react-router-dom'
import SignUp from '../SignUp/SignUp'
import SignOut from '../SignOut/SignOut'

function Navigation({active, setActive}) {
  return (
    <NavStyled>
        <div className='user-con'>
        <img src={avatar} alt=""  />
            <div className='text'>
                <h2>Vanya</h2>
                <p>My Money</p>
            </div>
        </div>
        <ul className='menu-items'>
            {menuItems.map((item) => {
                return <Link to={item.link} className='link' id='link'>
                <li 
                    key = {item.id}
                    onClick={() => setActive(item.id)}
                    className={active === item.id ? 'active': ' '}
                >   
                    {item.icon}
                    <span>{item.title}</span>
                </li>
                </Link>
            })}
        </ul>
        <div className="bottom-nav">
            <Link to="/SignOut" className='link' id='link'>
            <li>
                {signout} Sign Out
            </li>
            </Link>
        </div>
    </NavStyled>
  )
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 374px;
    height: 100%;
    background: rgba(221, 236, 252, 0.54);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    .user-con{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img{
            width: 70px;
            height: 70px;
            border-radius: 100%;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: 0.2rem;
            box-shadow: 0px 1px 17px rgba(0,0,0,0.06);
        }
        h2{
            color: rgba(34,34,96,1);
        }
        p{
            color: rgba(34,34,96,0.6);
        }
    }

    .menu-items{
        flex: 1;
        display: flex;
        flex-direction: column;
        .link{
            text-decoration : none;
        }
        li{
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: 0.6rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.4s ease-in-out; 
            color: rgba(34,34,96,0.6);
            padding-left: 1rem;
            position: relative;
            i{
                color: rgba(34,34,96, 0.6);
                font-size: 1.4rem;
                transition: all .4s ease-in-out;
            }
        }
    }
    .menu-items li.active {
        background-color: rgba(34,34,96,0.2);
        border-radius: 20px;
      }
      
      .menu-items li:hover {
        background-color: rgba(34,34,96,0.2);
        border-radius: 20px;
      }
      
      .menu-items li span {
        margin-left: 10px;
      }

    .active{
        color: rgba(34,34,96,1) !important;
        i{
            color: rgba(34,34,96,1) !important;
        }
        &::before{
            content: " " ;
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #222260;
            border-radius: 0 10px 10px 0;
        }
    }
    .link{
        text-decoration : none;
    }
`;

export default Navigation
