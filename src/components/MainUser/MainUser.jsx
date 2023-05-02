import { useReducer, useRef, useState } from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FaUserEdit } from 'react-icons/fa';
import useFetch from '../../hooks/useFetch'
import MainStyled from './MainStyled'
import {FcSearch} from 'react-icons/fc'
import {GiCancel} from 'react-icons/gi'

const MainUser = () => {
    const inputRefSearch = useRef('');
    const {users} = useFetch();
    const [userFind, setUserFind] = useState({userFound: false});
    const refSpanSearch = useRef();
    const setMessageSearch = (status, action) => {
        switch(action.type) {
            case 'fieldEmpty' :
                return {
                    status: true,
                    text: 'Campo obrigatório não foi preenchido!'
                }
            case 'emailNotFind' :
                return {
                    status: true,
                    text: 'Esse email não foi encontrado!'
                }
            default :
                return {status: false, text: ''};
            }
    }
    const [messageSearch, dispatchSearch] = useReducer(setMessageSearch, {status: false, text: ''});

    const findUserForEmail = (input) => users.find((user) => user.email === input);

    const handleSubmitSearch = (event, {current}) => {
        event.preventDefault();

        if(current.value) {
            const user = findUserForEmail(current.value);

            if(user) {
                
                setUserFind({...user, userFound: true});
                dispatchSearch({type: ''});
            } else {
                dispatchSearch({type: 'emailNotFind'});
            }
        } else {
            dispatchSearch({type: 'fieldEmpty'});
        }
        
    }
    const handleResetSearch = () => {
        dispatchSearch({type: ''});
        setUserFind({userFound: false})
    }
    const handleFocus = () => {
        refSpanSearch.current.classList.add('focus-on'); 
    }

  return (
    <MainStyled>
        <fieldset>
            <legend>Buscar Usuário</legend>
            <form className='container-inputs' onSubmit={(e) => handleSubmitSearch(e, inputRefSearch)}>
                <label>
                    <span ref={refSpanSearch}>Pesquisar por Email</span>

                    <input type="email"
                     name='seachUser'
                     placeholder="example@gmail.com"
                     onFocus={handleFocus}
                     required
                     ref={inputRefSearch}
                     autoComplete='on'/>
                    
                    <div className='container-btns'>
                    <button>
                        <FcSearch/>
                    </button>

                    <button type='reset' onClick={handleResetSearch}>
                        <GiCancel/>
                    </button>
                </div>
                </label>
               
            </form>
            {
                messageSearch.status && <span>{messageSearch.text}</span>
            }

            { userFind.userFound && (<fieldset className='container-output-user'>
                <legend>Usuário encontrado!</legend>
                <ul>
                   <li> <strong>Id:</strong> {userFind.id} </li>
                   <li> <strong>Usuário(a):</strong> {userFind.name}</li>
                   <li> <strong>Email:</strong> {userFind.email}</li>
                   <li>
                     <button className='btnDelete'><RiDeleteBin5Line/></button>
                     <button className='btnEdit'><FaUserEdit/></button>
                    </li>
                </ul>
            </fieldset>)}
        </fieldset>
      
    </MainStyled>
  )
}

export default MainUser
