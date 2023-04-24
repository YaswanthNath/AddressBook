import React, { useState } from 'react';
import Header from '../Header/Header';
import Sidebar from '../SideBar/SideBar';
import { SectionDiv } from '../baselayout';
import Navepage from '../NavPage/Navpage';
function MainPage() {
  
  return (
    <>
      <Header />
      <SectionDiv>
        <Sidebar />
        <Navepage />
      </SectionDiv>
    </>
  )
}
export default MainPage;
