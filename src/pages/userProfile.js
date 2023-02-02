 import React, { NavLink, useState, useEffect } from 'react'
 import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { baseurl } from '../base/baseUrls';
import dos from '../images/baner/2.gif';
import useKeepSession from '../context/session';
import {useAuthContext} from '../context/authContext';
import uno from '../images/baner/1.jpg';
import UserProfileAvatar from '../components/userProfile';
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
import {  HomeFilled,DownOutlined, UserOutlined, LockFilled,PoweroffOutlined, ShoppingCartOutlined,CloseCircleFilled } from '@ant-design/icons';
import DrawerMenu from '../components/menu'

import {
  Button,
  Dropdown, Upload,
  Carousel,
  Space,
  Typography,
  Input,
  Select,
  Skeleton,
  message,
  Drawer,
  Row,
  Divider,
  Card,
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

const UserProfile = () => {
  useKeepSession();
  const [form] = Form.useForm();

 
  
  
  const  BtnLogin = () => {
    
   
    return(
      <>
      <UserProfile></UserProfile>
        </>
  
    );
  }
     
  const { Panel } = Collapse;
  const [visible, setVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(0);

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


  const [isLogged, setIsLogged] = useState(true);
  const [top, setTop] = useState(10);
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const [isLoading, setIsLoading] = useState(true)
  const firstLetter = user ? user.nombre.charAt(0) : "" ;
  const userName = user ? user.nombre : " " ;
  const userLastName = user ? user.apellido : " " ;
  const fotoPerfil =  user ? user.fotoPerfil : " ";
  const navigate = useNavigate();
  const [color, setColor] = useState('#f56a00');
  const random = Math.floor((Math.random() * (8 - 0 + 1)) + 0);
  const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae', '#800000', '#808000', '#808000', '#000080', '#808080'];
  console.log(user);
  
 
    
  useEffect(() => {
      setColor(ColorList[random]);
      if(!user){
          setIsLoading(false);
          console.log(isLoading);
      }

  }, []);
        const { Search } = Input;
        const suffix = (
    <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}  
    />  
    );  
    const imageUno = {mvp};
   
  const onSearch = (value) => console.log(value);
  const [open, setOpen] = useState(false);

    const [openS, setOpenS] = useState(false);
  

    const showDrawer = () => {
      
      if(loadings!=false){

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
      
         
  return (   
    <div style = {{ overflowX: 'hidden' }} className="site-drawer-render-in-current-wrapper">
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
        


        <Col span={2} style={{alignContent:'middle'}}>
            <UserProfileAvatar></UserProfileAvatar>
    </Col>   
        <Col span={2}>
        <Dropdown
  
    trigger={['click']}
  >
    <Button type="text" className='buttonMenu' onClick={(e) => e.preventDefault()}  >
       

       <ShoppingCartOutlined style={{fontSize: '1.8vmax'}} className='iconMenu' />
     </Button>
  </Dropdown>
        
     </Col>   
      </Row >
      <Affix offsetTop={0} style={{position: 'sticky',top:'0%',zIndex:22, padding:13, background:'white', boxShadow: "0px 5px 5px rgba(0,0,0,0.3)"}}> 
      <div  > 
      <Input placeholder="Buscar comida" className='inputSearch' onPressEnter={()=>onSearch()} suffix={<Button type="text" icon={<SearchOutlined />} style={{background:'none'}} shape="circle"></Button>}/>  
</div>      
      </Affix>
     
    
< Row />
<div style={{ margin:'1%', background: '#fff', padding: '2%',  boxShadow: "0vmax 0vmax 1vh 0.5vw rgba(0, 0, 0, 0.3)" }}>

  
    <Row align='middle'  gutter={[24, 20]} >
        <Col span={24}>
      <UserProfileAvatar />
        </Col>

</Row>
</div>
</center>

<div style={{width:'100vw', height:'25vh', background:'#fff',marginTop:'1%', boxShadow: "0vmax 0vmax 1vh 0.5vw rgba(0, 0, 0, 0.3)", position:'relative', bottom:'0 !important' }}>
  <MyFooter />
  

</div>
<div>  </div>

      </div>     
  )
}  
export default UserProfile;

