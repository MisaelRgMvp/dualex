import React from 'react'
import '../desing/desing.css'
import {
    Button,
    Input,
    Form
  } from "antd";
  import { SketchOutlined , SmileOutlined, SafetyCertificateOutlined, WomanOutlined, UserOutlined, LockOutlined, InfoCircleOutlined, IdcardOutlined  } from "@ant-design/icons";
import Password from 'antd/lib/input/Password';
import Item from 'antd/lib/list/Item';
import mvp from '../images/mvp.png'





function Register() {
    const fromSuccess=(datos) => {

        alert("Fromulario enviado exitosamente", datos)
        
        }
        
        const fromFailed=(error) => {
        
          alert("Fromulario enviado sin Exito", error)
          
          }

  return (



    <div className='containerPrincipalR'>
 <img className='logoRegister' src={mvp}></img>
         <div  className='containerSecundarioR'>   

                
         <Form    onFinish={fromSuccess}
          onFinishFailed={fromFailed}   >

 <Item>
     <Input className='inputAntR' placeholder='Nombre' suffix={<UserOutlined/>} />
 </Item>
       
        <Item 
        rules={[
                {
                  required: true,
                  message: "Ingrese Una Apellido",
                },
              ]}>
            <Input maxLength={15} className='inputAntR' placeholder='Apellido' suffix={<UserOutlined/>}/>
        </Item>

        
      

        
        <Item rules={[
                {
                  required: true,
                  message: "Ingrese Una Password",
                },
              ]}>
            < Password minLength={8} maxLength={15} className='inputAntR' placeholder='Password'  />
        </Item>

        
        <Item rules={[
                {
                  required: true,
                  message: "Ingrese Un Correo",
                },
              ]}>
            <Input  suffix={<IdcardOutlined />} className='inputAntR' placeholder='Ingrese su Correo' />
        </Item>

        
       

        <Button  className='buttonAntR' type='primary' size='large' htmlType='submit' > Registrar Usuario </Button>

</Form>

</div>


    </div>
  )
}

export default Register;