import React, {useState,useEffect} from 'react';

import { Container } from './styles';
import api from '../../../../server/index';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

function GraficoBar() {
  const [data, setData] = useState();
 
  useEffect(()=>{
    async function getData(){
      try{
        let response = await api.get('cam/list');
        let arr = response.data;
        let data = arr.map(item=>{
            return {nome: item.updatedAt, quantidade:item.quantity};
        });
        setData(data);
        console.log(data);
      }catch(error){
        console.log(error);
      }
    }
    getData();
  },[data]);
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
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="quantidade" fill="#8884d8" />
        
      </BarChart>
  </Container>);
}

export default GraficoBar;