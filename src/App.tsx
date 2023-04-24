import React from 'react';
import './App.css';
import LoginForm from './Pages/LoginForm/LoginForm';
import ForgotForm from './Pages/ForgotForm/ForgotForm';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, NavLink, useNavigate, useLocation, BrowserRouter } from 'react-router-dom';
import AddressForm from './Pages/AddressBookForm/AddressForm';
import Header from './Components/Header/Header';
import Sidebar from './Components/SideBar/SideBar';
import MainPage from './Components/MainPage/Main';
import AddressList from './Pages/AddressBookList/AddressList';
import AddressFormPage from './Pages/AddressBookForm/AddressForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='/forgot' element={<ForgotForm />} />
          <Route path='/address-book/*' element={<MainPage />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
