import React from 'react';
import 'antd/dist/reset.css';
import {REGISTER, PRIVATE, LOGIN, MENU } from './routes/paths';
import LogoutButton from './context/logout';
import BannerPage from './components/BannerPage';
import BadgeR from './components/badge'
import TermsAndConditions from './pages/termsAndConditions';
import ProfilePageEdit from './pages/userEdit';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Register from './pages/register';
import Invalide from './pages/invalide';
import UserProfile from './pages/userProfile';
import SImage from './components/image';
import Cart from './pages/Cart' 
import ForgotP from './pages/forgotPassword';
import ForgotCode from './pages/forgotPasswordCode';
import Menu from './pages/menu';
import MyFooter from './components/footer';
// import useKeepSession from './context/session';
import Misa from './components/Misa';
import CardsComida from './components/cardsComida';
import CreateMealWindow from './pages/createMealWindow';
import LoginPage from './pages/login';
export default function App() {
  // useKeepSession();
  return (
    <div >
      <BrowserRouter>
        <Routes>

        <Route path='/' element={ <BannerPage />} >
          <Route path='/terms' element={<TermsAndConditions />} />
          <Route path='/profile' element={<UserProfile />}/>
          <Route path='/banne' element={<BannerPage />}/>
          <Route path='/profile/edit' element={<ProfilePageEdit />}/>
          <Route path='/logout' element={<LogoutButton  />}/>
          <Route path='/image' element={<SImage />}/>
          <Route path='/' index element={<Menu/>} />
          <Route path='/forgot' element={<ForgotP/>} />
      </Route>
          <Route path={REGISTER} element={<Register />}/>
          <Route path='/Cart' element={<Cart />}/>         
          <Route path='/d' element={<BadgeR />}/>
          <Route path='/ds' element={<CardsComida />}/>          
          <Route path='/forgot/code' element={<ForgotCode/>} />
          <Route path='/708' element={<MyFooter/>} />
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/misa' element={<Misa/>}/>
          <Route path='/create' element={<CreateMealWindow/>}/>
        </Routes>
      </BrowserRouter>
     
    </div>
  )
}
