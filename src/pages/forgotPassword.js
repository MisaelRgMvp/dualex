import React, {useState, useEffect  } from 'react'
import '../desing/designF.css'
import { useNavigate, Link } from "react-router-dom";
import {HomeFilled, UserOutlined, InfoCircleOutlined} from '@ant-design/icons';
import { Button, Input, Row, Col, Form, Spin, Avatar, Tooltip } from 'antd'
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
         <img preview={false} src={open} width='550vw' height='50vh' ></img>
          <Form
      
          
          >


                <Input
                xs={20} sm={20}  md={12} lg={8} xl={8}
                className='input' 
                placeholder='Ingrese su correo'
                autoSize='true'
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
                  loading={loadings[2]}
                  onClick={() => enterLoading(2)}
                  type="primary"
                  color='blue'
                 className='Button'
                  >
                     RECUPERAR              </Button>
             

          </Form>
        </div></Spin>
        </Col>
      </Row>
      </div>
  )
}
