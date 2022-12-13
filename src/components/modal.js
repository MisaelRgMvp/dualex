import React, { useState } from 'react';
import { MinusOutlined, PlusOutlined, QuestionOutlined, ShoppingCartOutlined, ClockCircleOutlined  } from '@ant-design/icons';
import { Avatar, Badge, Button, Switch, Space, Row } from 'antd';
import uno from '../images/dualComida.jpg'
import delivery from '../desing/delivery.svg'

import {
    Image,
    Col,
    Typography,
    Card
  } from "antd";
  import { DollarOutlined  } from "@ant-design/icons";
import '../desing/desing.css'
const { Title, Text } = Typography;
export default function ModalComidaInfo() {
  const [count, setCount] = useState(1);
  const [disabled, setDisabled] = useState(false);
      let newCount = count - 1;

  const [show, setShow] = useState(true);
  const increase = () => {
    if(count>=1){
        setDisabled(false);
    }
    setCount(count + 1);
  };
  const decline = () => {
    
     
    if (newCount = 1) {
      newCount = 1;
      setDisabled(true);

    }
    setCount(newCount);
  };
  return (
    <>
         <div  >
    
    <Card  style={{width:'100%',}}
 >
  <Row style={{ height: '45vh'}}>

 <Col span={8} style={{height:'100%'}}>
    <div style={{display:'block', height: '100%', width: '100%'}}>
    

      <Image preview={false}  src={uno} width="100%" height={'100%'} />
  </div>
  </Col>
<Col span={16}>

<div style={{position: 'absolute',marginLeft: '2%',marginRight: '2%'}}>

   
    <Title level={1} >Nombre de la comida</Title>
    
    <p> <DollarOutlined />Precio:   
      <Text> $00.00</Text></p>
      <Text>
    <p><ClockCircleOutlined />Tiempo : <Text> 15-20min</Text></p>  
    </Text>
    <p>Detalles: <Text>Nulla sit consectetur deserunt ea minim. Nulla consectetur ullamco eu voluptate adipisicing adipisicing irure fugiat fugiat elit. Laborum Lorem velit cupidatat enim mollit qui veniam qui consequat enim pariatur est incididunt. Laboris minim exercitation non id minim excepteur id dolore nulla excepteur non ipsum. Laborum anim sunt in aute ea fugiat. Quis incididunt irure commodo mollit velit excepteur.</Text></p>
      
      <p><img width='3%' src={delivery}></img> 
           Envio Gratis
      </p>
      
    </div>
</Col>
   
  </Row>
    </Card>
    <Space direction="vertical">
      <Space size="large">
       
          <Button onClick={decline} icon={<MinusOutlined />} disabled={disabled} /> 
        <Badge count={count}>
          <Avatar shape="square" size="large" src={<ShoppingCartOutlined style={{fontSize:'30px', color: 'black'}} />}/>
        </Badge>
          <Button onClick={increase} icon={<PlusOutlined />} />
        
      </Space>
      <Button type='primary'
       >ANANDIR AL CARRITO</Button>
    </Space>
   </div>  
      
    </>
  );
};
