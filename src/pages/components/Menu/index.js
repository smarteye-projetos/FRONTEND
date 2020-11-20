import React  from 'react';

import { Container , ButtonMenu, Title, StyledLink } from './styles';

function Menu() {
  
  return(<Container>
      <Title>Dashboard</Title>
      <ButtonMenu>
        <StyledLink to = "/"> Geral </StyledLink>
      </ButtonMenu>
      
      <ButtonMenu>
        <StyledLink to = "/camera"> Camera </StyledLink>
      </ButtonMenu>

      <ButtonMenu>
        <StyledLink to = "/wifi"> Wifi </StyledLink>
      </ButtonMenu>

      <ButtonMenu>
        <StyledLink to = "/bluetooth"> Bluetooth </StyledLink>
      </ButtonMenu>

      <ButtonMenu>
        <StyledLink to = "/rfid"> RFID </StyledLink>
      </ButtonMenu>

      <ButtonMenu>
        <StyledLink to = "/gsm"> GSM </StyledLink>
      </ButtonMenu>

      <ButtonMenu>
        <StyledLink to = "/pir"> PIR </StyledLink>
      </ButtonMenu>
      
  </Container>);
}

export default Menu;