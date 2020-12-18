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
`;

export const Item = styled.li`
    flex-direction: column;
    position: relative;
    padding: 5px ${px2vw(8)} 0 ${px2vw(8)};
    margin-right: ${px2vw(10)}
    cursor: pointer;
    &:hover{
        background-color: #B0C4DE;
    }

    @media (max-width: 768px) {
        margin-right: ${px2vw(14)};
        font-size: 1.5rem;
    }

    @media (min-width: 768px) {
        font-size: 1.2rem;
    }

    @media (min-width: 1024px) {
        padding-top: ${px2vw(10)};
        font-size: 0.8rem;
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

