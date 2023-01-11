
import React,{useState} from 'react';
import  { Form, Input, Card, Upload, Col, Row, Select, Button, Avatar } from 'antd'; 
import Icon from '@ant-design/icons';
import { CloudUploadOutlined, UserOutlined } from '@ant-design/icons';
import '../desing/Meal.css'
import Porfile from '../components/porfile';
import { Navigate } from 'react-router-dom';
import MyFooter from '../components/footer';





export default function CreateMealWindow() {

  const [isLogged, setIsLogged] = useState(true);
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
    const { TextArea } = Input;
    const onChange = (e) => {
        console.log('Change:', e.target.value);
      };
    const [fileList, setFileList] = useState([]);
    const handleChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
      };
    return (
     <div  style = {{ overflowX: 'hidden', overflowY: 'scroll', height:'100vh' }} className="site-drawer-render-in-current-wrapper">
        <Row style={{background:'white',position:'static',left:0,right:0,borderBottom:'solid 0.2px gray', boxShadow: "0vmax 0vmax 1vh 0.31vw rgba(0, 0, 0, 0.1)"}} > 
      
      
      <Col span={2}> 
     
    
      </Col>
      <Col span={18} ><p style={{fontSize:'3vmax', margin:0}}>DUALEX</p></Col>
      


      <Col span={2} style={{alignContent:'middle'}}>

{ isLogged
   ?  <BtnLogin/>

   :  <BtnLoginTrue />
}      
  </Col>   
      <Col span={2}>
     
   </Col>   
    </Row >
    <div style={{ margin:'1%', background: '#fff', padding: '15%',  boxShadow: "0vmax 0vmax 1vh 0.5vw rgba(0, 0, 0, 0.28)" }}>

        <Row align='middle'  gutter={[24,12]}>
            <Col span={8} xs={24} sm={24} md={24} lg={10} xl={8}>
              <Upload maxCount={1} listType="picture-card" fileList={fileList} onChange={handleChange} >
              <Card cover={null} style={{background:'white',  boxShadow: "0vmax 0vmax 1vh 0.5vw rgba(0, 0, 0, 0.20)", borderRadius: '10px' }}>
                <CloudUploadOutlined style={{fontSize:'320px'}}/>
                  
              </Card >
                </Upload>
            </Col>
            <Col span={8} xs={20} sm={20} md={12} lg={8} xl={14}>
        <Form labelCol={{ xs: 17, sm: 7 }} wrapperCol={{ xs: 10, sm: 14 }}>
                
              <Form.Item label="Nombre">
                <Input  style={{  borderRadius: '10px', boxShadow: "0vmax 0vmax 1vh 0.1vw rgba(0, 0, 0, 0.20)", marginBottom: '5px' }}  placeholder="Ingresa el nombre de la comida" />
              </Form.Item >
              <Form.Item   label="Tiempo de preparación">
              <Select style={{  borderRadius: '10px', boxShadow: "0vmax 0vmax 1vh 0.1vw rgba(0, 0, 0, 0.20)", marginBottom: '5px' }} allowClear options={[{ value: '30 minutos - 40 minutos', label: '30 - 40 minutos' }, { value: '1 - 1:20 hora ', label: '1 hora - 1:20 hora' }, { value: '2 horas', label: '2 horas' }]} />
                
              </Form.Item>
              <Form.Item label="Envío">
              <Select  style={{  borderRadius: '10px', boxShadow: "0vmax 0vmax 1vh 0.1vw rgba(0, 0, 0, 0.20)", marginBottom: '5px' }} options={[{ value: '20', label: '$20.00' }, { value: '50', label: '$50.00' }, { value: '0', label: 'GRATIS'}]} />
              </Form.Item>
              <Form.Item label="Descripción">
              <TextArea style={{  borderRadius: '10px', boxShadow: "0vmax 0vmax 1vh 0.1vw rgba(0, 0, 0, 0.20)", marginBottom: '5px' }} showCount maxLength={500} onChange={onChange} />
              </Form.Item>
        </Form>
            </Col>
          </Row>
    </div>
          <div style={{width:'100vw', height:'25vh', background:'#fff',marginTop:'1%', boxShadow: "0vmax 0vmax 1vh 0.5vw rgba(0, 0, 0, 0.3)",position:'static', bottom:'0 !important'}}>
<MyFooter />
</div>
     </div>
      
    );
  }
  
  