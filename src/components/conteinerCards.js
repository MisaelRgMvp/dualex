import React from 'react'

import {
    
    Typography,
    Divider,
    Card
  } from "antd";
  import { ClockCircleOutlined, DollarOutlined  } from "@ant-design/icons";

import delivery from '../desing/delivery.svg'

const { Title, Text } = Typography;

function ConteinerCards() { 

  const studentDetails = ['Alex', 'Anik', 'Deven', 'Rathore'];

  const names = []

  studentDetails.forEach((data) => {
    names.push(<h3 className='student_name'>{data}</h3>)
  })


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

export default ConteinerCards;