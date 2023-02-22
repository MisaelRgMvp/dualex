import React, { useState } from 'react';
import { Modal, Button, Badge, Row, Col, Collapse, Card, Image} from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { baseurl } from '../base/baseUrls';

  
export default function ModalComidaInfo({product}) {
   
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
         <div  >
   <h1><p>{product.nombre}</p></h1>
<Card style={{heigh:'75vh'}}>
          
          <Row gutter={[12,20]} >
            <Col span={10}>
              <div>
                <Image src={baseurl+'Downloads/'+product.imagen} preview={false} alt="Food" />
              </div>
            </Col>
            <Col span={14}>
              <p>Precio:${product.precio}</p>
              <p>Tiempo de entrega:{product.tiempo}</p>
              <p>Envío gratis: {product.tiempo}</p>
              <Collapse style={{background:'none', border:'none'}}>
                <Panel header={<p>Detalles</p>} key="0">
                  <p>{product.descripcion}</p>
              
                </Panel>
              </Collapse>
            </Col>
          </Row>
          </Card>
   </div>  
      
    </>
  );
};
