import React, { useState, useEffect } from 'react'
import '../desing/designRe.css'
import {Link} from "react-router-dom";
import {  HomeFilled, UserOutlined, LockFilled } from '@ant-design/icons';
import {
  Button,
  message,
  Input,
  Spin,
  Row,
  Form,
  Col
} from "antd";
import axios from 'axios';
import { baseurl } from '../base/baseUrls';
export default function Register() {
  const [createPassword, setCreatePassword] = useState('');
  const [crname, setCrname] = useState('');
  const [crapellido, setCrapellido] = useState('');
  const [crapellido_materno, setCrapellido_materno] = useState('');
  const [user, setUser] = useState('');
  const baseurlRegister= baseurl+'usuario/registro'
  let campo = user;
  function handleInputChangeUser(event) {
    setUser(event.target.value);
  }
 
    function handleInputChangeLastName(event) {
      setCrapellido(event.target.value);
    }
    function handleInputChangeName(event) {
      setCrname(event.target.value);
    }
  function handleInputChangePassword(event) {
   setCreatePassword(event.target.value);
 }
 function handleSubmit(event) {
  event.preventDefault();
  axios.post(baseurlRegister, {nombre: crname, email: user, password: createPassword, apellido:crapellido,})
  .then(response => {
  
  })
  .catch(error => {
    if(error.response.status === 400){
      message.error('EL USUARIO/CORREO YA EXITE')
    }

  })
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
                placeholder='Nombre'
                autoSize='true'
                prefix={<UserOutlined className="site-form-item-icon icon" />}
                required
                onChange={handleInputChangeName}   
                /><br></br>
 <Input
                onChange={handleInputChangeLastName}
                className='input' 
                placeholder='Apellido Paterno'
                autoSize='true'
                prefix={<UserOutlined className="site-form-item-icon icon" />}
                required
                /><br></br>
 <Input
                onChange={handleInputChangeUser}
                className='input' 
                placeholder='Correo'
                autoSize='true'
                required
                prefix={<UserOutlined className="site-form-item-icon icon" />}

                /><br></br>

        

        
      
   
<Input.Password required
                onChange={handleInputChangePassword}
                className='input' 
                prefix={<LockFilled className="site-form-item-icon icon"  />}
                placeholder='CONTRASE&Ntilde;A'/><br />
        
       

        <Button   loading={loadings[2]} onClick={(event) => handleSubmit(event)} className='Button' type='primary' size='large' htmlType='submit' > Registrar Usuario </Button>
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