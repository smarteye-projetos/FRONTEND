import React, {useEffect, useState} from 'react';

import { Container , Row} from './styles';
import Card from '../Card';

import GraficoLine from '../../../../components/Graficos/GraficoLine';

import api from '../../../../server/index';

function Box() {
  const [avaragePerDay, setAvarage] = useState([]);
  const [crowdANDquiet, setCrowdANDquiet] = useState([]);
  const [dayMoreAndLess, setDayMoreAndLess] = useState([]);

    useEffect(()=>{
        async function getAvaragePerDay(){
            try{
                let response = await api.get('/blue/averagePerDay');
                console.log(response);
                setAvarage(response.data.toFixed(2));
                console.log(avaragePerDay);
            }catch(error){
                console.log(error);
            }
        }

        async function getCrowANDquiet(){
          try{
              let response = await api.get('/blue/crowdANDquietDay');
              setCrowdANDquiet(response.data);
          }catch(error){
              console.log(error);
          }
      }

      // async function getDayMoreAndLess(){
      //   try{
      //       let response = await api.get('/blue/dateMoreAndLess');
      //       setDayMoreAndLess(response.data);
      //       console.log(dayMoreAndLess);
      //   }catch(error){
      //       console.log(error);
      //   }
      // }

      getAvaragePerDay();
      getCrowANDquiet();
      // getDayMoreAndLess();
    });

  return (<Container>
    <Row>
      <Card />
    </Row>
     <Row>
      <GraficoLine apiRoute = "/blue/average/day" />
    </Row> 
    <Row>
      <h1>Média Diária: {avaragePerDay} pessoas</h1>
      <h3>Dia da semana que mais tem pessoas: {crowdANDquiet.crowd}</h3>
      <h3>Dia da semana que menos tem pessoas: {crowdANDquiet.quiet}</h3>
      <br></br>
    </Row>
  </Container>);
}

export default Box;