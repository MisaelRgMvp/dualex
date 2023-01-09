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
import MyFooter from './components/footer';
import Misa from './components/Misa';
import CardsComida from './components/cardsComida';
import CreateMealWindow from './pages/createMealWindow';
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
          <Route path='/ds' element={<CardsComida />}/>          
          <Route path={MENU} element={<Menu/>} />
          <Route path='/forgot' element={<ForgotP/>} />
          <Route path='/708' element={<MyFooter/>} />
          <Route path='/misa' element={<Misa/>}/>
          <Route path='/m' element={<CreateMealWindow/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
