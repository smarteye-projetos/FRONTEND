import React, {useState,useEffect} from 'react';

import { Container } from './styles';
import api from '../../../../server/index';
import {
  BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

function GraficoBar() {
  const [data, setData] = useState();
 
  useEffect(()=>{
    async function getData(){
      try{
        let response = await api.get('cam/list');
        let arr = response.data;
        let data = arr.map(item=>{
            return {id: `${item.id}`, QP:item.quantity};
        });
        setData(data);
        console.log(data);
      }catch(error){
        console.log(error);
      }
    }
    getData();
  },[]);
  return (<Container>
     <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="id" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
        <ReferenceLine y={0} stroke="#000" />
        <Brush dataKey="id" height={30} stroke="#6385eb" />
        <Bar dataKey="QP" fill="#6385eb" />
        
      </BarChart>
  </Container>);
}

export default GraficoBar;