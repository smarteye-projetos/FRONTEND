import React  from 'react';

import { Container , ButtonMenu, Title } from './styles';

function Menu() {
  
  return(<Container>
      <Title>Dashboard</Title>
      <ButtonMenu >Gerar Relatório</ButtonMenu>
    
      <ButtonMenu  >Projeto 1</ButtonMenu>
      
      <ButtonMenu  >Projeto 2</ButtonMenu>
      
      <ButtonMenu  >Projeto 3</ButtonMenu>
      
  </Container>);
}

export default Menu;