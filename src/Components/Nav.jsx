import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [visible, setVisible] = useState(false);

  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Products', path: '/col' },
    { title: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <div className="sticky top-0 z-10 flex justify-between items-center px-6 w-full h-[10vh]  ">
        <div className="z-20">
          <img src="./zaitoonlogo.png" alt="Zaitoon Logo" className="h-[50px]" />
        </div>

        {/* Hamburger Menu Button - Only visible on mobile */}
        <button 
          className="z-20 lg:hidden"
          onClick={() => setVisible(!visible)}
        >
          {visible ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex py-3">
          <ul className="flex gap-6">
          <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/col'}>Products</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
          </ul>
        </div>

        {/* Mobile Sidebar */}
        <div className={`
          fixed top-0 right-0 h-full w-full bg-black shadow-lg
          transform transition-transform duration-300 ease-in-out
          lg:hidden
          ${visible ? 'translate-x-0' : 'translate-x-full'}
          z-10
        `}>
          <div className="flex flex-col pt-[10vh]">
            <ul className="flex flex-col gap-4 p-6">
              {navItems.map((item) => (
                <Link 
                  key={item.title}
                  className="hover:text-gray-600 cursor-pointer text-lg"
                  onClick={() => setVisible(false)}
                  to={item.path}
                >
                  {item.title}
                </Link>
              ))}
            </ul>
          </div>
        </div>

        {/* Overlay */}
        {visible && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-0"
            onClick={() => setVisible(false)}
          />
        )}
      </div>
    </>
  );
};

export default Nav;
