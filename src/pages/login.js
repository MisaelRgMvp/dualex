import React, { NavLink, useState, useEffect  } from 'react'
import '../desing/designL.css'
import { useNavigate, Link } from "react-router-dom";
import {HomeFilled, UserOutlined, LockFilled} from '@ant-design/icons';
import { Button, Input, Image, Row, Col, Form, Spin } from 'antd'

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
export default function Login() {
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
      <Row className='Baneer' flex="auto" gutter={1}> 
      <Col>
      
        <Col className='home'>
        <Button size='large' className='buttonHome' type='text' onClick={routeChange} icon={<HomeFilled />} >REGRESAR</Button>
        </Col>
        <Col className='titleBanner'><p>DUALEX</p></Col>

      
    </Col>
      </Row>
    <Row >
       
      
        <Col className='containerSecundarioL' span={
          25
        } flex={1}
        xs={0} sm={16} md={12} lg={8} xl={4}>          <div  style={{position: 'fixed'}} className='pruebass' />
        </Col>
        <Col 
        className='containerPrincipalL'
        span={
          12
        }xs={39} sm={4} md={6} lg={8} xl={10}><Spin tip="Cargando..." spinning={isLoading}>
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
                 <a href='/forgot'>Olvdaste tu contrase&ntilde;a?</a>
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
