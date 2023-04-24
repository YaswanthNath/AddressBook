import React from 'react';
import { Routes, Route, Navigate, Link, Outlet, useParams, NavLink, useNavigate, useLocation } from 'react-router-dom';
import AddressList from '../../Pages/AddressBookList/AddressList';
import { NavepageDiv } from '../../Pages/AddressBookForm/AddressFormStyle';
import LoginForm from '../../Pages/LoginForm/LoginForm';
import AddressFormPage from '../../Pages/AddressBookForm/AddressForm';
function Navepage() {
  return (
    <>
      <NavepageDiv>
        <Routes>
          <Route path="/" element={<AddressList Click={false} />} />
          <Route path="/address-book-create" element={<AddressList Click={true} />} />
          <Route path="/address-book-viewAddress" element={<AddressList View={true} />} />
        </Routes>
        <div><Outlet /></div>

      </NavepageDiv>
    </>
  )
}
export default Navepage;
