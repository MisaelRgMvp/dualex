import React, { useState, useEffect } from 'react';
import uno from '../images/baner/1.jpg'
import {
    Button,
    Space,
    Typography,
    Input,
    Select,
    message,
    Row,
    
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
import mvp from '../images/mvp.png'
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
    <div  className='homeContainer'  >
   
    
   
    
    <div  >
    
     <Card className='card' onClick={() => setModal2Open(true)} loading={isLoading} style={{borderRadius:'px', boxShadow:'0px 0px 5px 2px rgba(1, 1, 1, 0.6)'}}cover={<img alt="example" src={mvp} style={{align:'center'}} loading={isLoading}/>}
  >

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
    </div>    
    </div>
  )
}

export default CardsComida;