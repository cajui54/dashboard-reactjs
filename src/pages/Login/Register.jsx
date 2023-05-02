import {useRef, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import LoginStyled from './LoginStyled';
import InputsUtils from '../../utils/InputsUtils';
import {ImExit} from 'react-icons/im';
const Register = ({getPost}) => {
    const navegate = useNavigate();
    const [inputs, setInput] = useState(null);
    const [textbox, setTextbox] = useState(null);
    const [messagem, setMessage] = useState({status: false, text: 'Usuário ou Senha inválido!', class: ''});
    const refName = useRef();
    const refEmail = useRef();
    const refPassword = useRef();
    const refPassword2 = useRef();
    const refPasswordText = useRef();
    
    const {handleFocus, handleBlur, clearField, checkIfThereEmail} = InputsUtils();

    const handleSubmit = (event) => {
      event.preventDefault();
      const { password, email } = inputs;

      if(password === refPasswordText.current.value) {
        if(!checkIfThereEmail(email)) {
          console.log(password.length);
          if(password.length > 5) {
             getPost({...inputs, status: true});
            setMessage({status: true, text: 'Cadastro efetuado com sucesso!', class: 'messagemTrue'});
            handleReset();
            clearField(textbox);
          } 
          else {
            setMessage({status: true, text: 'Senha deve conter ao menos 6 caracteres', class: 'messagemFalse'});
            window.alert(' - Ocorreu um erro! \n - Senha deve conter pelo menos 6 caracteres!');
          }
        } else {
          textbox.email.focus();
          textbox.email.classList.add('messagemFalse');
          refEmail.current.classList.remove('labelDefault');
          refEmail.current.classList.add('labelErro');
          setMessage({status: true, text: 'Esse email já foi cadastrado!', class: 'messagemFalse'});
        }
      
      } else {
        setMessage({status: true, text: 'As senhas não são iguais', class: 'messagemFalse'});
        handleReset();
      }
    }

    const handleChange = ({target}) => {
      if(target.name !== 'password2') setInput({...inputs, [target.name]: target.value});

      setTextbox({...textbox, [target.name]: target});
    
    }

    const handleReset = () => {
      
      refPassword.current.classList.remove('focusOnLabel');
      refPassword.current.classList.add('focusOffLabel');

      refPassword2.current.classList.remove('focusOnLabel');
      refPassword2.current.classList.add('focusOffLabel');
      
      textbox.email.classList.remove('messagemFalse');
    
      refEmail.current.classList.remove('labelErro');
      refEmail.current.classList.add('labelDefault');

      refEmail.current.classList.remove('focusOnLabel');
      refEmail.current.classList.add('focusOffLabel');
      
      Object.values(textbox).forEach(element => {
        element.classList.add('textOffFocus');
        element.classList.remove('textOnFocus');
      })

      setTimeout(() => {
        setMessage({status: false})
        console.log('time');
      }, 5000)
    }
    
    const onBlur = (event, refPassword) => {
      handleBlur(event, refPassword)

      const passwordInput = event.target.value;

      if(passwordInput.length < 6) {
        setMessage({status: true, text: 'Senha deve conter ao menos 6 caracteres', class: 'messagemFalse'});
      } 
      else {
        setMessage({status: false});
      }
      
    }
  return (
    <LoginStyled>
        <form className='formRegister' onSubmit={handleSubmit}>
            <div className='container-subtitle'>
                <h2>Registrar Usuário</h2>
            </div>
            <div className='container-inputs'>

            <div>
                <span ref={refName} className='focusOffLabel labelDefault'>Nome:</span>

                <input
                type="text"
                className='textOffFocus inputDefault'
                name='name'
                required
                onChange = {(event) => handleChange(event)}
                onFocus={(event) => handleFocus(event, refName)}
                onBlur={(event) => handleBlur(event, refName)}
                />

            </div>

            <div>
                <span ref={refEmail} className='focusOffLabel labelDefault'>Email:</span>

                <input
                type="email"
                className='textOffFocus inputDefault'
                name='email'
                required
                onChange = {(event) => handleChange(event)}
                onFocus={(event) => handleFocus(event, refEmail)}
                onBlur={(event) => handleBlur(event, refEmail)}
                />

            </div>

            <div>
                <span ref={refPassword} className='focusOffLabel labelDefault'>Senha:</span>
                <input
                type="password"
                name='password'
                className='textOffFocus inputDefault'
                required
                onChange = {(event) => handleChange(event)}
                onFocus={(event) => handleFocus(event, refPassword)}
                onBlur={(event) => onBlur(event, refPassword)}
                />
            </div>

            <div>
                <span ref={refPassword2} className='focusOffLabel labelDefault'> Confirmar Senha:</span>

                <input
                type="password"
                name='password2'
                className='textOffFocus inputDefault'
                required
                onChange = {(event) => handleChange(event)}
                onFocus={(event) => handleFocus(event, refPassword2)}
                onBlur={(event) => handleBlur(event, refPassword2)}
                ref={refPasswordText}
                />
            </div>
            
            </div>

        {
          messagem.status && (
            <div className={`messagem ${messagem.class}`}>
              {messagem.text}
            </div>
          )
        }
     
        <div className='container-buttons'>
            <button type='submit'>Registar</button>
            <button type="reset" onClick={handleReset}>Cancelar</button>
        </div>

        <div className='btn-exit'>
          <button onClick={() => navegate('/')}>
            <ImExit/>
            <p>Sair</p>
          </button>
        </div>
        
      </form>
    </LoginStyled>
  )
}

export default Register
