import { faPeopleGroup, faCircle, faMessage, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'



function Sidenavbar() {
  const [menuinfo, Setmenuinfo] = useState(false)
  function Menuinfo() {
    Setmenuinfo(!menuinfo)
  }
  return (
    <div  className='relative'>
      { menuinfo&&<div className='absolute z-50 right-0 mt-11 flex flex-col gap-3 bg-white'> 
        <li className='list-none border-b'>Group Info</li>
        <li className='list-none border-b'>Settings</li>
        <li className='list-none border-b'>Select chats</li>
        <li className='list-none border-b'>Log out</li>
      </div>
      } 
      <div className='flex justify-between items-center px-5 bg-white w-[450px] '>
        <div className='w-14 h-14 rounded-full overflow-hidden'>
          <img src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg'></img>
        </div>
        <div className='flex flex-col items-center -ml-28 font-bold'>JamesLurtin</div>
        <div className='flex gap-3  text-xl text-gray-400'>
          <FontAwesomeIcon icon={faPeopleGroup} />
          <FontAwesomeIcon icon={faCircle} />
          <FontAwesomeIcon icon={faMessage} />
          <FontAwesomeIcon className='cursor-pointer ' icon={faEllipsisVertical} onClick={Menuinfo} />
        
        </div>
       


      </div>
      </div>
      
 
    
  )
}

export default Sidenavbar