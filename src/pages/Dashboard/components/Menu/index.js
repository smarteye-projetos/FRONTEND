import React  from 'react';

import { Container , ButtonMenu } from './styles';

function Menu() {
  
  return(<Container>
      
      <ButtonMenu >Gerar Relatorio</ButtonMenu>
    
      <ButtonMenu  >Grafico de Barra</ButtonMenu>
      
      <ButtonMenu >Grafico de Linha</ButtonMenu>
      
      <ButtonMenu  >Trocar Câmera</ButtonMenu>
      
      <ButtonMenu >Ultima Atualização</ButtonMenu>
      
  </Container>);
}

export default Menu;