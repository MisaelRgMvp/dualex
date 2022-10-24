import React from 'react'
import '../desing/desing.css'
import {
    Button,
    Space,
    Typography,
    Input,
    Select,
    message,
    Row,
    
    Divider,
    Form,
    Checkbox,
    Grid,
    Radio,
    Modal
  } from "antd";
  import { SketchOutlined , SmileOutlined, SafetyCertificateOutlined, WomanOutlined, UserOutlined, LockOutlined, InfoCircleOutlined } from "@ant-design/icons";
import Password from 'antd/lib/input/Password';

function Register() {
  return (



    <div className='containerPrincipalR'>

         <div  className='containerSecundarioR'>   


         <Form       >


        <Input className='inputAntR' placeholder='Nombre' />

        <Input  className='inputAntR' placeholder='Apellido Paterno'/>

        <Input  className='inputAntR' placeholder='Nombre de Usuario'/>

        < Password  className='inputAntR' placeholder='Password' />

        <Input  className='inputAntR' placeholder='Ingrese su Correo' />

        <Button type='primary' > Registrar Usuario </Button>

</Form>

</div>


    </div>
  )
}

export default Register;