import React, { NavLink, useState, useEffect  } from 'react'
import { useAuthContext } from '../context/authContext';
import '../desing/designL.css'
import useKeepSession from '../context/session';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import {HomeFilled, UserOutlined, LockFilled} from '@ant-design/icons';
import { Button, Input, Image, Avatar, Row, Col, Form, Spin, message } from 'antd'
import { baseLogin } from '../base/baseUrls';
import { useDispatch } from 'react-redux';
import { login, logout } from '../context/actions';
import { saveUserInfo } from '../context/userSlice';


const LoginPage=()=> {
  const [userInfo, setUserInfo] = useState('');
  let navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const [magicWord, setMagicWord] = useState('');
  const [password, setPassword] = useState('');
  const { loginOk } = useAuthContext();
  
  
  function handleInputChangeUser(event) {
    setMagicWord(event.target.value);
  }
  function handleInputChangePassword(event) {
  setPassword(event.target.value);
  }
  let loginData = new URLSearchParams({ email: magicWord, password: password });
  
  function handleSubmit(event) {
  event.preventDefault();
  axios.post(baseLogin, loginData)
  .then(response => {
  console.log(response);
  dispatch(saveUserInfo(response.data));
  // console.log(response);
  dispatch(login(response.data));
  setUserInfo(response.data);
  
  loginOk(response.data);
  localStorage.setItem('userInfoJson', JSON.stringify(response.data));
   
    sessionStorage.setItem('user', JSON.stringify(user))
    navigate('/')
  })
  .catch(error => {
   
    if (error.response.status === 400) {
    message.warning('USUARIO Y/O CONTRASEÑA INCORRECTA')
  }
  if (error.response.status === 500) {
    message.error('ERROR EN EL SERVIDOR')
  }
  });
  }
  const routeChange = () => {
  let path =' /';
  navigate(path);
  }
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
  // Wait for 3 seconds
  setTimeout(() => {
  setIsLoading(false);
  }, 3000);
  }, []);
  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
  setLoadings((prevLoadings) => {
  const newLoadings = [...prevLoadings];
  newLoadings[index] = true;
  return newLoadings;
  });
  }
  
  // check if there is a token in the local storage and set the token in the state
  useEffect(() => {
  const token = localStorage.getItem('token');
  if (token) {
  setUserInfo(token);
  }
  }, []);



 

  return (
    <div>
      <Row className='Baneer' flex="auto" gutter={1}> 
      <Col>
    
        <Col className='home'>
        <Button size='large' className='buttonHome' type='text' onClick={() => routeChange ()} icon={<HomeFilled />} >REGRESAR</Button>
        </Col>
        <Col className='titleBanner'><p>DUALEX</p></Col>

      
    </Col>
      </Row>
    <Row >
       
      
        <Col className='containerSecundarioL' span={
          10
        } flex={1}
        xs={0} sm={16} md={12} lg={8} xl={4}>          <div  style={{position: 'fixed'}} className='pruebass' />
        </Col>
        <Col 
        className='containerPrincipalL'
        span={
          10
        }><Spin tip="Cargando..." spinning={isLoading} onLoading={isLoading}>
         <div className='containerLogin' >
          <h1 className='subtitle'>INICIAR SESION</h1>
          
          <Form
     
          
          >


                <Input 
                className='input' 
                placeholder='USUARIO'
                autoSize='true'
                onChange={handleInputChangeUser}
                prefix={<UserOutlined className="site-form-item-icon icon" />}

                /><br></br>

                <Input.Password 
                className='input' 
                onChange={handleInputChangePassword}
                prefix={<LockFilled className="site-form-item-icon icon"  />}
                placeholder='CONTRASE&Ntilde;A'/><br />
                 <a href='/forgot'>Olvdaste tu contrase&ntilde;a?</a>
                <br />
                <Button 
                  loading={loadings[2]}
                  onClick={(event) => handleSubmit(event)}
                  type="primary" className='Button'>
                    INICIAR SESION
                </Button>
                <br />
                <p>Aun no tienes una cuenta?</p>
                <Link to='/registro'>Crear cuenta</Link>
          </Form>
        </div></Spin>
        </Col>
      </Row>
      </div>
  )
}
export default LoginPage;