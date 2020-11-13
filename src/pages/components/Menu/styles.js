import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
   width: 300px;
   height: 100vh;
   background-color: #5840BB;
   display: flex;
   flex-direction: column;
   padding-top:80px;
   padding-bottom:150px;
`;

export const ButtonMenu = styled.div `

    position: relative;
    left: 0px;
    border-radius: 10px;
    height:40px;
    border:none;
    background-color:${({select})=> select ? '#fff':'#5840BB'};
    margin-top:20px;
    cursor: pointer;
    color: #fff;
    transition: 100ms;
    padding-top: 18px;
    padding-left: 70px;
    &:hover{
        background-color: #fff;
        color:#42427D;
        left: 40px;

        a {
            color: #42427D;
        }
    }

    
`;

export const Title = styled.h2 `
    color: #fff;
    margin-left: 70px;
    font-size: 2rem;
`;

export const StyledLink = styled(Link)`
   text-decoration: none;
   color: white;
`;




