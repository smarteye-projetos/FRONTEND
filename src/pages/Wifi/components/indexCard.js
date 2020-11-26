import React,{useEffect , useState} from 'react';

import { Container , Title , Text} from '../../components/Card/styles';

import api from '../../../server/index';
function Card() {
  const [data , setData] = useState({"createdAt": "",
  "id": "",
  "quantity": "",
  "updatedAt": ""
});
  useEffect(()=>{
    async function getWifiData(){
      try{
        const response = await api.get('/wifi/realtime');
        
        setData(response.data);
        
      }catch(error){
        console.log(error);
      }
    }
   
    getWifiData();

  },[data]);
  
  return (<Container>
      <Title>Dados</Title>
      <Text>Quantidade de Pessoas: {data.quantity}</Text>  
  <Text>Data: {data.updatedAt}</Text>  
      
  </Container>);
}

export default Card;