import React from 'react'
import mvp from '../images/mvp2.png';
import '../desing/designL.css'
import { Button, Input, Col, Row } from 'antd'
export default function Login() {
  return (
    <div>
<Row>
     <Col>
</Col>

<Col xs='2' >


      <div className='containerSecundarioL' >
        <img  className='burger' src='https://yardis.com.mx/wp-content/uploads/2020/07/Hamburguesa-Cowboy.jpg'></img>
        </div>
        
        
        <grid className='containerPrincipalL'>
          
          <form>


                <Input
                className='input' 
                placeholder='USUARIO'/><br></br>

                <Input.Password 
                className='input' 
                placeholder='CONTRASE&Ntilde;A'/><br />
                 <a href='/'>Olvdaste tu contrase&ntilde;a?</a>
                <br />
                <Button className='Button'>INICIAR SESION</Button>
                <br />
                <a href='/registro'>Crear cuenta</a>
          </form>
        </grid>
        
        </Col>
        </Row>
    </div>
  )
}
