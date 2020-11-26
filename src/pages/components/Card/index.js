import React,{useEffect , useState} from 'react';

import { Container , Title , Text} from './styles';

import api from '../../../server/index';
function Card() {
  const [data , setData] = useState({"createdAt": "",
  "id": "",
  "quantity": "",
  "updatedAt": ""
});
  useEffect(()=>{
    async function getRfidData(){
      try{
        const response = await api.get('/rfid/realtime');
        
        setData(response.data);
        
      }catch(error){
        console.log(error);
      }
    }
   
    getRfidData();

  },[data]);
  
  return (<Container>
      <Title>Dados</Title>
      <Text>Quantidade de Pessoas: {data.quantity}</Text>  
  <Text>Data: {data.updatedAt}</Text>  
      
  </Container>);
}

export default Card;