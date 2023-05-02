import useFetch from "../hooks/useFetch";

const InputsUtils = () => {
    const {users} = useFetch('http://localhost:3000/users');
  
    const handleFocus = ({target}, refLabel) => {
        target.classList.remove('textOffFocus');
        target.classList.add('textOnFocus');
    
        refLabel.current.classList.remove('focusOffLabel');
        refLabel.current.classList.add('focusOnLabel');
    }

    const handleBlur = ({target}, refLabel) => {
        if(!target.value) {
          target.classList.add('textOffFocus');
          target.classList.remove('textOnFocus');
    
          refLabel.current.classList.add('focusOffLabel');
          refLabel.current.classList.remove('focusOnLabel');
        }
        
    }
    
    const clearField = (textbox) => {
      Object.values(textbox).forEach((text) => {
        text.value = '';
      })
    }
    
    const checkIfThereEmail = (email) => {
       const getAllEmail = users.map(user => user.email && user.password);
       return getAllEmail.includes(email);
    }
      
    return {handleFocus, handleBlur, clearField, checkIfThereEmail}
}

export default InputsUtils
