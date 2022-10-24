import React from 'react'
import '../desing/desing.css'
import { Input } from 'antd'
export default function Login() {
  return (
    <div>
      <grid classname='containerPrincipalL'>
        <h1>HOLA</h1>
            <form>
                <Input 
                //style={{width:'290px', height:'35px', borderRadius:'12px', backgroundColor: 'rgba(0,0,0,0)'}}
                className='input' 
                placeholder='USUARIO'/>
                <Input.Password 
                className='input' 
                //style={{width:'290px', height:'35px', borderRadius:'12px', backgroundColor: 'rgba(0,0,0,0)'}}
                placeholder='CONTRASE&Ntilde;A'/>
            </form>
      </grid>
    </div>
  )
}
