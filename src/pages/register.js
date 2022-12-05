import React, { useState, useEffect } from 'react'
import mvp from '../images/mvp2.png';
import burger from '../images/burger.jpg'
import '../desing/designRe.css'
import {Link, Navigate } from "react-router-dom";
import {  HomeFilled, UserOutlined, LockFilled,PoweroffOutlined } from '@ant-design/icons';
import { routeChangeHome, routeLogin } from '../components/navigate'; 
import {
  Button,
  Space,
  Typography,
  Input,
  Select,
  Spin,
  message,
  Row,
  Divider,
  Form,
  Checkbox,
  Grid,
  Col,
  Radio,
  Modal,
  
} from "antd";
import { SketchOutlined , SmileOutlined, SafetyCertificateOutlined, WomanOutlined, LockOutlined, InfoCircleOutlined, IdcardOutlined  } from "@ant-design/icons";
import Password from 'antd/lib/input/Password';
import Item from 'antd/lib/list/Item';
import { HomeButton } from '../components/navigate';
export default function Register() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
     // Wait for 3 seconds
     setTimeout(() => {
       setIsLoading(false);
      
     }, 3000);
    }, []);
  const fromSuccess=(datos) => {

      alert("Fromulario enviado exitosamente", datos)
      
      }
      
      const fromFailed=(error) => {
      
        alert("Fromulario enviado sin Exito", error)
        
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

      <Row className='Baneer' flex="auto" gutter={1}> 
      <Col>
      
        <Col className='home'>
        <Button size='large' className='buttonHome' type='text'  icon={<HomeFilled />} >REGRESAR</Button>
        </Col>
        <Col className='titleBanner'><p>DUALEX</p></Col>

      
    </Col>
      </Row>
    <Row >
       
      
        <Col  className='containerSecundarioL' span={
          12
        }>
          <div  style={{position: 'fixed'}} className='pruebass' />
        </Col>
        <Col 
        className='containerPrincipalL'
        span={
          12
        }><Spin tip="Cargando..." spinning={isLoading}>
                      <div className='containerRegister' >
                      <h1 className='subtitle'>REGISTRO</h1>
         <Form >

   
   
       
        

  <Input
                className='input' 
                placeholder='USUARIO'
                autoSize='true'
                prefix={<UserOutlined className="site-form-item-icon icon" />}

                /><br></br>
 <Input
                className='input' 
                placeholder='USUARIO'
                autoSize='true'
                prefix={<UserOutlined className="site-form-item-icon icon" />}

                /><br></br>
 <Input
                className='input' 
                placeholder='USUARIO'
                autoSize='true'
                prefix={<UserOutlined className="site-form-item-icon icon" />}

                /><br></br>

        

        
      
   
<Input.Password 
                className='input' 
                prefix={<LockFilled className="site-form-item-icon icon"  />}
                placeholder='CONTRASE&Ntilde;A'/><br />
        
       

        <Button   loading={loadings[2]} onClick={() => enterLoading(2)} className='Button' type='primary' size='large' htmlType='submit' > Registrar Usuario </Button>
        <p>Ya tienes cuenta?         <Button><Link to='/login'>Iniciar Sesion</Link></Button>
        </p>
</Form>

</div>
</Spin>
        </Col>
      </Row>
      
      </div>
      
  )
}