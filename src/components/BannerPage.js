import React, { NavLink, useState, useRef } from 'react'
import { useSelector } from 'react-redux';
import dos from '../images/baner/2.gif';
import { Link, Outlet} from 'react-router-dom'
// import useKeepSession from '../context/session';
import {useAuthContext} from '../context/authContext';
import uno from '../images/baner/1.jpg';
import Porfile from '../components/porfile';
import Logo from '../images/logo.png';
import tres from '../images/baner/3.jpg';
import cuatro from '../images/baner/4.jpg';
import CardsComida from '../components/cardsComida';
import { useHistory } from "react-router-dom";
import mvp from '../images/mvp2.png';
import burger from '../images/burger.jpg'
import ModalComidaInfo from '../components/modal';
import '../desing/designIn.css'
import '../desing/desing.css'
import { useNavigate } from "react-router-dom";
import {  HomeFilled,DownOutlined, UserOutlined, LockFilled,PoweroffOutlined, ShoppingCartOutlined,CloseCircleFilled } from '@ant-design/icons';
import DrawerMenu from '../components/menu'

import {
  Button,
  Tour,
  Menu,
  Dropdown,
  Carousel,
  Space,
  Typography,
  Input,
  Select,
  message,
  Drawer,
  Row,
  Divider,
  Form,
  Affix,
  Checkbox,
  Collapse,
  Badge,
  Grid,
  Col,
  Radio,
  Modal,
  Avatar,
  Image
} from "antd";  
import { Navigate } from 'react-router-dom';
import { SketchOutlined,SearchOutlined ,AudioOutlined , SmileOutlined, SafetyCertificateOutlined, WomanOutlined, LockOutlined, InfoCircleOutlined, IdcardOutlined, MenuOutlined  } from "@ant-design/icons";
import Password from 'antd/lib/input/Password';
import Item from 'antd/lib/list/Item';
import MyFooter from '../components/footer';

export default function BannerPage() {
    const [showInput, setShowInput] = useState(false);
  return (
    <div>
    <div  style={{background:'#ff640f',position:'static',left:0,right:0,borderBottom:'solid 0.2px gray', boxShadow: "0vmax 0vmax 1vh 0.5vw rgba(0, 0, 0, 0.3)" }}>
        <Row>
       <Col span={4}>
       <Link to='/' >
    <Image preview={false} src={Logo} width={'60px'}/>
    </Link >
       </Col>
        <Col span={2}>
        {/* <Dropdown
    menu={{
      items,
    }}
    trigger={['click']}
  >
    <Button type="text" className='buttonMenu' onClick={(e) => e.preventDefault()}  >
       

       <ShoppingCartOutlined style={{fontSize: '1.8vmax'}} className='iconMenu' />
     </Button>
  </Dropdown>
         */}
         
         <Input  placeholder="Search..." className='inputSearch' />
 
     </Col>   
</Row>
<Row>
    <Col span={24}>
    <Menu  style={{background:'#ff640f', height: '35px',padding:0, margin:0}} mode="horizontal">
          <Menu.Item >
            
             <Link to='/forgot'>hOLA</Link> 
            
          </Menu.Item>
          <Menu.Item>
           
          </Menu.Item>
          <Menu.Item>
           
          </Menu.Item>
          </Menu>
    </Col>
</Row>
</div>
<Outlet />
<MyFooter></MyFooter>
    </div>
  )
}
