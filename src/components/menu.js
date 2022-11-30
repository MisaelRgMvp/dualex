import { MailOutlined } from '@ant-design/icons';
import { Menu, Switch } from 'antd';
import React, { useState } from 'react';
function getItem(label, key, icon, children, theme) {
  return {
    key,
    icon,
    children,
    label,
    theme,
  };
}
const DrawerMenu = () => {
    const [theme, setTheme] = useState('light');
  const [current, setCurrent] = useState('1');
  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light');
  };
  const onClick = (e) => {
    setCurrent(e.key);
  };
  const items = [
    getItem('CONFIGURACION', '5'),
    getItem('OPCION 2', '6'),
  ];
  return (
    <div style={{width:'100%', height:'100%'}}>
      
      
      <Menu
        onClick={onClick}
        style={{width:'100%'}}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="vertical"
        theme="light"
        items={items}
      />
    </div>
  );
};
export default DrawerMenu;