import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginUser from './LoginStyled';
import {FiUsers} from 'react-icons/fi'
import InputsUtils from '../../utils/InputsUtils';
import { Link } from 'react-router-dom';

const Login = ({users}) => {
  const navigate = useNavigate();
  const [input, setInputs] = useState(null);
  const [messagem, setMessage] = useState({status: false});
  const refEmail = useRef();
  const refPassword = useRef();
  

  const {handleFocus, handleBlur} = InputsUtils();

  const handleReset = () => {
    setMessage({status: false});
  }

  const getValuesInputs = (event, refInput) => {
    handleBlur(event, refInput);

    setInputs({...input, [event.target.name]: event.target.value});
  }

  const checkIfThereUser = (input) => {

    const userData = users.find((user) => user.email === input.email && user.password === input.password);

    return {userData};
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const {userData} = checkIfThereUser(input);

    if(userData) {
      navigate(`/main/${userData.id}/`);
      
    }
    else {
      setMessage({status: true, text: 'Usuário ou Senha inválida!'});
    }
  }

  return (
    <LoginUser>
      <form className='mainForm' onSubmit={handleSubmit}>
        <div className='container-logo'>
          <FiUsers className='icon'/>
          <h2>System Login</h2>
          <h3>Login & Usuário</h3>
        </div>
        
        <div className='container-inputs'>

          <div>
            <span ref={refEmail} className='focusOffLabel labelDefault'>Email:</span>

            <input
             type="email"
             name='email'
             className='textOffFocus inputDefault'
             required
             onFocus={(event) => handleFocus(event, refEmail)}
             onBlur={(event) => getValuesInputs(event, refEmail)}
            />

          </div>

          <div>
            <span ref={refPassword} className='focusOffLabel labelDefault'>Senha:</span>
            <input
              type="password"
              name="password"
              className='textOffFocus inputDefault'
              required
              onFocus={(event) => handleFocus(event, refPassword)}
              onBlur={(event) => getValuesInputs(event, refPassword)}
             />
          </div>
          
        </div>

        {
          messagem.status && (
            <div className="messagem messagemFalse">
              {messagem.text}
            </div>
          )
        }
     
          <div className='container-buttons'>
            <button>Entrar</button>
            <button type="reset" onClick={handleReset}>Cancelar</button>
          </div>

        <div className='container-register'>
          <p>Não é cadastrado? <Link to={'/register'}>Registre-se aqui</Link></p>
        </div>
      </form>
      
    </LoginUser>
  )
}

export default Login
