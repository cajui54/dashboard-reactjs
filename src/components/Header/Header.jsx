import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {BiTimeFive, BiUserCircle} from 'react-icons/bi'
import HeaderStyled from './HeaderStyled';
import Navbar from '../NavBar/Navbar';

const Header = ({users, idUser}) => {
    
    const dataUser = users && users.find(user => user.id == idUser);
    
  return (
    <HeaderStyled>
      <Link className='container-logo'>
        <BiTimeFive className='icon'/>
        <div>
          <h2>Altas Horas</h2>
          <h3>Distribuidora</h3>
        </div>
      </Link>

      <div className='container-user'>
        <p>Atendente:</p>
        {dataUser && <span><BiUserCircle className='icon'/>{dataUser.name}</span>}
      </div>

      <Navbar idUser={idUser}/>
    </HeaderStyled>
  )
}

export default Header
