import React  from 'react';

import { Container , ButtonMenu } from './styles';

function Menu() {
  
  return(<Container>
      
      <ButtonMenu >Gerar Relatorio</ButtonMenu>
    
      <ButtonMenu >Grafico de Barra</ButtonMenu>
      
      <ButtonMenu >Grafico de Linha</ButtonMenu>
      
      <ButtonMenu  >Projeto 1</ButtonMenu>
      
      <ButtonMenu  >Projeto 2</ButtonMenu>
      
      <ButtonMenu  >Projeto 3</ButtonMenu>
      
  </Container>);
}

export default Menu;