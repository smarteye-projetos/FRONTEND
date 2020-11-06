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
  useEffect(()=>{
    async function getCamData(){
      try{
        const response = await api.get('/cam/realtime');
        console.log(response);
        setData(response.data);
        
      }catch(error){
        console.log(error);
      }
    }
    getCamData();
  },[]);
  return (<Container>
      <Title>Dados Obtidos pela Câmera</Title>
      <Img src={data.url} alt="pessoa"></Img>
      <Text>Quantidade Pessoas:{data.quantity}</Text>  
      <Text>Data: 05/11/2020</Text>  
      <Text>Hora: 04:40</Text>  
  </Container>);
}

export default Card;