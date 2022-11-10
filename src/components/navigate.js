import React, { NavLink, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
export function Navigates(){
  let navigate = useNavigate(); 
  function routeChange(){ 
    let path = `/login`; 
    navigate(path);
  }
return (this.routeChange);
}