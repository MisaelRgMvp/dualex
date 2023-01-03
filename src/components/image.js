import React from "react";
import uno from '../images/dualComida.jpg';
import { Image } from "antd";

export default function SImage(){
    return(


      <Image preview={true} src={uno} width="100vw" height='50vh' />
  
        );
}