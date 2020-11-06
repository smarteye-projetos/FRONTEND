import React from 'react';

import { Container , Row} from './styles';
import Card from '../Card';
import GraficoBar from '../Graficos/GraficoBar';

function Box() {
  return (<Container>
    <Row>
      <Card />
    </Row>
     <Row>
      <GraficoBar />
    </Row> 
  </Container>);
}

export default Box;