import React from 'react';
import Logo from '../../Assets/Logo.png'
import user from '../../Assets/user.svg'
import { Head, HeadDiv1, HeadDiv2, HeadText1, HeadText2, LogoIcon, UserIcon } from '../baselayout'
import { useNavigate } from 'react-router-dom';
function Header() {
  const navigate = useNavigate();
  return (
    <Head>
      <HeadDiv1>
        <LogoIcon onClick={() => navigate('/address-book')} src={Logo} />
        <HeadText1>Address Book</HeadText1>
      </HeadDiv1>
      <HeadDiv2>
        <UserIcon src={user} />
        <HeadText2>Welcome User</HeadText2>
      </HeadDiv2>
    </Head>
  )
}
export default Header;
