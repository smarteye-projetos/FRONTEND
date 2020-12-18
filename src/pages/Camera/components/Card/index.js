import React,{useEffect , useState} from 'react';

import { Container , Title , Text , Img} from './styles';

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

  const now = new Date(data.updatedAt);

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
  
  return (
  <Container>
      <Title>Câmera - Tempo Real</Title>
      <Img src={data.url} alt="pessoa"></Img>
      <Text>{data.quantity} pessoas</Text>  
      <Text>Data: {
        now.getDate() + "/" + (now.getMonth()+1) + "/" + now.getFullYear() + 
        " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()          
      }</Text>  
  </Container>);
}

export default Card;