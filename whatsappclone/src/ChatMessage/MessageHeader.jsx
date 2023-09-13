import { faEllipsisVertical, faPaperclip } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

function MessageHeader() {
   const [moreinfo, Setmoreinfo] = useState(false)
  function Moreinfo() {
    Setmoreinfo(!moreinfo)
  }
  return (
    <div className='relative'>
      {moreinfo && <div className='absolute right-7 mt-14 bg-white px-16 pr-1 gap-2 w-72'> 
        <li className='list-none border-b'>Contact Info</li>
        <li className='list-none border-b'>Video Call</li>
        <li className='list-none border-b'>Voice call</li>
        <li className='list-none border-b'>Select message</li>
        <li className='list-none border-b'>Close chat</li>
        <li className='list-none border-b'>Block</li>

      </div>
      } 
    <div  >
      <div className='bg-white  flex  w-[1576px] gap-40 pt-2' >
     
      <div>
      <img  className='w-16 h-16 rounded-full overflow-hidden'src='https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'></img>
      </div>
      <div className='font-semibold -ml-28 text-2xl'>Vijay</div>
      <div className=' font-semibold -ml-52 mt-8 text-green-400'>Typing</div>
      <FontAwesomeIcon className='w-16 h-8 ml-[900px] mt-4' icon={faPaperclip} />
      <FontAwesomeIcon className='w-16 h-8 mt-4 cursor-pointer' icon={faEllipsisVertical} onClick={Moreinfo}/>


      </div>
    
    </div>
    </div>

  )
}

export default MessageHeader