import React from 'react';
import Logo from '../assets/LogoSite.png'

const Header = () => {
  return <div className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* Logo */}
        <a href='#'>
          <img src={Logo} alt='' width={200}/>
        </a>
        <a>
          <button className='btn btn-sm mb-5'>Trabalhe comigo</button>
        </a>
      </div>
    </div>
  </div>;
};

export default Header;
