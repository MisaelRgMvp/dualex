import React, { useState } from 'react';

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
