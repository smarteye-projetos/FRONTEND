import React from 'react';

import { Container , Row} from './styles';
import Card from '../Card';

import GraficoLine from '../../../../components/Graficos/GraficoLine';

function Box() {
  return (<Container>
    <Row>
      <Card />
    </Row>
     <Row>
      <GraficoLine apiRoute = "/wifi/average/day"/>
    </Row> 
  </Container>);
}

export default Box;