// components/Navbar.js

import React from 'react';
import Link from 'next/link';

interface NavbarProps {
  isLoggedIn: boolean;
  signOutUser: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, signOutUser }) => {
  return (
    <div className='fixed top-0 left-0 right-0 z-50 flex justify-between w-full  bg-white p-2 px-9 shadow-lg items-center'>
      <Link href='/'>
        <h1 className='font-bold text-4xl text-green-400'>LearnTube</h1>
      </Link>
      {isLoggedIn ? (
        <button onClick={signOutUser} className='p-2 px-3 bg-green-400 rounded-full font-[600] shadow'>SignOut</button>
      ) : (
        <Link href='/login'>
          <button className='text-black bg-green-400 p-2 px-4 font-bold rounded-full shadow-md'>Login</button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
