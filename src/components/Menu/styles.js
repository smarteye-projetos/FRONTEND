import styled from 'styled-components';

import { Link } from 'react-router-dom';
import px2vw from "../../utils/px2vw";

export const Container = styled.ul`
    list-style:none;
    background-color:#4682B4;
    position: fixed;
    display: flex;
    width: 100vw;
    height: 58px;
    font-size: 1rem
`;

export const Item = styled.li`
    flex-direction: column;
    position: relative;
    padding: ${px2vw(28)} ${px2vw(8)} 0 ${px2vw(8)};
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

