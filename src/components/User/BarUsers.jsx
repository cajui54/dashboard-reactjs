import React from 'react'
import useFetch from '../../hooks/useFetch'
import { FaUsersCog, FaUsers, FaUserTie } from 'react-icons/fa';
import BarUsersStyled from './BarUsersStyled';


const BarUsers = () => {
  const {users} = useFetch();
  
  const getLengthTypeUser = (userType) => users.filter((user) => user.type === userType).length;
  
  return (
    <BarUsersStyled>
        <fieldset>
            <legend>Tipos de Usuários</legend>
            <div className='card'>
              <div className='counter-users'>
                <FaUsers className='iconUser'/>
                <strong> / { users && getLengthTypeUser('user')}</strong>
              </div>

              <h3>Usuários</h3>
              <h4>Comuns</h4>
            </div>

            <div className='card'>
              <div className='counter-users'>
                <FaUsersCog className='iconUser'/>
                <strong>/ { users && getLengthTypeUser('adm')} </strong>
              </div>
              
              <h3>Usuários</h3>
              <h4>Administradores</h4>
            </div>

            <div className='card'>
              <div className='counter-users'>
                <FaUserTie className='iconUser'/>
                <strong>/ { users && getLengthTypeUser('lider')} </strong>
              </div>
              
              <h3>Usuários</h3>
              <h4>Lideres</h4>
            </div>
        </fieldset>
      
    </BarUsersStyled>
  )
}

export default BarUsers
