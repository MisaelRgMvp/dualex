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

function Register() {
  return (



    <div className='containerPrincipalR'>

         <div  className='containerSecundarioR'>   


         <Form       >


        <Input  placeholder='Nombre' />

        <Input placeholder='Apellido Paterno'/>

        <Input placeholder='Nombre de Usuario'/>

        <Input placeholder='Password' />

        <Input placeholder='Ingrese su Correo' />

        <Button type='primary' > Registrar Usuario </Button>

</Form>

</div>


    </div>
  )
}

export default Register;