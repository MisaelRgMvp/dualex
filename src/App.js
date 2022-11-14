import React from 'react';
import {REGISTER, PRIVATE, LOGIN, MENU } from './routes/paths';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Register from './pages/register';
import Invalide from './pages/invalide';
import Login from './pages/login';
import Theme from './pages/theme';
import Home from './pages/home';
import Singin from './components/signin';
import Menu from './pages/menu';
export default function App() {
  return (
    <div style={{overflow: 'auto'}}>
      <BrowserRouter>
        <Routes>
          <Route path='/logi' element={<Singin />}/>
          <Route path='/login' element={<Login />}/>
          <Route path={REGISTER} element={<Register />}/>
          <Route path='*' element={<Invalide />}/>
          <Route  path={PRIVATE} element={<Home/>} />
          <Route path={MENU} element={<Menu/>} />
          <Route path='/l' element={<Theme />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
