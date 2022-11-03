import React from 'react'
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
import Password from 'antd/lib/input/Password';
import Item from 'antd/lib/list/Item';
import mvp from '../images/mvp.png'
import delivery from '../desing/delivery.svg'

const { Title, Text } = Typography;






function CardsComida() {
  return (
    <div  className='homeContainer'  >
    <img src={delivery}></img>
    
     <div className='banner'>
    
      <Text> Barra de inicio no importa por ahora</Text>
    
       <Divider/>
     </div>
    
    <div className='components' >
    
     <Card size='small' className='cardAnt' >
    <Title level={3} >Nombre de la comida</Title>
    
    <Text> Precio </Text>
    <ClockCircleOutlined />
      <Text>
        15-20min 
    
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