import React, { useState, useEffect, useRef } from 'react';
import uno from '../images/dualComida.jpg'
import { baseurl, baseProductos } from '../base/baseUrls';
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
    Col,
    Radio,
    Modal,
    Card
  } from "antd";
  import { SketchOutlined , SmileOutlined, SafetyCertificateOutlined, WomanOutlined, UserOutlined, LockOutlined, InfoCircleOutlined, IdcardOutlined, ClockCircleOutlined, DollarOutlined  } from "@ant-design/icons";
import axios from 'axios';
import Item from 'antd/lib/list/Item';
import mvp from '../images/dualComida.jpg'
import delivery from '../desing/delivery.svg'
import '../desing/desing.css'
const { Title, Text } = Typography;




function CardsComida({setModal2Open, setProducts}) {
  const [productList, setProductList] = useState([]);
  const ref2 = useRef(null);
  const ModalProducts = (product) =>{
    setModal2Open(true);
    setProducts(product)
  }
  useEffect(() => {
    
    axios.get(baseProductos)
      .then(response => {
        setProductList(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  const [isLoading, setIsLoading] = useState(true);
 
useEffect(() => {
   // Wait for 3 seconds
   setTimeout(() => {
     setIsLoading(false);
    
   }, 8000);
  }, []);
  
  return (
  
    productList.map((product, index) => {
      return (

        <Col ref={ref2} span={
          8}
        xs={24} sm={20}  md={12} lg={8} xl={8} xxl={6} key={index} >
     <Card  onClick={() => ModalProducts(product)} style={{background:'none', border:'none'}} loading={isLoading} 
  >
    <div  className='card' >
      
    <div style={{display:'block', height: 150, width: '100%'}}>
    <div style={{display:'block', height: 150, width: '100%'}}>
    

       <Image preview={false} className='imageCard' src={baseurl+'Downloads/'+product.imagen} width="100%" height={'100%'} /> 
  </div>
  </div>

   
    <Title level={3} >{product.nombre}</Title>
    
    <Text> Precio {product.precio} </Text>
    <ClockCircleOutlined />
      <Text>
      <img width='3%' src={delivery}></img> {product.tiempo} 
    
      </Text>
    
      <Text>
         {product.envio}
      </Text>
      <DollarOutlined />
    </div>
    
     </Card>
    </Col>
     )
    })
    )
  }

export default CardsComida;