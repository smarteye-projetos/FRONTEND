import styled from 'styled-components';

export const Container = styled.div`
   width: 300px;
   height: auto;
   background-color: #5840BB;
   display: flex;
   flex-direction: column;
   padding-top:100px;
   padding-bottom:100px;
`;

export const ButtonMenu = styled.div `

    position: relative;
    left: 0px;
    border-radius: 10px;
    height:50px;
    border:none;
    background-color:${({select})=> select ? '#fff':'#5840BB'};
    margin-top:20px;
    cursor: pointer;
    color: #fff;
    transition: 100ms;
    padding-top: 12px;
    padding-left: 70px;
    &:hover{
        background-color: #fff;
        color: #000;
        left: 40px;
    }

    
`;




