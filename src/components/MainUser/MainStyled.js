import styled from "styled-components";

const MainStyled = styled.div`
    
    
    fieldset {
        margin: 50px 20px;
        width: 600px;
        border-radius: 5px;
        padding: 5px;
        padding: 20px 0;
    }
    legend {
        font-weight: bold;
        letter-spacing: 1.5px;
        color: #fff;
        padding: 5px 10px;
    }
    .container-inputs {
        display: flex;
    }
    .container-inputs label {
        margin: 5px 50px;
        position: relative;
        display: flex;
    }
    .container-inputs label span {
        color: #94a3b8;
        font-weight: bold;
        position: absolute;
        left: 50px;
        top: -5px;
        font-size: 10px;
        color: #fbbf24;
    }
    .container-inputs label input {
        margin-left: 50px;
        width: 200px;
        padding: 10px 20px;
        border-radius: 10px;
        font-weight: bold;
        outline: none;
        background-color: #374151;
        color: #fff;
        border: none;
    }
    .container-btns {
        position: relative;
        right: 60px;
        bottom: 0;
        padding: 10px 0;
        height: 20px;
    }
    .container-btns button { 
        margin: 0 2px;
        cursor: pointer;
        border: none;
        border-radius: 5px;
        font-size: 20px;
        background-color: transparent;
        transition: all .5s ease-in;
    }
    .container-btns button:hover {
        transform: scale(1.2);
     }
    .container-btns button:nth-child(1){
        margin-left: 10px;   
    }
    .container-btns button:nth-child(2){
        color: #94a3b8;
    }
    fieldset > span {
        color: red;
        margin-left: 120px;
        font-size: 12px;
    }
    .container-output-user {
        width: 80%;
        height: 20px;
        margin: 20px auto;
        border: none;
    }
    .container-output-user ul {
        display: flex;
        justify-content: space-around;
        background-color: #1e293b;
        width: 100%;
        margin: 0 auto;
        padding: 5px;
        border-radius: 5px;
        list-style: none;
        color: #fff;
    }
    .container-output-user strong {
        margin-right: 5px;
        font-size: 10px;
        color: #f59e0b;
    }
    .container-output-user ul li:last-child button {
        margin-left: 5px;
        padding: 2px;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        color: #cbd5e1;
    }
    .container-output-user .btnDelete {
        background-color: #dc2626;
    }
    .container-output-user .btnEdit {
        background-color: #fb923c;
    }

`

export default MainStyled;