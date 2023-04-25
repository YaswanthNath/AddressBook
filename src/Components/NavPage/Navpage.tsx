import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import AddressList from '../../Pages/AddressBookList/AddressList';
import { NavepageDiv } from '../../Pages/AddressBookForm/AddressFormStyle';
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
