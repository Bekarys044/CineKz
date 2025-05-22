
import { X } from "lucide-react";
import LogoutIcon from '@mui/icons-material/Logout';
import  { useState } from 'react'


function Form( {Close} ) {


   const [check, setCheck] = useState(false)
   
  
   function Submite(e) {
    e.preventDefault();
    close()
   }


  return (
    <form className='bg-[var(--theme-bg)] flex flex-col gap-4 p-4  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[400px]  shadow rounded'>
           <section className='flex justify-end items-center'>
               <X  onClick={Close} className='text-[var(--body-text-color)]'/> 
           </section>
           <div className="flex  justify-center items-center flex-shrink-0 text-[var(--footerhover)] ml-6 text-2xl font-bold cursor-pointer">
                        KazMovie
            </div>  

            <p className="text-[var(--body-text-color)] text-center text-[14px] md:text-[16px]">
               log in with your account
            </p>

            <div className="w-[90%] mx-auto h-[1px] bg-[var(--body-text-color)]"></div>
            
            <div className="w-[90%] mx-auto flex flex-col gap-4">
              <label>Gmail:</label>
              <input type="text"  className="w-full px-2 py-2 mx-auto bg-[var(--border-white-color)] border-[1px] border-[var(--body-text-color)] hover:border-[var(--footerhover)] rounded-md"/>
              <label>Password:</label>
              <input type="password" className="w-full px-2 py-2 mx-auto bg-[var(--border-white-color)] border-[1px] border-[var(--body-text-color)] hover:border-[var(--footerhover)] rounded-md" />

              <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" checked={check} onChange={()=>  setCheck(!check)}     className="w-4 h-4 cursor-pointer" /> 
                    <label className="text-[var(--body-text-color)] text-[14px] md:text-[16px]">Remember me</label>
                  </div>
                    <div className="flex justify-end items-center">
                        <a href="#" className="text-[var(--footerhover)] text-[14px] md:text-[16px]">Forgot password?</a>
                   </div>
              </div>
              <button onSubmit={Submite} type='Submit' className='w-full   duration-300  hover:bg-[var(--theme-color2)]  transition duration-600 cursor cursor-pointer bg-[var(--footerhover)] p-[6px] border-[1px] border-[var(--body-text-color)]  text-white mt-3   rounded'>
                 <LogoutIcon className='text-white'/>  
                 <span className="inline-block transition-transform duration-300 hover:translate-x-1">Sing in</span>
              </button>
            </div>
    </form>
  )
}

export default Form
