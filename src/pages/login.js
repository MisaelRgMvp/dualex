import React from 'react'
import mvp from '../images/mvp2.png';
import '../desing/designL.css'
import { Button, Input } from 'antd'
export default function Login() {
  return (
    <div>
      <grid className='containerPrincipalL'>
  
        <grid className='containerSecundarioL'>
          <img src={mvp}></img>
          <form>
                <Input
                className='input' 
                placeholder='USUARIO'/><br></br>

                <Input.Password 
                className='input' 
                placeholder='CONTRASE&Ntilde;A'/><br />

                <Button className='Button'>INICIAR SESION</Button>
                <br />
          </form>
        </grid>
      </grid>
    </div>
  )
}
