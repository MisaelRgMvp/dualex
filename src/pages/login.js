import React from 'react'
import '../desing/desing.css'
import { Button, Input } from 'antd'
export default function Login() {
  return (
    <div>
      <grid className='containerPrincipalL'>
      <grid className='containerSecundarioL'>
        <h1>HOLA</h1>
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
