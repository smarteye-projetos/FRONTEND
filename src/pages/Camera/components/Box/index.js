import React, {useEffect, useState} from 'react';

import { Container , Row} from './styles';
import Card from '../Card';

import GraficoLine from '../Graficos/GraficoLine';

import api from '../../../../server/index';

function Box() {
  const [data,setData] = useState();
    useEffect(()=>{
        async function getData(){
            try{
                let response = await api.get('/cam/averagePerDay');
                console.log(response);
                setData(response.data);
            }catch(error){
                console.log(error);
            }
        }
        getData();
    });

  return (<Container>
    <Row>
      <Card />
    </Row>
     <Row>
      <GraficoLine />
    </Row>
    <Row>
  <h1>Média Diária: {data.toFixed(2)} pessoas</h1>
    </Row>
  </Container>);
}

export default Box;