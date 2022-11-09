import React, { useState } from 'react';
import { MailOutlined } from '@ant-design/icons';
import { MenuProps, Switch, Drawer, Button } from 'antd';


function Theme()  {
 const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  
    const [theme, setTheme] = useState('dark');
    const [current, setCurrent] = useState('1');
    const changeTheme = (value) => {
      setTheme(value ? 'dark' : 'light');
    };
    const onClick = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
    };
  return (
    <>
      
      <Switch
        checked={theme === 'dark'}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
      
      
      <Drawer title="Basic Drawer0" theme={theme} placement="left" open={open}  onClose={onClose}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      <Button  onClick={showDrawer}>SALI MENU</Button>
    </>
  );
};
export default Theme;