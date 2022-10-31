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
                 <a href='/'>Olvdaste tu contrase&ntilde;a?</a>
                <br />
                <Button className='Button'>INICIAR SESION</Button>
                <br />
                <a href='/registro'>Crear cuenta</a>
          </form>
        </grid>
      </grid>
    </div>
  )
}
