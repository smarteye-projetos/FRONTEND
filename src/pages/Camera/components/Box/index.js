import React, {useEffect, useState} from 'react';

import { Container , Row} from '../../../components/Box/styles';
import Card from '../Card';

import GraficoLine from '../Graficos/GraficoLine';

import api from '../../../../server/index';

function Box() {
  const [avaragePerDay, setAvarage] = useState([]);
  const [crowdANDquiet, setCrowdANDquiet] = useState([]);

    useEffect(()=>{
        async function getAvaragePerDay(){
            try{
                let response = await api.get('/cam/averagePerDay');
                console.log(response);
                setAvarage(response.data.toFixed(2));
                console.log(avaragePerDay);
            }catch(error){
                console.log(error);
            }
        }

        async function getCrowANDquiet(){
          try{
              let response = await api.get('/cam/crowdANDquietDay');
              console.log(response);
              setCrowdANDquiet(response.data);
          }catch(error){
              console.log(error);
          }
      }

      getAvaragePerDay();
      getCrowANDquiet();
    });

  return (<Container>
    <Row>
      <Card />
    </Row>
     <Row>
      <GraficoLine />
    </Row>
    <Row>
      <h1>Média Diária: {avaragePerDay} pessoas</h1>
      <h3>Dia da semana que mais tem gente: {crowdANDquiet.crowd}</h3>
      <h3>Dia da semana que menos tem gente: {crowdANDquiet.quiet}</h3>
    </Row>
  </Container>);
}

export default Box;