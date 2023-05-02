import styled from "styled-components";

const LoginUser = styled.div`

    form {
        background-color: #1e293b;
        width: 300px;
        margin: 100px auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 5px;
    }
    .mainForm{
        min-height: 400px;
    }
    .container-logo {
        background-color: #111827;
        border-radius: 100%;
        width: 80px;
        height: 80px;
        text-align: center;
        color: #fff;
        margin-top: 30px;
        margin-bottom: 20px;
        border: 1px solid #fff;
    }
    .container-logo .icon {
        margin-top: 5px;
        font-size: 30px;
    }
    .container-logo h2 {
        font-size: 11px;
    }
    .container-logo h3 {
        font-size: 8px;
    }
    .container-inputs {
        width: 90%;
    }
    .container-inputs div {
        position: relative;
        margin: 10px 0;
        padding: 5px;
    }
    .container-inputs div span {
        position: absolute;
        left: 65px;
        font-weight: bold;
        transition: all .5s ease-in-out;
    }
    .labelDefault {
        color: #fff;
    }
    .labelErro {
        color: #e11d48;
    }
    .container-inputs div input {
        margin-left: 50px;
        width: 150px;
        padding: 10px;
        border-radius: 10px;
        font-weight: bold;
        outline: none;
    }
    .inputDefault {
        color: #fff;
        border: none;
    }
    .focusOnLabel {
        font-size: 9px;
        top: -1px;
    }
    .focusOffLabel {
        font-size: 12px;
        top: 13px;
    }

    .textOnFocus {
        background-color: #374151;
    }
    .textOffFocus {
        background-color: #111827;
    }
    .errorTextbox {
        background-color: #fecdd3;
        border: 1px solid blue;
    }

    .messagem {
        padding: 4px;
        border-radius: 2px;
        font-size: 12px;
        text-align: center;
        width: 60%;
    }
    .messagemFalse {
        background-color: #fecdd3;
        border: 1px solid #e11d48;
        color: #e11d48;
    }
    .messagemTrue {
        background-color: #86efac;  
        border: 1px solid #15803d;
        color: #15803d;
    }

    .container-buttons {
        width: 70%;
        margin: 10px auto;
        display: flex;
        flex-direction: column;
    }
    
    .container-buttons button {
        margin: 5px 0;
        padding: 6px 0;
        font-weight: bold;
        border: none;
        cursor: pointer;
        border-radius: 2px;
        color: #fff;
        transition: all .6s ease;
    }
    .container-buttons button:nth-child(1) {
        background: linear-gradient(to right, #6d28d9 60%, #a855f7, #c084fc);
        
    }
    .container-buttons button:nth-child(1):hover {
        background: linear-gradient(to right, #6d28d9, #a855f7, #c084fc 100%);
    }
    .container-buttons button:nth-child(2) {
        background-color: #111827;
    }

    .container-register {
        color: #fff;
        margin: 10px auto;
        font-size: 13px;
    }
    .container-register a {
        color: #111827;
        text-decoration: none;
        margin-left: 5px;
        font-weight: bold;
        transition: all .5s ease-in-out;
    }
    .container-register a:hover {
        color: #334155;
    }

    .formRegister {
        min-height: 280px;
    }

    .container-subtitle {
        margin-top: 10px;
        font-size: 13px;
        width: 100%;
        padding-left: 60px;
        box-sizing: border-box;
        color: #fff;
    }
    .btn-exit {
        width: 90%;
        display: flex;
        justify-content: flex-end;
        padding: 10px 6px;
    }
    .btn-exit button {
        padding: 5px;
        color: #fff;
        background-color: transparent;
        border: none;
        cursor: pointer;
        font-size: 20px;
        transition: all .5s ease-in;
    }
    .btn-exit button p {
        font-size: 10px;
        font-weight: bold;
    }
    .btn-exit button:hover {
        transform: scale(1.1);
    }
`
export default LoginUser;