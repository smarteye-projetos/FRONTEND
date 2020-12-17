import React,{useEffect , useState} from 'react';

import { Container , Title , Text } from './styles';
import api from '../../../../server/index';
function Card() {
  const [data , setData] = useState({"createdAt": "",
  "file_name": "ImagemGerada.png",
  "id": "",
  "ip": "",
  "quantity": "",
  "size": "",
  "updatedAt": "",
  "url": ""
});
  useEffect(()=>{
    async function getCamData(){
      try{
        const response = await api.get('/cam/realtime');
        
        setData(response.data);
        
      }catch(error){
        console.log(error);
      }
    }
   
    getCamData();

  },[data]);
  
  return (<Container>
      <Title>Dados Obtidos </Title>
      <Text>entrada: </Text>  
  <Text>Data: </Text>  
  <Text>saida: </Text>  
  <Text>Data: </Text>  
      
  </Container>);
}

export default Card;