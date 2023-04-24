import React, { useState } from 'react';
import { NavLink, Link, useNavigate, Outlet } from 'react-router-dom';
import { SidebarCon, SidebarDiv, SidebarEl } from '../baselayout';
import AddressList from '../../Pages/AddressBookList/AddressList';
function Sidebar() {
  const navigate = useNavigate();
  return (
    <SidebarCon>
      <SidebarDiv>
        <SidebarEl to='/address-book'>Home</SidebarEl>
        <SidebarEl to='/address-book/address-book-create'>Create</SidebarEl>
        <SidebarEl to='/'>Signout</SidebarEl>
      </SidebarDiv>
    </SidebarCon>
  )
}

export default Sidebar;
