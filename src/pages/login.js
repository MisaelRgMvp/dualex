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
                //style={{width:'290px', height:'35px', borderRadius:'12px', backgroundColor: 'rgba(0,0,0,0)'}}
                className='input' 
                placeholder='USUARIO'/><br></br>
                <Input.Password 
                className='input' 
                //style={{width:'290px', height:'35px', borderRadius:'12px', backgroundColor: 'rgba(0,0,0,0)'}}
                placeholder='CONTRASE&Ntilde;A'/><br />
                <Button className='Button'>INICIAR SESION</Button>
                <br />
            </form>
      </grid>
      </grid>
    </div>
  )
}
