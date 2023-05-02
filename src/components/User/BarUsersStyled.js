import styled from "styled-components";

const BarUsersStyled = styled.div`
    margin: 20px 30px;
    width: 600px;

    fieldset {
        border-radius: 5px;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .card {
        background-color: #1e293b;
        width: 150px;
        border-radius: 5px;
        height: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    legend {
        font-weight: bold;
        letter-spacing: 1.5px;
        color: #fff;
        padding: 5px 10px;
    }
    .counter-users {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .counter-users strong {
        margin-left: 10px;
        font-size: 25px;
        color: #94a3b8;
        
    }
    .iconUser {
        font-size: 35px;
        color: #f59e0b;
    }
    .card h3 {
        color: #94a3b8;
    }
    .card h4 {
        color: #f59e0b;
        transform: translate(10px, -15px);
        font-size: 12px;
    }
`
export default BarUsersStyled;