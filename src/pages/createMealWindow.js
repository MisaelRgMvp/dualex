
import React,{useState} from 'react';
import axios from 'axios';
import  { Form, Input, Card, Upload, Col, Row, Select, Button, Avatar, InputNumber, Image } from 'antd'; 
import Icon from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';

import '../desing/designIn.css'
import { CloudUploadOutlined, UserOutlined, DeleteOutlined } from '@ant-design/icons';
import '../desing/Meal.css'
import Porfile from '../components/porfile';
import { Navigate } from 'react-router-dom';
import MyFooter from '../components/footer';
import { baseurl } from '../base/baseUrls';
export default function CreateMealWindow() {
const [nombre, setNombre] = useState('');
const [precio, setPrecio] = useState('');
const [descripcion, setDescripcion] = useState('');
const [tiempo, setTiempo] = useState('');
const [categoria, setCategoria] = useState('');
const [envio, setEnvio] = useState('');
const [isLogged, setIsLogged] = useState(true);
const [selectedFile, setSelectedFile] = useState(null);
const [fileList, setFileList] = useState([]);
const [previewImage, setPreviewImage] = useState('');
const handleChangeImage = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    if (newFileList.length > 0) {
        setPreviewImage(URL.createObjectURL(newFileList[0].originFileObj));
        setSelectedFile(newFileList[0].originFileObj)
    }
}
const handleDeleteImage = ({ fileList: newFileList }) => {
  setFileList([]);
    setSelectedFile(null)
      setPreviewImage('');
  
}

