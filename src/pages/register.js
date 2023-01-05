import React, { useState, useEffect } from 'react'
import '../desing/designRe.css'
import {Link} from "react-router-dom";
import {  HomeFilled, UserOutlined, LockFilled } from '@ant-design/icons';
import {
  Button,
  Input,
  Spin,
  Row,
  Form,
  Col
} from "antd";
export default function Register() {
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
        <Button size='large' className='buttonHome' type='text'  icon={<HomeFilled />} >REGRESAR</Button>
        </Col>
        <Col className='titleBanner'><p>DUALEX</p></Col>

      
    </Col>
      </Row>
    <Row >
       
      
        <Col  className='containerSecundarioL' span={
          12
        }xs={0} sm={16} md={12} lg={8} xl={4}> 
          <div  style={{position: 'fixed'}} className='pruebass' />
        </Col>

        <Col 
        className='containerPrincipalL'
        span={
          24
        } ><Spin tip="Cargando..." spinning={isLoading}>
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
        <p>Ya tienes cuenta?         <Link to='/login'>Iniciar Sesion</Link>
        </p>
</Form>

</div>
</Spin>
        </Col>
      </Row>

      </div>
      
  )
}