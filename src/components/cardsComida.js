import React, { useState, useEffect } from 'react';
import uno from '../images/dualComida.jpg'
import {
    Button,
    Space,
    Typography,
    Input,
    Select,
    message,
    Row,
    Image,
    Divider,
    Form,
    Checkbox,
    Grid,
    Radio,
    Modal,
    Card
  } from "antd";
  import { SketchOutlined , SmileOutlined, SafetyCertificateOutlined, WomanOutlined, UserOutlined, LockOutlined, InfoCircleOutlined, IdcardOutlined, ClockCircleOutlined, DollarOutlined  } from "@ant-design/icons";

import Item from 'antd/lib/list/Item';
import mvp from '../images/dualComida.jpg'
import delivery from '../desing/delivery.svg'
import '../desing/desing.css'
const { Title, Text } = Typography;





function CardsComida({setModal2Open}) {
  const [isLoading, setIsLoading] = useState(true);
useEffect(() => {
   // Wait for 3 seconds
   setTimeout(() => {
     setIsLoading(false);
    
   }, 8000);
  }, []);
  
  return (
  
    
     <Card  className='card' onClick={() => setModal2Open(true)} loading={isLoading} 
  >
    <div style={{display:'block', height: 150, width: '100%'}}>
    <div style={{display:'block', height: 150, width: '100%'}}>
    

      <Image preview={false} className='imageCard' src={uno} width="100%" height={'100%'} />
  </div>
  </div>

   
    <Title level={3} >Nombre de la comida</Title>
    
    <Text> Precio </Text>
    <ClockCircleOutlined />
      <Text>
      <img width='3%' src={delivery}></img> 15-20min 
    
      </Text>
    
      <Text>
         Envio Gratis
      </Text>
      <DollarOutlined />
    
     </Card>
    
  )
}

export default CardsComida;