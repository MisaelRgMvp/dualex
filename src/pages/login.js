import React from 'react'
import '../desing/desing.css'
import { Input } from 'antd'
export default function login() {
  return (
    <div>
      <grid>
            <form>
                <Input placeholder='USUARIO'/>
                <Input.Password placeholder='CONTRASE&Ntilde;A'/>
            </form>
      </grid>
    </div>
  )
}
