import React, {useEffect, useState} from 'react';

 import { Container } from './styles';
 import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
  } from 'recharts';

 import api from '../../../../server/index';


 
  
function GraficoLine() {
    const [data,setData] = useState();
    useEffect(()=>{
        async function getData(){
            try{
                let response = await api.get('/blue/average/day');
                console.log(response);
                setData(response.data);
            }catch(error){
                console.log(error);
            }
        }
        getData();
    });
  return (<Container>
      <LineChart
        width={600}
        height={400}
        data={data}
        margin={{
          top: 20, right: 50, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="hour" />
        <YAxis />
        <Tooltip />
        <Legend />
        <ReferenceLine x="Page C" stroke="red" label="Max PV PAGE" />
        <ReferenceLine y={10} label="Max" stroke="red" />
        <Line type="monotone" dataKey="average" stroke="#8884d8" />
      </LineChart>
  </Container>);
}

export default GraficoLine;