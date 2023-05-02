import styled from "styled-components";

const NavStyled = styled.nav`
    width: 450px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    a {
        text-decoration: none;
        color: #94a3b8;
        transition:  all .5s ease-in-out;
    }
    a:hover { 
        transform: scale(1.2);
        color: #f59e0b;
    }
    a div {
        text-align: center;
        font-size: 25px;
    }
    a span {
        font-size: 12px;
        transform: translateY(-5px);
        font-weight: bold;
        position: relative;
        top: -10px;
    }

    .active {
        color: #facc15;
    }
`
export default NavStyled;