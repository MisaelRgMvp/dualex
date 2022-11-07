import React from 'react'
import mvp from '../images/mvp2.png';
import burger from '../images/burger.jpg'
import '../desing/designL.css'
import {HomeFilled } from '@ant-design/icons';

import { Button, Input, Image, Row, Col, Form} from 'antd'
export default function Login() {
  return (
    <div>
      <Row className='Baneer' flex="auto" gutter={1}>
      <Col>
      
        <Col className='home'>
        <Button icon={<HomeFilled />}>REGRESAR</Button>
        </Col>
        <Col className='titleBanner'>DUALEX</Col>

      
    </Col>
      </Row>
    <Row >
       
      
        <Col className='containerSecundarioL' span={
          12
        }>
          <div className='pruebass' />
        </Col>
        <Col 
        className='containerPrincipalL'
        span={
          12
        }>
         <div className='containerLogin' >
          <h1 className='subtitle'>INICIAR SESION</h1>
          <Form
          wrapperCol={{
            span: 16
          }}
          >


                <Input
                className='input' 
                placeholder='USUARIO'
                autoSize='true'
                /><br></br>

                <Input.Password 
                className='input' 
                placeholder='CONTRASE&Ntilde;A'/><br />
                 <a href='/'>Olvdaste tu contrase&ntilde;a?</a>
                <br />
                <Button className='Button'>INICIAR SESION</Button>
                <br />
                <a href='/registro'>Crear cuenta</a>
          </Form>
        </div>
        </Col>
      </Row>
      </div>
  )
}
