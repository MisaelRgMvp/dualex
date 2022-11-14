import React, { NavLink, useState } from 'react'
import { useHistory } from "react-router-dom";
import mvp from '../images/mvp2.png';
import burger from '../images/burger.jpg'
import '../desing/designIn.css'
import { useNavigate } from "react-router-dom";
import {  HomeFilled, UserOutlined, LockFilled,PoweroffOutlined, ShoppingCartOutlined,CloseCircleFilled } from '@ant-design/icons';

import {
  Button,
  Space,
  Typography,
  Input,
  Select,
  message,
  Drawer,
  Row,
  Divider,
  Form,
  Checkbox,
  Grid,
  Col,
  Radio,
  Modal,
  Avatar
} from "antd";
import { SketchOutlined , SmileOutlined, SafetyCertificateOutlined, WomanOutlined, LockOutlined, InfoCircleOutlined, IdcardOutlined, MenuOutlined  } from "@ant-design/icons";
import Password from 'antd/lib/input/Password';
import Item from 'antd/lib/list/Item';

import { Navigate } from 'react-router-dom';


export default function Menu() {
    const [open, setOpen] = useState(false);
    const [openS, setOpenS] = useState(false);

    const showDrawer = () => {
      setOpen(true);
    };
    const showDrawerS = () => {
        setOpenS(true);
      };
    const onClose = () => {
      setOpen(false);
    };
    const onCloseS = () => {
        setOpenS(false);
      };

    const fontSize = { 
      labelCol: {
    
    xs: {
      span: 12,
    },
    sm: {
      span: 8,
    },
    },
    wrapperCol: {
    
    xs: {
      span: 4,
    },
    sm: {
      span: 20,
    },
    },
    };
   
        let navigate = useNavigate(); 
        const routeChange = () =>{ 
          let path = `/login`; 
          navigate(path);
        }
        const [loadings, setLoadings] = useState([]);
        const enterLoading = (index) => {
          setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
          });
        }
  return (
    <div>
        <center>
      <Row className='Baneer' flex="auto" gutter={1}> 
      
      
        <Col className='home'> 
       
      <Button type="text" className='buttonMenu' onClick={showDrawer} ><MenuOutlined style={{fontSize: '1.8vmax'}} className='iconMenu' /></Button>
      <Drawer
        title={<p style={{textAlign:'center', display: 'block', fontSize:'1.9vmax'}} >DUALEX</p>}
        placement={'left'}
        closeIcon={<CloseCircleFilled style={{left:'0.5vw', top:'0.5vh', position:'absolute'}} />}
        onClose={onClose}
        open={open}
        
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
        </Col>
        <Col  className='titleBanner'><p>DUALEX</p></Col>
       


        <Col  className='shopCar'>

        <Button onClick={routeChange} type='text' className='buttonMenuLogin' style={{background:'none'}} Link to icon={<Avatar size={ { xs: 14, sm: 18, md: 22, lg: 26, xl: 30, xxl: 34 }} style={{fontSize:'1vmax'}} icon={<UserOutlined  />} />} 
        {...fontSize}
        >
         INICIAR SESION </Button>

        
        <Button type="text" className='buttonMenu' onClick={showDrawerS}  >
       

          <ShoppingCartOutlined style={{fontSize: '1.8vmax'}} className='iconMenu' />
        </Button>
     
    
        
      
    </Col>
      </Row >
      
     <div className="site-drawer-render-in-current-wrapper">
     
    <Row align='middle'>

    <Col style={{background:'red'} } span={
          8}
          xs={20} sm={20}  md={12} lg={8} xl={8}>  
   <p>Hello</p>
      </Col>  
      <Col style={{background:'green'}} span={
          8}
          xs={20} sm={20}  md={12} lg={8} xl={8}> 
   <p>Hello</p>
      </Col>  
     
     < Col style={{background:'blue'}} span={
          8}
          xs={22} sm={40}  md={12} lg={8} xl={8}>  
   <p>Hello</p>
      </Col>  
    <Drawer 
     xs={20} sm={20} md={12} lg={8} xl={8}
        className='st'
        title="Basic Drawer"
        placement="right"
        onClose={onCloseS}
        open={openS}
        getContainer={false}
        style={{
          position: 'fixed', top: '10vh', background: 'rgba(0,0,0,0)'
        }}
      >
        <p>Lorem ipsum dolor sit amet. Sit repellat quis est impedit beatae est corrupti sapiente aut nostrum quod. Et aliquid voluptas non molestiae aspernatur et tenetur tenetur qui saepe perspiciatis! Rem illo blanditiis aut asperiores galisum est earum fugiat et ipsum veritatis. Qui corrupti natus aut dolores voluptatem et distinctio optio ea soluta galisum et perspiciatis quisquam. </p><p>Sit consectetur explicabo non commodi repellendus et doloremque adipisci in officia sint non corrupti sint et nihil labore et ipsam eligendi! Et sint aperiam et cupiditate necessitatibus eum voluptatem sapiente aut veniam soluta qui rerum quia non exercitationem voluptas? Et sunt rerum ut asperiores doloremque aut dignissimos laborum. Aut amet repudiandae aut alias sint a corrupti adipisci. </p><p>Est accusamus voluptas et dolore doloremque ut iste recusandae. Aut neque maiores est perspiciatis distinctio ea sunt delectus. Est omnis omnis sed accusamus veniam aut libero aperiam et laborum iste et voluptatem libero a nesciunt ipsum hic eius voluptatum. Eos dolor nesciunt et sunt voluptatibus est asperiores ipsa hic iste voluptas et rerum laborum est nihil nihil. </p><p>Ut officiis nulla vel sint suscipit ut temporibus illo in fugiat quia. Sit facilis sequi ut iusto Quis sed maiores voluptas ad vero cupiditate est nesciunt temporibus. Qui nostrum dolor aut inventore saepe nam libero quae non mollitia galisum qui illum tenetur sed repellendus quos. Rem architecto recusandae aut distinctio aperiam non vero consequuntur sed quos repellat? </p><p>Nam omnis iste quo similique maiores hic iure architecto qui dolorem ratione qui quisquam galisum id exercitationem error ea consequatur distinctio. Eos iure eaque aut facilis earum aut dolores nulla et laboriosam numquam! </p><p>Et quas reiciendis a temporibus reprehenderit eum eveniet voluptatum et internos nobis eum maxime ullam rem minima alias ab quia omnis. Ad galisum provident sit assumenda voluptates ea consequatur quidem est officiis quis. Qui iste voluptas aut porro doloremque aut expedita nihil ad quia rerum aut quae natus eos alias consequatur ut ipsam quis. </p><p>Ut aspernatur eius qui libero odit vel rerum consequatur ut voluptas error sed unde amet. Ea molestias officia qui impedit reiciendis ut culpa molestias qui nobis tempora id dolorem pariatur! </p><p>Vel debitis sapiente et odio voluptas et voluptas nostrum et commodi ullam sit maiores quia quo nemo eius eum molestias optio? Est consequatur fugit est veniam tempore est iusto numquam et aperiam officiis. Qui beatae commodi ut consequatur voluptatum quo sunt labore ut accusantium quidem. Hic reiciendis magni ut quod officia et expedita unde sit facere voluptatem 33 magni asperiores et cupiditate totam sit eaque explicabo? </p><p>Et corrupti voluptatem non ratione molestias qui quas alias ut eveniet quibusdam hic reiciendis laborum non illo consectetur ea dolores galisum. Vel soluta explicabo quo voluptatum perspiciatis in iure consequuntur ut dolorem quaerat aut beatae ratione 33 galisum modi. Hic sunt eaque qui asperiores sequi aut corporis fuga? A dolore beatae est modi harum ea mollitia sequi et incidunt ducimus vel tempora voluptatem. </p><p>Qui similique natus et possimus ipsum nam suscipit ipsam est impedit iste. Qui nisi reprehenderit vel incidunt voluptatum sed quas impedit eum autem fugit! </p><p>Et galisum possimus sed odit iste sed eius dolor! Ut voluptas dolorem aut dolorem dolor qui aspernatur magni 33 dicta voluptatibus. </p><p>Et dolorem obcaecati et pariatur facilis et voluptatibus nihil sed voluptas inventore in odio earum ea cupiditate consectetur. Id numquam repudiandae cum sunt ducimus est tenetur quam! </p>

      </Drawer>
      
    

    <Col style={{background:'red'} } span={
          8}
          
          xs={20} sm={20} md={12} lg={8} xl={8}>  
   <p>Hello</p>
      </Col>  
      <Col style={{background:'green'}} span={
          8}
          xs={20} sm={20}  md={12} lg={8} xl={8}> 
   <p>Hello</p>
      </Col>  
     
     < Col style={{background:'blue'}} span={
          8}
          xs={20} sm={20}  md={12} lg={8} xl={8}>  
   <p>Hello</p>
      </Col>  
</Row>
</div>
</center>
      </div>
  )
}