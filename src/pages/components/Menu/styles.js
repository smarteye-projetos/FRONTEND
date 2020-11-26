import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.ul`
    list-style:none;
    background-color:#4682B4;
    float:right;
    position: fixed;
    padding-left: 52%; 
    width: 100vw;
    height: 8vh;
    font-size: 75%;
`;

export const Item = styled.li`
    position: relative;
    float:left;
    padding: 1.2% 2% 1.3% 1.7%;
    font-size: 1.2em;
    cursor: pointer;
    &:hover{
        background-color: #B0C4DE;
    }
`;

export const Title = styled.p `
    color: black;
`;

export const StyledLink = styled(Link)`
    font-family: Tahoma,Arial,Helvetica,sans-serif;
    text-decoration: none;
    color: white;
    font-weight: bold;
`;




