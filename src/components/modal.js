import React from 'react';

import {

    Typography,
    Card
  } from "antd";
  import { DollarOutlined  } from "@ant-design/icons";
import '../desing/desing.css'
const { Title, Text } = Typography;
export default function ModalComidaInfo() {
  return (
    <>
         <div  >
    
    <Card  style={{width:'100%'}}
 >

   <Title level={3} >Nombre de la comida</Title>
   
   <Text> Precio </Text>
   
     <Text>
     {/* <img width='3%' src={delivery}></img> 15-20min 
    */}
     </Text>
   
     <Text>
        Envio Gratis
     </Text>
     <DollarOutlined />
   
    </Card>
   </div>  
      
    </>
  );
};
