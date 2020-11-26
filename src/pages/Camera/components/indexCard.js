import React,{useEffect , useState} from 'react';

import { Container , Title , Text, Img} from '../../components/Card/styles';

import api from '../../../server/index';
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
      <Title>Dados</Title>
      <Text>Quantidade de Pessoas: {data.quantity}</Text>  
      <Text>Data: {data.updatedAt}</Text>  
      <Img src={data.url} alt="pessoa"></Img>
</Container>);
}

export default Card;