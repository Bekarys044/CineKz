

import { navItems } from '../constant/GenerList.jsx'
import { Menu, X , Sun} from "lucide-react";
import { useState } from 'react'
import Form from './Form'
import Modal from '@mui/material/Modal';


function Navbar() {


    const [mobileDrawerOpen, setMobileDrawerOpen ] = useState(false);

    const [formOpen, setFormOpen] = useState(false)


  const toggleMobileDrawer = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  }

  return (
    <nav className="sticky top-0 z-50  bg-black shadow-md backdrop-blur-lg border-b border-neutral-700/800">
         <div className="container px-4 py-2 mx-auto  relative text-sm">
             <div className="flex items-center justify-between"> 
                   <div className="flex items-center flex-shrink-0 text-[var(--footerhover)] ml-6 text-2xl font-bold cursor-pointer">
                        KazMovie
                   </div>   
                   

                   <ul className='hidden  lg:flex ml-14 space-x-12'>
                       {
                        navItems.map((item, index) => (
                            <li key={index} className='text-white transition-all duration-200 cursor-pointer flex items-center gap-3 text-[14px] mb-2'>
                            <a href={item.href} className='hover:underline hover:underline-offset-8'>{item.label}</a>
                        </li>
                        
                        ))
                       }
                   </ul>



                   <div className="hidden lg:flex jsutify-center space-x-12  ">
                      <a href="#" className='py-2 px-3 border rounded-md text-white  transition-all duration-300  hover:text-black  hover:bg-white'><Sun /></a>
                      <a onClick={() => setFormOpen(true)}  className='transition-all duration-300 cursor-pointer   btn hover:bg-[var(--theme-color2)]'>Sign in</a>
                   </div>
                   {/* openForm */}
 

                   {
                     formOpen && (
                       <Modal open={formOpen} onClose={() =>  setFormOpen(false)}>
                          <Form Close={() => setFormOpen(false)}/>
                       </Modal>
                     )
                   }




                   <div className="lg:hidden md:flex flex-col justify-center">
                        <button onClick={toggleMobileDrawer} className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-600 rounded-md p-2">
                              {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

             </div>


             {
                mobileDrawerOpen &&  (
                    <div className='fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col jucstify-center items-center lg:hidden'>
                           <ul>
                              {
                                navItems.map((item, index) => (
                                   <li key={index} className="text-gray-300 hover:text-white cursor-pointer py-2 px-3">
                                       <a href={item.href}>{item.label}</a>
                                   </li>
                                ))
                              }
                           </ul>


                           <div className='flex space-x-6 mt-6'> 
                               <a href="#" className='py-2 px-3 border rounded-md text-white  transition-all duration-300  hover:text-black  hover:bg-white'><Sun /></a>
                               <a href="#" className='transition-all duration-300 cursor-pointer   btn hover:bg-[var(--theme-color2)]'>Sign in</a>
                           </div>
                    </div>
                )
             }
         </div>
    </nav>
  )
}

export default Navbar
