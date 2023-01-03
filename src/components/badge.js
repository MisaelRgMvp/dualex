import React, { useState } from 'react';
import { MinusOutlined, PlusOutlined, QuestionOutlined, ShoppingCartOutlined  } from '@ant-design/icons';
import { Avatar, Badge, Button, Switch, Space } from 'antd';
const ButtonGroup = Button.Group;
const BadgeR = () => {
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
      <Space direction="vertical">
        <br /><br /><br /><br /><br /><br /><br /><br />
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
  );
};
export default BadgeR;