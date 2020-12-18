import React, {useEffect, useState} from 'react';

import {Container, Row} from './styles';
import Card from '../Card';

import GraficoLine from '../../../../components/Graficos/GraficoLine';

import api from '../../../../server/index';

function Box() {
  const [avaragePerDay, setAvarage] = useState([]);
  const [crowdAndQuietDay, setcrowdAndQuietDay] = useState([]);
  const [crowdAndQuietMonth, setcrowdAndQuietMonth] = useState([]);
  const [crowdAndQuietHour, setcrowdAndQuietHour] = useState([]);
  const [dayMore, setDayMore] = useState({});
  const [dayLess, setDayLess] = useState({});
  

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

        async function getCrowAndQuietDay(){
          try{
              let response = await api.get('/cam/crowdAndQuietDay');
              setcrowdAndQuietDay(response.data);
          }catch(error){
              console.log(error);
          }
      }

      async function getCrowAndQuietMonth(){
        try{
            let response = await api.get('/cam/crowdAndQuietMonth');
            setcrowdAndQuietMonth(response.data);
        }catch(error){
            console.log(error);
        }
      }

      async function getCrowAndQuietHour(){
        try{
            let response = await api.get('/cam/crowdAndQuietHour');
            setcrowdAndQuietHour(response.data);
        }catch(error){
            console.log(error);
        }
      }

      async function getDayMoreAndLess(){
        try{
            let response = await api.get('/cam/dateMoreAndLess');
            setDayMore(response.data.dateMore);
            setDayLess(response.data.dateLess);
        }catch(error){
            console.log(error);
        }
      }

      getAvaragePerDay();
      getCrowAndQuietDay();
      getCrowAndQuietMonth();
      getCrowAndQuietHour();
      getDayMoreAndLess();
    });

  return (
    <Container>  
      <Row>
        <Card />
      </Row>
      <Row>
        <GraficoLine apiRoute = "/cam/average/day"/>
      </Row>
      <Row>
        <h1>Média Diária: {avaragePerDay} pessoas</h1>
        <br/>
        <h3>Dia da semana mais movimentado: {crowdAndQuietDay.crowd}</h3>
        <h3>Dia da semana menos movimentado: {crowdAndQuietDay.quiet}</h3>
        <br></br>
        <h3>Mês do ano mais movimentado: {crowdAndQuietMonth.crowd}</h3>
        <h3>Mês do ano menos movimentado: {crowdAndQuietMonth.quiet}</h3>
        <br></br>
        <h3>Hora do dia mais movimentada: {crowdAndQuietHour.crowd}</h3>
        <h3>Hora do dia menos movimentada: {crowdAndQuietHour.quiet}</h3>
        <br></br>
        <h3>Data que mais teve pessoas: {dayMore.day} / {dayMore.month} / {dayMore.year}</h3>
        <h3>Data que menos teve pessoas: {dayLess.day} / {dayMore.month} / {dayMore.year}</h3>
      </Row>
    </Container>);
}

export default Box;