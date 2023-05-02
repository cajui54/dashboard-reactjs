import styled from "styled-components";

const HeaderStyled = styled.header`
    background-color: #1e293b;
    height: 80px;
    box-sizing: border-box;
    padding: 10px;
    color: #94a3b8;
    display: flex;
    .container-logo {
        display: flex;
        cursor: pointer;
        text-decoration: none;
    }

    .icon {
        color: #facc15;
        font-size: 55px;
        margin: 0 20px;
    }

    .container-logo h2 {
        font-size: 25px;
        color: #fff;
    }

    .container-logo h3 {
        color: #facc15;
        text-align: center;
        transform: translateY(-10px) scale(1.2);
    }
    .container-user {
        margin: 5px 100px;
        min-width: 250px;
        padding: 5px;
    }
    .container-user p{
        color: #facc15;
        font-weight: bold;
    }
    .container-user .icon {
        color: #facc15;
        margin: 2px 5px;
        font-size: 15px;
        transform: translateY(3px) scale(1.2);
    }


`

export default HeaderStyled;