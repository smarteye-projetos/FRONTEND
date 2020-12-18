import styled from 'styled-components';
import px2vw from '../../utils/px2vw';

export const Box = styled.div`
    height: 50vh;
    width: 100vw;
    background-color: white;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: ${px2vw(150)};
    max-width: 100%;

    @media (min-width: 1024px) {
    flex-wrap: nowrap;
    }
`;

export const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    margin: 0 ${px2vw(15)} 0 ${px2vw(15)};
    font-size: 0.8rem;

    input {
        border: 1px solid;
        border-color: #919191;
        border-radius: 3px;
        padding: ${px2vw(12)};
        font-size: 1rem;
        margin: ${px2vw(16)};
    }

    button {
        cursor: pointer;
        border: 1px solid;
        border-radius: 6px;
        background-color: #4682B4;
        color: white;
        padding: ${px2vw(10)};
        font-size: 1.2rem;
    }
`;