import { navItems } from '../constant/GenerList.jsx';
import { Menu, X } from "lucide-react";
import { useState } from 'react';
import Form from './Form';

import Modal from '@mui/material/Modal';

import SunnyIcon from '@mui/icons-material/Sunny';
import BedtimeIcon from '@mui/icons-material/Bedtime';


function Navbar({ darkMode, toggleDarkMode }) {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);


  const toggleMobileDrawer = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="bg-white dark:bg-black dark:text-white sticky top-0 z-50 shadow-md backdrop-blur-lg border-b border-neutral-300 dark:border-neutral-700">
      <div className="container px-4 py-2 mx-auto relative text-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-shrink-0 text-[var(--footerhover)] ml-6 text-2xl font-bold cursor-pointer">
            KazMovie
          </div>

          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="transition-all duration-200 cursor-pointer flex items-center gap-3 text-[14px] mb-2 text-black dark:text-white"
              >
                <a href={item.href} className="hover:underline hover:underline-offset-8">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex justify-center space-x-6">
            <button
              onClick={toggleDarkMode}
              className="py-2 px-3 border border-gray-500 rounded-md transition-all duration-300 text-black dark:text-slate-300 dark:hover:bg-gray-700 hover:text-white hover:bg-black"
            >
              {darkMode ? <BedtimeIcon /> : <SunnyIcon />}
            </button>
            <a
              onClick={() => setFormOpen(true)}
              className="transition-all duration-300 cursor-pointer btn text-black dark:text-white hover:bg-[var(--theme-color2)]"
            >
              Sign in
            </a>
          </div>

          {formOpen && (
            <Modal open={formOpen} onClose={() => setFormOpen(false)}>
                <Form Close={() => setFormOpen(false)} />
            </Modal>
          )}

          <div className="lg:hidden md:flex flex-col justify-center">
            <button
              onClick={toggleMobileDrawer}
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-600 rounded-md p-2"
            >
              {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-white dark:bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="text-black dark:text-gray-300 hover:text-blue-600 dark:hover:text-white cursor-pointer py-2 px-3"
                >
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>

            <div className="flex space-x-6 mt-6">
              <button
                onClick={toggleDarkMode}
                className="py-2 px-3 border border-gray-500 rounded-md transition-all duration-300 text-black dark:text-slate-300 dark:hover:bg-gray-700 hover:text-white hover:bg-black"
              >
                {darkMode ? <BedtimeIcon /> : <SunnyIcon />}
              </button>
              <a
                onClick={() => setFormOpen(true)}
                className="transition-all duration-300 cursor-pointer btn text-black dark:text-white hover:bg-[var(--theme-color2)]"
              >
                Sign in
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
