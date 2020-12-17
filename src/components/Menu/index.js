import React  from 'react';

import { Container , Item, StyledLink } from './styles';

function Menu() {
  
  return(
  <Container>
        <Item><StyledLink to = "/"> Geral </StyledLink></Item>
        <Item><StyledLink to = "/camera"> Câmera </StyledLink></Item>
        <Item><StyledLink to = "/wifi"> Wifi </StyledLink></Item>
        <Item><StyledLink to = "/bluetooth"> Bluetooth </StyledLink></Item>
        <Item><StyledLink to = "/rfid"> RFID </StyledLink></Item>
        <Item><StyledLink to = "/gsm"> GSM </StyledLink></Item>
        <Item><StyledLink to = "/pir"> PIR </StyledLink></Item>
  </Container>);
}

export default Menu;