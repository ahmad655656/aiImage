import { Navlink } from '@/constant/constant'
import { XIcon } from 'lucide-react'
import React from 'react'
import { Link as  ScrollLink } from 'react-scroll';

type Props = {
    showNav: boolean;
    closeNav: () => void;
}
const MobileNav = ({showNav, closeNav} : Props) => {

    const navOpen = showNav ? 'translate-y-0' : "translate-y-[-200%]"
  return (
   <div>
     <div className={`${navOpen} text-white justify-center fixed flex flex-col h-screen transform transition-all duration-1000 w-full bg-gray-950 space-y-6 z-[1050] top-0 `}>
        {Navlink.map((link) => {
            return ( 
                <ScrollLink smooth spy to={link.url} key={link.id}>
                <p className='text-white cursor-pointer w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px] '>{link.label}</p>
                </ScrollLink>
            )
        })}
         {/* Close icon */}
    <XIcon onClick={closeNav} className='absolute top-[0.7rem] cursor-pointer right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 ' />

    </div>
   
   </div>
  )
}

export default MobileNav