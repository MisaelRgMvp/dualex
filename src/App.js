import React from 'react';
import {REGISTER, PRIVATE, LOGIN } from './routes/paths';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import register from './pages/register';
import login from './pages/login';
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={LOGIN} element={<login />}/>
          <Route path={REGISTER} element={<register />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
