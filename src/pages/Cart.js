import React, { useState, useEffect, useRef } from 'react';
import { List, Affix, Button, Card, Divider, Typography, Row, Col, Input } from 'antd';
import {  HomeFilled,DownOutlined, UserOutlined, LockFilled,PoweroffOutlined,MenuOutlined, ShoppingCartOutlined,CloseCircleFilled } from '@ant-design/icons';
import Porfile from '../components/porfile';
const { Text } = Typography;
const Cart = () => {
  const [items, setItems] = useState([
    { id: 1, image: 'https://via.placeholder.com/150', name: 'Producto 1', price: 20 },
    { id: 2, image: 'https://via.placeholder.com/150', name: 'Producto 2', price: 30 },
    { id: 3, image: 'https://via.placeholder.com/150', name: 'Producto 4', price: 40 },
    { id: 4, image: 'https://via.placeholder.com/150', name: 'Producto 5', price: 80 },
    { id: 5, image: 'https://via.placeholder.com/150', name: 'Producto 6', price: 25 },
    { id: 6, image: 'https://via.placeholder.com/150', name: 'Producto 7', price: 10 },
    { id: 7, image: 'https://via.placeholder.com/150', name: 'Producto 8', price: 30 },
  ]);

  const [total, setTotal] = useState(90);

  const handleDelete = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleBuy = () => {
    alert('Compra realizada con éxito!');
    
};
//   const [cardHeight, setCardHeight] = useState(0);

//   useEffect(() => {
//     const card = document.getElementById("card");
//     setCardHeight(card.clientHeight);
//   }, []);
//   const [affix, setAffix] = useState(true);

let element = document.getElementById('card');
let divScroll =document.getElementById('div');
const [scrollYPosition, setScrollYPosition] = useState(0);
window.onscroll = function() {
    setScrollYPosition(window.scrollY);
    };

const [colSize, setColSize] = useState(8);
const cardRef = useRef(null);
useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const card = cardRef.current;
        if (card.scrollTop + card.offsetHeight <= card.scrollHeight) {
          setColSize(24);
         
        }else{
          setColSize(8);
         
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [cardRef])

  return (
    <div  style = {{ overflowX: 'hidden',overflowY:'hidden' }} id='div'>
    <Row style={{background:'white',borderBottom:'solid 0.2px gray', boxShadow: "0vmax 0vmax 1vh 0.31vw rgba(0, 0, 0, 0.1)"}} > 
      
      
      <Col span={2} > 
     
    <Button type="text" className='buttonMenu'><MenuOutlined style={{fontSize: '1.8vmax'}} className='iconMenu' /></Button>  
  <h1>{colSize}</h1>
  
      </Col>
      <Col span={18} ><p style={{fontSize:'3vmax', margin:0}}>DUALEX</p></Col>
      


      <Col span={2} style={{alignContent:'middle'}}>

  <Porfile />
   
  </Col>   
      <Col span={2}>
 
  <Button type="text" className='buttonMenu' onClick={(e) => e.preventDefault()}  >
     

     <ShoppingCartOutlined style={{fontSize: '1.8vmax'}} className='iconMenu' />
   </Button>

   </Col>   
    </Row >
< Row />
<div id='card' ref={cardRef} style={{ margin:'1%', background: '#fff', boxShadow: "0vmax 0vmax 1vh 0.5vw rgba(0, 0, 0, 0.3)" }}>
    <div style={{padding:'5%', background:'blue !important'}}>
        <List
          dataSource={items}
          renderItem={(item) => (
            <List.Item
              actions={[
        
                <a key="list-loadmore-edit" onClick={() => handleDelete(item.id)}>
                  Eliminar
                </a>,
              ]}
            >
              <List.Item.Meta
                avatar={<img src={item.image} alt={item.name} style={{ width: '100px' }} />}
                title={item.name}
                description={`Precio: ${item.price}`}
              />
            </List.Item>
          )}
        />
        <Divider />
        <h1>HOLA</h1>
          </div>
<Affix offsetBottom={0} style={{position: 'sticky',zIndex:22,bottom:0, width:'100%',left:0,right:0 , background:'white', boxShadow: "0px 0px 05px rgba(0,0,0,0.51)"}}> 
<Row style={{background:'white', padding:'25px' }}>
            <Col span={colSize}>
              <Button type="primary" onClick={handleBuy}>
                Comprar
              </Button>
            </Col>
            <Col span={colSize}>
              <Text strong>Total: {colSize}</Text>
            </Col>
            <Col span={colSize}>
              <Text>Envío: Gratis</Text>
            </Col>
          </Row>      
</Affix>
         </div>

        <div style={{ margin:'1%', background: '#fff', padding: '2%',  boxShadow: "0vmax 0vmax 1vh 0.5vw rgba(0, 0, 0, 0.3)" }}>
 hola 
  </div>
    </div>
  );
};

export default Cart;

