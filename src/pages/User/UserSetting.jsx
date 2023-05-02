import React from 'react'
import UserStyled from './UserStyled'
import BarUsers from '../../components/User/BarUsers'
import MainUser from '../../components/MainUser/MainUser'

const UserSetting = () => {
  return (
    <UserStyled>

      <div className="titles">
        <h2>Usuários do Sistema</h2>
        <h4>Gerenciamento de Usuários</h4>
        <BarUsers/>
      </div>

      <MainUser/>
    </UserStyled>
  )
}

export default UserSetting
