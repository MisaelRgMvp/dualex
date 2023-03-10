import React, { useState } from 'react';
import { Modal, Button, Badge, Row, Col, Collapse, Card, Image} from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';



export default function Misa() {
   
    const { Panel } = Collapse;
  const [visible, setVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(0);

  const showModal = () => {
    setVisible(true);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  const decreaseQuantity = () => {
    setQuantity(Math.max(quantity - 1, 1));
  };
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const addToCart = () => {
    setCartCount(cartCount + quantity);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal width={"80vw"}
              title="Información de la comida"
        visible={visible}
        onCancel={handleCancel}
        footer={[
          
          <Col overlap > 

          <Button onClick={decreaseQuantity} style={{margin:'2%'}}>-</Button>
                <Badge count={quantity} key="cart"   >
              <ShoppingCartOutlined style={{fontSize:35}} />
          </Badge>
  <Button onClick={increaseQuantity} style={{margin:'2%'}}>+</Button>,
            <Button type="primary" onClick={addToCart}>
              Añadir al carrito 
            </Button>
          </Col>
        ]}
      >
        <Card style={{heigh:'75vh'}}>
          
        <Row gutter={[12,20]} >
          <Col span={10}>
            <div>
              <Image src="http://localhost:3000/static/media/dualComida.0556a7915dc8ec975973.jpg" preview={false} alt="Food" />
            </div>
          </Col>
          <Col span={14}>
            <p>Precio: $10</p>
            <p>Tiempo de entrega: 30 minutos</p>
            <p>Envío gratis: Sí</p>
            <Collapse style={{background:'none', border:'none'}}>
              <Panel header={<p>Detalles</p>} key="0">
                <p>Ingredientes: carne, queso, tomate, lechuga, pan</p>
                <p>
                  Descripción: Un delicioso sandwich de carne con queso derretido, tomate fresco y lechuga crujiente, servido en un pan suave y caliente.
                </p>
              </Panel>
            </Collapse>
          </Col>
        </Row>
        </Card>
        <p>
  </p>
</Modal>
<h1>Hola</h1>
</>
);

    }
