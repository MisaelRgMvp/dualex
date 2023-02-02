import React, { useState, useEffect } from 'react'
import {Avatar, Skeleton, Image, Popover, Button, Dropdown, Card, Divider} from 'antd'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {UserOutlined}  from "@ant-design/icons";
import { logout } from '../context/actions';
import useKeepSession from '../context/session';
import { useNavigate } from 'react-router-dom';
import { baseurl } from '../base/baseUrls';
const Porfile = () => {
  const dispatch = useDispatch();
  
  const user = useSelector(state => state.user.user);
  const firstLetter = user ? user.nombre.charAt(0) : "" ;
  const userName = user ? user.nombre : " " ;
  const userLastName = user ? user.apellido : " " ;
  const fotoPerfil =  user ? user.fotoPerfil : " ";
  const navigate = useNavigate();
  const [color, setColor] = useState('#f56a00');
  const random = Math.floor((Math.random() * (8 - 0 + 1)) + 0);
  const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae', '#800000', '#808000', '#808000', '#000080', '#808080'];
  const [isLoading, setIsLoading] = useState(user ? false : true)
  const changed = false
 
    
  // useEffect(() => {
    
  //   setColor(ColorList[random]);

  // }, [changed]);


const redirectUser = () =>{
  navigate('/profile')
}
  const handleLogout = () => {
    dispatch(logout());
      localStorage.removeItem('user')
      localStorage.removeItem('userInfoJson')
      localStorage.removeItem('token')
    }
    const [open, setOpen] = useState(false);
    const hide = () => {
      setOpen(false);
    };
    const handleOpenChange = (newOpen) => {
      setOpen(newOpen);
    };
    if(user){
      if (fotoPerfil !== null || fotoPerfil != " " ) {
        const items = (
        <><Card onClick={()=> redirectUser()}>{fotoPerfil ? <><><p><Avatar src={baseurl+'Downloads/'+fotoPerfil}></Avatar> {userName} {userLastName}</p></></> :<><p><Avatar size={64} style={{ background: color }}>{firstLetter}</Avatar>{userName} {userLastName}</p></>}</Card>
       
        <Divider></Divider>
        
          <Button onClick={handleLogout} style={{width:'25vw'}}>CERRAR SESION</Button>
         
          </>
       
        )
        return (
         <Popover
         placement="bottomRight" 
         trigger="click"
        open={open}
        content={items}
        onOpenChange={handleOpenChange}
              > 
        {/* <Skeleton loading={isLoading}> */}
              <Avatar size={64} src={baseurl+'Downloads/'+fotoPerfil} />
              {/* </Skeleton> */}
      </Popover>
  
        )
      } else {
        return(
          <Skeleton loading={isLoading}>
        
   </Skeleton>
          )
      }

    }
    else{
      const routeChange = () =>{ 
        let path = `/login`; 
        navigate(path);
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
  }
    export default Porfile;