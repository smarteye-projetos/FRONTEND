import React,{useEffect , useState} from 'react';

import { Container , Title , Text} from './styles';

import api from '../../../../server/index';
function Card() {
  const [data , setData] = useState({"createdAt": "",
  "id": "",
  "quantity": "",
  "updatedAt": ""
});
  useEffect(()=>{
    async function getBluetoothData(){
      try{
        const response = await api.get('/blue/realtime');
        
        setData(response.data);
        
      }catch(error){
        console.log(error);
      }
    }
   
    getBluetoothData();

  },[data]);
  
  return (<Container>
      <Title>Dados obtidos pelo script</Title>
      <Text>Quantidade de Pessoas: {data.quantity}</Text>  
  <Text>Data: {data.updatedAt}</Text>  
      
  </Container>);
}

export default Card;