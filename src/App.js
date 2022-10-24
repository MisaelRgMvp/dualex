import React from 'react';
import {REGISTER, PRIVATE, LOGIN } from './routes/paths';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Register from './pages/register';
import Invalide from './pages/invalide';
import Login from './pages/login';
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path={REGISTER} element={<Register />}/>
          <Route path='*' element={<Invalide />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
