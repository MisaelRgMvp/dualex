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
    FloatButton,
    Divider,
    Form,
    Checkbox,
    Grid,
    Radio,
    Modal,
    Card,
    Avatar
  } from "antd";
  import { PlusCircleOutlined, SmileOutlined, DeleteOutlined, EditOutlined, UserOutlined, LockOutlined, InfoCircleOutlined, IdcardOutlined, ClockCircleOutlined, DollarOutlined  } from "@ant-design/icons";

import Item from 'antd/lib/list/Item';
import mvp from '../images/dualComida.jpg'
import delivery from '../desing/delivery.svg'
import '../desing/desing.css'
const { Title, Text } = Typography;






function CardCreate() {
    const Sizes = {
        xs: 24, sm: 12, md: 12, lg: 12, xl: 12, xxl: 40, 
    }

  return (
  
      <div>  
    
     <Card  className='card' 
  >
    <div style={{ height: '10vh', width: '100%'}}>
    <div style={{ height: '10vh', width: '100%'}}>
     <Card   >
   <PlusCircleOutlined style={{fontSize:'6vh'}} />
   </Card>

  </div>
  </div>

   
  
     <div>
   
            
         <Avatar size={Sizes} style={{background: 'white' , boxShadow:'0px 0px 3px rgba(0, 0, 0, 1)', right:30, bottom:'50%' , justifyItems:'middle',  position:'absolute'}} icon={<EditOutlined style={{color:'black'}}/>} />
         <Avatar size={Sizes}  style={{boxShadow:'0px 0px 3px rgba(0, 0, 0, 1)' ,background:'white' ,right:30, bottom:'16%'  , justifyItems:'middle',  position:'absolute'}} icon={<DeleteOutlined  style={{color:'black'}}/>} />

        </div>
     </Card>
     </div>  
     
    
  )
}

export default CardCreate;