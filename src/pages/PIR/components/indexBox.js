import React from 'react';

import { Container , Row} from '../../components/Box/styles';
import Card from './indexCard';

import GraficoBar from '../../components/Card/Graficos/GraficoBar';

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