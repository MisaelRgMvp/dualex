import React, { NavLink, useState, useEffect  } from 'react'
import mvp from '../images/mvp2.png';
import burger from '../images/burger.jpg'
import '../desing/designF.css'
import { useNavigate, Link } from "react-router-dom";
import { PoweroffOutlined } from '@ant-design/icons';
import {HomeFilled, UserOutlined, LockFilled} from '@ant-design/icons';
import { Button, Input, Image, Row, Col, Form, Spin } from 'antd'
import { Navigate } from 'react-router-dom';

const formItemLayout = { 
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
export default function ForgotP() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/login`; 
    navigate(path);
  }
const [isLoading, setIsLoading] = useState(true);
useEffect(() => {
   // Wait for 3 seconds
   setTimeout(() => {
     setIsLoading(false);
    
   }, 3000);
  }, []);
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
      <Row align='middle' className='Baneer' flex="auto" gutter={1}> 
      <Col>
      
        <Col className='home'>
        <Button size='large' className='buttonHome' type='text' onClick={routeChange} icon={<HomeFilled />} >REGRESAR</Button>
        </Col>
        <Col style={{textAlign:'center'} }className='titleBanner'><p>DUALEX</p></Col>

      
    </Col>
      </Row>
    <Row justify='center'>
       
      
        
        <Col 
        className='containerPrincipalf'
        span={12} 
        ><Spin tip="Cargando..." spinning={isLoading}>
         <div className='containerLogin' >
          <h1 className='subtitle'>INICIAR SESION</h1>
          <Form
      
          
          >


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
                 <a href='/'>Olvdaste tu contrase&ntilde;a?</a>
                <br />
                <Button 
                  loading={loadings[2]}
                  onClick={() => enterLoading(2)}
                  type="primary" className='Button'>
                    INICIAR SESION
                </Button>
                <br />
                <p>Aun no tienes una cuenta?</p>
                <Link to='/registro'>Crear cuenta</Link>
          </Form>
        </div></Spin>
        </Col>
      </Row>
      </div>
  )
}
