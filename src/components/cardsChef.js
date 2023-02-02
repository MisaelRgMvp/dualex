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
    Avatar,
    Image,
    Divider,
    Form,
    Checkbox,
    Grid,
    Radio,
    Modal,
    Card
  } from "antd";
  import { EditOutlined, DeleteOutlined, SafetyCertificateOutlined, WomanOutlined, UserOutlined, LockOutlined, InfoCircleOutlined, IdcardOutlined, ClockCircleOutlined, DollarOutlined  } from "@ant-design/icons";

import Item from 'antd/lib/list/Item';
import mvp from '../images/dualComida.jpg'
import delivery from '../desing/delivery.svg'
import '../desing/desing.css'
const { Title, Text } = Typography;



    const Sizes = {
        xs: 24, sm: 12, md: 12, lg: 12, xl: 12, xxl: 40, 
    }




function CardChef({setModal2Open}) {
  const [isLoading, setIsLoading] = useState(true);
useEffect(() => {
   // Wait for 3 seconds
   setTimeout(() => {
     setIsLoading(false);
    
   }, 1000);
  }, []);
  
  return (
  
    
     <Card  className='card' onClick={() => setModal2Open(true)} loading={isLoading} 
  >
    <div style={{display:'block', height: 150, width: '100%'}}>
    <div style={{display:'block', height: 150, width: '100%'}}>
    

      <Image preview={false} className='imageCard' src={uno} width="100%" height={'100%'} />
  </div>
  </div>

   
    <Title  strong level={3} style={{fontFamily:'Besley'}} > TITULO DEL PRODUCTO</Title>
    
    <Text strong style={{marginBottom:'2%'}}> $***.^
    </Text>
      <Text strong  style={{marginLeft:'1%', color:'gray'}}><ClockCircleOutlined style={{ fontFamily:'Besley' ,marginLeft:'2%'}} /> 15-20 Min
      <img style={{marginLeft:'2.5%'}} width='3%' src={delivery}></img>  
    
      </Text>
    
      <Text strong style={{marginLeft:'1%', color:'gray', fontFamily:'Besley'}}>
         Envio Gratis
      </Text>
      
      <div>
   
            
   <Avatar size={Sizes} style={{background: 'white' , boxShadow:'0px 0px 3px rgba(0, 0, 0, 1)', right:30, bottom:'19%' , justifyItems:'middle',  position:'absolute'}} icon={<EditOutlined style={{color:'black'}}/>} />
   <Avatar size={Sizes}  style={{boxShadow:'0px 0px 3px rgba(0, 0, 0, 1)' ,background:'white' ,right:30, bottom:'1%'  , justifyItems:'middle',  position:'absolute'}} icon={<DeleteOutlined  style={{color:'black'}}/>} />

  </div>
     </Card>
    
  )
}

export default CardChef;