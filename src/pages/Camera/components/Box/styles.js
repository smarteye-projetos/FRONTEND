import styled from 'styled-components';
import px2vw from '../../../../utils/px2vw';

export const Container = styled.div`
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

export const Row = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: #fff;
`;