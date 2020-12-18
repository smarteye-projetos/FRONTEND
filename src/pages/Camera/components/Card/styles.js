import styled from 'styled-components';

import px2vw from "../../../../utils/px2vw";

export const Container = styled.div`
  margin-left: 5vw;
  margin-right: 10vw;
  background: #aae4f2;
  width: 75%;
  padding: ${px2vw(20)};
  border-radius: 10px;
  text-align: center;
`;

export const Title = styled.h3`
  font-family: Tahoma,Arial,Helvetica,sans-serif;
  padding-top: 10px;
  margin: ${px2vw(10)};
  font-weight: bold;
`;

export const Text = styled.h5 `
  font-family: Tahoma,Arial,Helvetica,sans-serif;
  margin: ${px2vw(10)};
`;

export const Img = styled.img `
    padding-top: 2vh;
    width:290px;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
`;