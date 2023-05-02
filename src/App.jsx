import { BrowserRouter, Routes, Route, useParams} from 'react-router-dom';
import useContextData from './hooks/useContextData';
import './App.css';
import Login from './pages/Login/Login';
import Main from './pages/Main';
import Register from './pages/Login/Register';
import useFetch from './hooks/useFetch';

function App() {
  const {getPost, users} = useFetch();
  const { id } = useParams();
  
  return (
    <div className="App">
      <BrowserRouter>    
        <Routes>
            <Route path='/' element={<Login users={users} idUser={id}/>}/>
            <Route path='/main/:id/*' element={<Main/>}/>
            <Route path='/register' element={<Register getPost={getPost}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
