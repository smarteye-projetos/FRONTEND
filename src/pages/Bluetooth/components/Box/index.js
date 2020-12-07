import React from 'react';

import { Container , Row} from '../../../components/Box/styles';
import Card from '../Card';

import GraficoLine from '../Graficos/GraficoLine';

function Box() {
  return (<Container>
    <Row>
      <Card />
    </Row>
     <Row>
      <GraficoLine />
    </Row> 
  </Container>);
}

export default Box;