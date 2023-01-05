import React from 'react';
import {REGISTER, PRIVATE, LOGIN, MENU } from './routes/paths';
import BadgeR from './components/badge'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Register from './pages/register';
import Invalide from './pages/invalide';
import SImage from './components/image' 
import Login from './pages/login';
import ForgotP from './pages/forgotPassword';
import Menu from './pages/menu';
export default function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/image' element={<SImage />}/>
          <Route path={REGISTER} element={<Register />}/>
          <Route path='*' element={<Invalide />}/>
          <Route path='/d' element={<BadgeR />}/>
          <Route path={MENU} element={<Menu/>} />
          <Route path='/forgot' element={<ForgotP/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
