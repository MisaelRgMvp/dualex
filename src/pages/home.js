import React from 'react'
import '../desing/desing.css'
import {
    Button,
    Space,
    Typography,
    Input,
    Select,
    message,
    Row,
    
    Divider,
    Form,
    Checkbox,
    Grid,
    Radio,
    Modal,
    Card
  } from "antd";
  import ConteinerCards from '../components/conteinerCards';
  import { SketchOutlined , SmileOutlined, SafetyCertificateOutlined, WomanOutlined, UserOutlined, LockOutlined, InfoCircleOutlined, IdcardOutlined, ClockCircleOutlined, DollarOutlined  } from "@ant-design/icons";
import Password from 'antd/lib/input/Password';
import Item from 'antd/lib/list/Item';
import mvp from '../images/mvp.png'
import delivery from '../desing/delivery.svg'
import CardsComida from '../components/cardsComida';
const { Title, Text } = Typography;


function Home() {
  return (
  

<div>
<ConteinerCards></ConteinerCards>




    </div>
  )
}

export default Home