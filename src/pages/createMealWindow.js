
import React,{useState} from 'react';
import  { Form, Input, Card, Upload, Col, Row, Select, Button, Image } from 'antd'; 
import Icon from '@ant-design/icons';
import { CloudUploadOutlined } from '@ant-design/icons';
import './Meal.css';
export default function CreateMealWindow() {
  const [image, setImage] = useState(null);

  const handleChange = info => {
    setImage(info.file.originFileObj);
  };
    return (
      <Card bodyStyle={{ boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
        <Form labelCol={{ xs: 6, sm: 4 }} wrapperCol={{ xs: 18, sm: 20 }}>
          <Row>
            <Col xs={24} sm={8}>
              <Card cover={null}>
              {/* <Upload listType="picture-card" fileList={fileList} showUploadList={false} onChange={handleChange} maxCount={1} previewFile>
                <img src='' alt='preview' />
                <CloudUploadOutlined style={{fontSize:'90px'}}/>
                </Upload> */}
                  <Upload accept="image/*" listType='picture-card' maxCount={1} onChange={handleChange}>
      {image
     ?
     <Button>Subir imagen</Button>

      :
      <></>

      }
    </Upload>


              </Card >
            </Col>
            <Col xs={24} sm={16}>
                <div className='DivMealIn'> 
              <Form.Item label="Nombre">
                <Input placeholder="Ingresa el nombre de la comida" />
              </Form.Item>
              <Form.Item label="Tiempo de preparación">
              <Select options={[{ value: '30 minutos - 40 minutos', label: '30 - 40 minutos' }, { value: '1 - 1:20 hora ', label: '1 hora - 1:20 hora' }, { value: '2 horas', label: '2 horas' }]} />
                
              </Form.Item>
              <Form.Item label="Envío">
              <Select options={[{ value: '20', label: '$20.00' }, { value: '50', label: '$50.00' }, { value: '0', label: 'GRATIS'}]} />
              </Form.Item>
              <Form.Item label="Descripción">
                <Input placeholder="Ingresa una descripción de la comida" />
              </Form.Item></div>
            </Col>
          </Row>
        </Form>
      </Card>
    );
  }
  
  