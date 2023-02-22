import React, { useState, useEffect, useRef } from 'react';
import { List, Affix, Button, Card, Divider, Typography, Row, Col } from 'antd';
import '../desing/cards.css'
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

  const [colSize, setColSize] = useState(8);
  const cardRef = useRef(null);
  useEffect(() => {
      const handleScroll = () => {
        if (cardRef.current) {
          const card = cardRef.current;
          if (card.scrollTop + card.offsetHeight === card.scrollHeight) {
            setColSize(24);
            console.log(colSize);
          } else {
            setColSize(8);
            console.log(colSize);

          }
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [cardRef])
    return (
    <div style={{height:'1000px'}} ref={cardRef} id='textContent' >
    <Card >
    <List
    dataSource={items}
    renderItem={(item) => (
    <List.Item
    actions={[
    <Button
    type="danger"
    onClick={() => handleDelete(item.id)}
    >
    Eliminar
    </Button>,
    ]}
    >
    <List.Item.Meta
    avatar={<img src={item.image} alt={item.name} style={{ width: '150px' }} />}
    title={item.name}
    description={`Precio: ${item.price}`}
    />
    </List.Item>
    )}
    />
    <Divider />
    <Affix offsetBottom={0} style={{position:'sticky', bottom:0, zIndex:22}}>
    <Row>
    <Col span={colSize}>
    <Text>Total:</Text>
    </Col>
    <Col span={colSize}>
    <Text strong>${total}</Text>
    </Col>
    <Col span={colSize}>

    <Button type="primary" block onClick={handleBuy}>
    Comprar
    </Button>
</Col>
    </Row>
    </Affix>
    </Card>
   
      </div>
      );
      };
      
      export default Cart;