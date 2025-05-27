


import { resourcesLinks, platformLinks, communityLinks } from "../constant/GenerList";
import Logo from '../assets/images/logo.png'



function Footer() {
    
  return (
    <footer className="bg-white  text-black dark:bg-black dark:text-white   mt-20 border-t py-20 bg-[var(--footer-bg)]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 px-10">


              
              <div>
                    <div className="flex items-center flex-shrink-0 text-[var(--footerhover)]  text-2xl font-bold cursor-pointer">
                        KazMovie
                    </div>  
                      <div  className="  text-black  dark:text-white text-sm mt-4">
                         We have many available excerpts, and you can find the newly released ones here.
                      </div>
               </div>   


            <div>
              <h3 className="text-md font-semibold mb-4">Resources</h3>
              <ul>
                {resourcesLinks.map((link, index) => (
                  <li key={index} className="mb-2">
                    <a className="text-black  dark:text-white transition-[var(transition2)]   dark:hover:text-[var(--footerhover)] hover:text-[var(--footerhover)]" href={link.href}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
  
           <div>
             <h3 className="text-md font-semibold mb-4">Platform</h3>
             <ul>
               {platformLinks.map((link, index) => (
                 <li key={index} className="mb-2">
                   <a className="text-black  dark:text-white transition-[var(transition2)]  dark:hover:text-[var(--footerhover)]  hover:text-[var(--footerhover)]" href={link.href}>{link.text}</a>
                 </li>
               ))}
             </ul>
           </div>

           <div>
             <h3 className="text-md font-semibold mb-4">Comunity</h3>
             <ul>
               {communityLinks.map((link, index) => (
                 <li key={index} className="mb-2">
                   <a className="text-black  dark:text-white  transition-[var(transition2)] dark:hover:text-[var(--footerhover)]  hover:text-[var(--footerhover)]" href={link.href}>{link.text}</a>
                 </li>
               ))}
             </ul>
           </div>
  
       </div>
  </footer>
  
  )
}

export default Footer
