


import React, { NavLink, useState } from 'react'
import dos from '../images/baner/2.gif';
import {useAuthContext} from '../context/authContext';
import uno from '../images/baner/1.jpg';
import Porfile from '../components/porfile';
import tres from '../images/baner/3.jpg';
import cuatro from '../images/baner/4.jpg';
import CardsComida from '../components/cardsComida';
import { useHistory } from "react-router-dom";
import mvp from '../images/mvp2.png';
import burger from '../images/burger.jpg'
import ModalComidaInfo from '../components/modal';
import '../desing/designIn.css'
import { useNavigate } from "react-router-dom";
import {  HomeFilled, UserOutlined, LockFilled,PoweroffOutlined, ShoppingCartOutlined,CloseCircleFilled, PlusCircleOutlined } from '@ant-design/icons';
import DrawerMenu from '../components/menu'
import CardCreate from '../components/createNew';
import CardChef from '../components/cardsChef.js';
import {
  Button,
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
​
​
​
export default function ChefMenu () {
   
  const BtnLoginTrue = () => {
     
    const routeChange = () =>{ 
      let path = `/login`; 
      Navigate(path);
    }
    return(
      <>
      <Button onClick={() => routeChange()} type='text' icon={<><div className='LoginBtnPc'><Avatar size={ { xs: 14, sm: 18, md: 22, lg: 26, xl: 30, xxl: 34 }} style={{fontSize:'1vmax'}} icon={<UserOutlined  />} /> INICIAR SESION </div>
      <Avatar className='LoginMovil' size={ { xs: 14, sm: 18, md: 22, lg: 26, xl: 34, xxl: 38 }} style={{fontSize:'1vmax'}} icon={<UserOutlined  />} />
  </>} > 
  </Button>
  </>
  
  
  );
  }
  
  const  BtnLogin = () => {
    
   
    return(
      <>
  <Porfile style={{width: '90%'}}>
   </Porfile>
  </>
  
    );
  }
     
  const { Panel } = Collapse;
  const [visible, setVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(0);
​
  const showModal = () => {
    
    setVisible(true);
  };
  const handleCancel = () => {
    setModal2Open(false);
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
​
​
  const [isLogged, setIsLogged] = useState(true);
  const [top, setTop] = useState(10);
  
  const { Search } = Input;
    
  const onSearch = (value) => console.log(value);
  const [open, setOpen] = useState(false);
    const [openS, setOpenS] = useState(false);
​
    const showDrawer = () => {
      
      if(loadings!=false){
​
        setOpen(true);
      }
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
​
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
   
       
        const [loadings, setLoadings] = useState([]);
        const enterLoading = (index) => {
          setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
          });  
        }  
        const [modal2Open, setModal2Open] = useState(false)
​
    
  return (
    <div style = {{ overflowX: 'hidden', overflowY: 'scroll', height:'100vh' }} className="site-drawer-render-in-current-wrapper">
    <center>
  <Row style={{background:'white',position:'static',left:0,right:0,borderBottom:'solid 0.2px gray', boxShadow: "0vmax 0vmax 1vh 0.31vw rgba(0, 0, 0, 0.1)"}} > 
  
  
    <Col span={2}> 
   
  <Button type="text" className='buttonMenu' onClick={showDrawer} ><MenuOutlined style={{fontSize: '1.8vmax'}} className='iconMenu' /></Button>  
  <Drawer
    title={<p style={{textAlign:'center', fontSize:'1.9vmax'}} >DUALEX</p>}
    placement={'left'}
    closeIcon={<CloseCircleFilled style={{left:'0.5vw', position:'absolute'}} />}
    onClose={onClose}
    open={open}
    
  >
    <DrawerMenu style={{width:'100%', height:'100%'}}/>
  </Drawer>
    </Col>
    <Col span={18} ><p style={{fontSize:'3vmax', margin:0}}>DUALEX</p></Col>
    
​
​
    <Col span={2} style={{alignContent:'middle'}}>
​
{ isLogged
 ?  <BtnLogin/>
​
 :  <BtnLoginTrue />
}      
</Col>   
    <Col span={2}>
    <Button type="text" className='buttonMenu' onClick={showDrawerS}  >
   
​
      <ShoppingCartOutlined style={{fontSize: '1.8vmax'}} className='iconMenu' />
    </Button>  
 </Col>   
  </Row >
  <Affix offsetTop={0} style={{position: 'sticky',top:'0%',zIndex:22, padding:1, background:'white', boxShadow: "0px 5px 5px rgba(0,0,0,0.3)"}}> 
 
  </Affix>
 
​
< Row />
<div style={{ margin:'1%', background: '#fff', padding: '2%',  boxShadow: "0vmax 0vmax 1vh 0.5vw rgba(0, 0, 0, 0.3)" }}>
<div  style={{marginBottom:'2vh'}}>
​
​
<div/>
</div>
<Row  align='center'  gutter={[12, 10]}>
<Col  style={{}}
      xs={16} sm={12}  md={14} lg={12} xl={10}> 
      <div style={{height:'5vh',marginBottom:'22.5vh'}}>
        <CardCreate style={{fontSize:'250px'}}  />
      </div>
​
  </Col>
  <Divider style={{}} />
    </Row>
<Row align='middle'  gutter={[24, 20]}>
​
​
​
​
​
  <Col  span={
      8}
      xs={24} sm={20}  md={12} lg={8} xl={8}> 
<CardChef setModal2Open={setModal2Open} />
  </Col>  
  <Col  span={
      8}
      xs={24} sm={20}  md={12} lg={8} xl={8}> 
<CardChef setModal2Open={setModal2Open} />
  </Col>  
  <Col  span={
      8}
      xs={24} sm={20}  md={12} lg={8} xl={8}> 
<CardChef setModal2Open={setModal2Open} />
  </Col>  
  <Col  span={
      8}
      xs={24} sm={20}  md={12} lg={8} xl={8}> 
<CardChef setModal2Open={setModal2Open} />
  </Col>  
  <Col  span={
      8}
      xs={24} sm={20}  md={12} lg={8} xl={8}> 
<CardChef setModal2Open={setModal2Open} />
  </Col>  
  <Col  span={
      8}
      xs={24} sm={20}  md={12} lg={8} xl={8}> 
<CardChef  />
  </Col>  
  <Col  span={
      8}
      xs={24} sm={20}  md={12} lg={8} xl={8}> 
<CardChef setModal2Open={setModal2Open} />
  </Col>  
  <Col  span={
      8}
      xs={24} sm={20}  md={12} lg={8} xl={8}> 
<CardChef setModal2Open={setModal2Open} />
  </Col>  
  
</Row>
</div>
</center>
​
<div style={{width:'100vw', height:'25vh', background:'#fff',marginTop:'1%', boxShadow: "0vmax 0vmax 1vh 0.5vw rgba(0, 0, 0, 0.3)", position:'relative', bottom:'0 !important' }}>
<MyFooter />
</div>
<div>  </div>
​
<Modal
     title="Nombre Comida"
     centered
     
   
     open={modal2Open}
     
     footer={[
      
      <Col overlap > 
​
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
     className='modal'
   >
    <ModalComidaInfo />
   </Modal>
​
  </div>   
  )
}