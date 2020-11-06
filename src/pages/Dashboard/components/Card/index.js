import React from 'react';

import { Container , Title , Text , Img} from './styles';
import Imagemgerada from '../../../../assets/img/ImagemGerada.png'
function Card() {
  return (<Container>
      <Title>Dados Obtidos pela Câmera</Title>
      <Img src={Imagemgerada} alt="pessoa"></Img>
      <Text>Quantidade Pessoas: 5</Text>  
      <Text>Data: 05/11/2020</Text>  
      <Text>Hora: 04:40</Text>  
  </Container>);
}

export default Card;