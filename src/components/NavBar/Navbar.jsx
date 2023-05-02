import React from 'react';
import { NavLink} from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai'
import { BsCart4 } from 'react-icons/bs'
import { BsBoxes } from 'react-icons/bs'
import { RiMoneyDollarBoxLine } from 'react-icons/ri'
import { FaUsers } from 'react-icons/fa'
import NavStyled from './NavStyled';

const Navbar = ({idUser}) => {
  return (
    <NavStyled>
        <NavLink to={`/main/${idUser}/`}>
          <div><AiFillHome/></div>
          <span>Home</span>
        </NavLink>

        <NavLink to={`/main/${idUser}/sell`}>
          <div>
            <BsCart4/>
          </div>
          <span>Vendas</span>  
        </NavLink>

        <NavLink to={`/main/${idUser}/storage`}>
          <div>
            <BsBoxes/>
          </div>
        <span>Estoque</span>
        </NavLink>

        <NavLink to={`/main/${idUser}/finance`}>
          <div><RiMoneyDollarBoxLine/></div>
          <span>Financeiro</span>  
        </NavLink>

        <NavLink to={`/main/${idUser}/users`}>
          <div><FaUsers/></div>
          <span>Usuários</span> 
        </NavLink>
      
    </NavStyled>
  )
}

export default Navbar
