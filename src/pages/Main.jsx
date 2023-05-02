import React from 'react';
import { BrowserRouter, Routes, Route, useParams} from 'react-router-dom';
import Header from '../components/Header/Header';
import Home from './Home/Home';
import UserSetting from './User/UserSetting';
import Storage from './Storage/Storage';
import useFetch from '../hooks/useFetch';
import MainStyled from '../MainStyled';

const Main = () => {
  const { id } = useParams();

  
  const {getPost, users} = useFetch('http://localhost:3000/users');
  return (
    <MainStyled>
      <Header users={users} idUser={id}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/storage' element={<Storage/>}/>
          <Route path='/users' element={<UserSetting/>}/>
        </Routes>
      
    </MainStyled>
  )
}

export default Main
