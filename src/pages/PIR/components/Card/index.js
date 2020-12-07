import React,{useEffect , useState} from 'react';
import { Container , Title , Text } from '../../../components/Card/styles';

import api from '../../../../server/index';
function Card() {
  const [data , setData] = useState({"createdAt": "",
  "id": "",
  "quantity": "",
  "updatedAt": ""
});
  useEffect(()=>{
    async function getPirData(){
      try{
        const response = await api.get('/pir/realtime');
        
        setData(response.data);
        
      }catch(error){
        console.log(error);
      }
    }
   
    getPirData();

  },[data]);
  
  return (<Container>
      <Title>Dados obtidos pelo sensor</Title>
      <Text>Quantidade de Pessoas: {data.quantity}</Text>  
  <Text>Data: {data.updatedAt}</Text>  
      
  </Container>);
}

export default Card;