function handleChangeName (event) {
  setNombre(event.target.value)

}
const handleChangePrice = (value) => {

  setPrecio(value)
  
}
function handleChangeDetails (event) {
  setDescripcion(event.target.value)

}
const handleChangeShipping = (value) => {
  setEnvio(value)
  
}
const handleChangeTime = (value) => {
  setTiempo(value)
  
}
function handleChangeTipe (event) {
  setCategoria(event.target.value)
  
}
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
function handleSubmit() {
  let mealData ={"nombre": nombre, "precio": precio, "descripcion": descripcion, "envio": envio, "tiempo": tiempo, "categoria": categoria}
  console.log(mealData)
  console.log(tiempo)
  console.log(precio)
  console.log(envio)
  const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('producto',  JSON.stringify(mealData));
console.log(formData)
    const token = localStorage.getItem('token');
    console.log(token+'este es el token')

    
    
    axios.post(`http://198.251.65.152:8080/api/productos/crear`, formData,
    {
    

      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
              'Authorization': `${localStorage.getItem('token')}`,
              
            },
     
    }, )
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });
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
      
      };
    const handleChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
      };
    return (
     <div  style = {{ overflowX: 'hidden', overflowY: 'scroll', height:'100vh' }} className="site-drawer-render-in-current-wrapper">
  <Row style={{background:'white',position:'static',left:0,right:0,boxShadow: "0px 5px 5px rgba(0,0,0,0.3)"}} > 
     
      
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
    <div style={{ margin:'1%', background: '#fff', padding:'15px',  boxShadow: "0vmax 0vmax 1vh 0.5vw rgba(0, 0, 0, 0.28)" }}>

        <Row align='middle' justify={'center'}  gutter={[148,8]}>
            <Col style={{ height:'fit-content',objectFit:'contain'}} span={8} xs={24} sm={24} md={24} lg={10} xl={10} type="flex" align="middle" >
             <Button onClick={handleDeleteImage} icon={<DeleteOutlined />}/>
              <div style={{background:'white', height:'26vh', width:'28vh' ,boxShadow: "0vmax 0vmax 1vh 0.5vw rgba(0, 0, 0, 0.20)", borderRadius: '10px', paddingTop: '8%' }} >
             {/* <ImgCrop>  */}
              <Upload accept='*/images' onDelete={handleDeleteImage} progress="circle" showUploadList={false} style={{width:'100%', height:'100%', position:'absolute', left:0, right:0,top: 0, bottom:0}} onChange={handleChangeImage} maxCount={1}  >
              {previewImage ?  <><Image src={previewImage} style={{position:'inherit', height:'100%', }} alt='preview' width='100%' /> </> :  <CloudUploadOutlined style={{fontSize:'6vmax'}}/>}
                
                  
                </Upload>
                {/* </ImgCrop> */}
              </ div>
            </Col>
            <Col style={{ justifyContent: "center", fill:'cover'}} span={24} xs={24} sm={24} md={24} lg={24} xl={10} type="flex" align="middle" >
                <div >

        <Form layout='vertical' style={{marginLeft: '10%', paddingTop: '5%'}} labelCol={{ xl: 14, sm: 17 }} wrapperCol={{ xl: 20, sm: 24, xs:18 }}  >

              <Form.Item style={{color:'white', fontFamily:'Arial'}}  label="Nombre">
                <Input onChange={handleChangeName}  style={{  borderRadius: '10px', boxShadow: "0vmax 0vmax 1vh 0.1vw rgba(0, 0, 0, 0.16)", marginBottom: '5px' }}  placeholder="Ingresa el nombre de la comida" />
              </Form.Item >
              <Form.Item   label="Tiempo de preparación">
              <Select onChange={handleChangeTime} style={{  borderRadius: '10px', boxShadow: "0vmax 0vmax 1vh 0.1vw rgba(0, 0, 0, 0.16)", marginBottom: '5px', }} allowClear options={[{ value: '30 minutos - 40 minutos', label: '30 - 40 minutos' }, { value: '1 - 1:20 hora ', label: '1 hora - 1:20 hora' }, { value: '2 horas', label: '2 horas' }]} />
                
              </Form.Item>
              <Form.Item label="Precio">
              <InputNumber onChange={handleChangePrice} size="large" formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} parser={(value) => value.replace(/\$\s?|(,*)/g, '')} style={{  borderRadius: '10px', boxShadow: "0vmax 0vmax 1vh 0.1vw rgba(0, 0, 0, 0.16)",width:'100%', marginBottom: '5px' }}  />
              </Form.Item>
              <Form.Item label="Envío">
              <Select onChange={handleChangeShipping} style={{  borderRadius: '10px', boxShadow: "0vmax 0vmax 1vh 0.1vw rgba(0, 0, 0, 0.16)", marginBottom: '5px' }} options={[{ value: '20', label: '$20.00' }, { value: '50', label: '$50.00' }, { value: '0', label: 'GRATIS'}]} />
              </Form.Item>

              <Form.Item label="Categoria">
              <Input onChange={handleChangeTipe} style={{  borderRadius: '10px',resize:'none',boxShadow: "0vmax 0vmax 1vh 0.1vw rgba(0, 0, 0, 0.16)", marginBottom: '5px' }} />
              </Form.Item>

              <Form.Item label="Descripción">
              <TextArea onChange={handleChangeDetails}  autoSize style={{  borderRadius: '10px',resize:'none',boxShadow: "0vmax 0vmax 1vh 0.1vw rgba(0, 0, 0, 0.16)", marginBottom: '5px' }} showCount maxLength={300} />
              </Form.Item>

              <Form.Item layout="vertical"> 
                <Button style={{marginRight: '10%', width:'10vw'}} htmlType="submit" size='large' onClick={handleSubmit} type='primary' > Crear </Button>
              <Button style={{marginLeft:'5%', width:'10vw'}} size='large'  type='primary'  > Cancelar </Button>
              </Form.Item>
            
             
        </Form>
                </div>
   
            </Col>
          </Row>
    </div>
          <div style={{width:'100vw', height:'25vh', background:'#fff',marginTop:'1%', boxShadow: "0vmax 0vmax 1vh 0.5vw rgba(0, 0, 0, 0.3)",position:'static', bottom:'0 !important'}}>
<MyFooter />
</div>
     </div>
      
    );
  }