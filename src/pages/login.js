import React from 'react'
import '../desing/desing.css'
import { Input } from 'antd'
export default function Login() {
  return (
    <div>
      <grid>
        <h1>HOLA</h1>
            <form>
                <Input placeholder='USUARIO'/>
                <Input.Password placeholder='CONTRASE&Ntilde;A'/>
            </form>
      </grid>
    </div>
  )
}
