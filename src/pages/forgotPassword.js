import React, {useState, useEffect  } from 'react'
import '../desing/designF.css'
import axios from 'axios';
import { baseRecuperate } from '../base/baseUrls';
import { useNavigate, Link, Navigate } from "react-router-dom";
import {HomeFilled, UserOutlined, InfoCircleOutlined} from '@ant-design/icons';
import { Button,message, Input, Row, Col, Form, Spin, Avatar, Tooltip } from 'antd'
import open from '../images/closeMail.png'
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
const [magicWord, setMagicWord] = useState('');
  let forgot= new URLSearchParams({email: magicWord})
  function handleInputChangeUser(event) {
    setMagicWord(event.target.value);
  }
 function handleSubmit(event) {
    event.preventDefault();
    setLoadings(true);
    axios.post(baseRecuperate, forgot)
    .then(response => {
      setLoadings(false);
      console.log(response)
      navigate('/forgot/code');
    })
    .catch(error => {
      setLoadings(false);
     
      if(error.response.status === 404){
        message.warning('USUARIO NO ENCONTRADO')
      }
    });
    
  }
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
  const [loadings, setLoadings] = useState(false);
  const enterLoading = (index) => {
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
        // className='containerPrincipalf'
        span={12} 
        xl={12} xxl={12} md={24} sm={24}
        ><Spin tip="Cargando..." spinning={isLoading}>
         <div className='forgotP' >
         <img  className='In' preview={false} src={open} style={{  marginTop: '14vh', marginBottom: '3vh' }} ></img>
         </div>
          <Form
      
          
          >


                <Input
                xs={12}
                className='input' 
                placeholder='Ingrese su correo'
                onChange={handleInputChangeUser}
                prefix={<Avatar size={ { xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 24 }} style={{fontSize:'0.7vmax'}} icon={<UserOutlined  />} />} 
                suffix={
                  <Tooltip title="CORREO PREVIAMENTE REGISTRADO">
                    <Avatar size={ { xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 24 }} style={{fontSize:'0.7vmax'}} icon={<InfoCircleOutlined style={{ color: 'white' }} />} />
                  </Tooltip>
                }
                /><br></br>

                <br />
                <Button 

                xs={8} sm={10}  md={12} lg={28} xl={38}
                  loading={loadings}
                 onClick={(event) => handleSubmit(event)}
                  type="primary"
                  color='blue'
                 className='ButtonF'
                  >
                     RECUPERAR              </Button>
             

          </Form>
        </Spin>
        </Col>
      </Row>
      </div>
  )
}
