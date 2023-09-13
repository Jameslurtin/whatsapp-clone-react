import { faFaceAngry, faFaceDizzy, faFaceFlushed, faFaceFrown, faFaceFrownOpen, faFaceGrimace, faFaceGrin, faFaceGrinBeam, faFaceGrinBeamSweat, faFaceGrinHearts, faFaceGrinSquint, faFaceGrinTears, faFaceGrinTongue, faFaceSmile, faMicrophone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'tailwindcss/tailwind.css';
import React, { useState } from 'react'

function MessageInput() {
  const [emoji, Setemoji] = useState(false)
  function Triggeremoji() {
    Setemoji(!emoji)
  }
  return (
    <div className='relative'>
    {emoji && <div className='flex   gap-3 absolute bg-white  '>
      <FontAwesomeIcon icon={faFaceSmile} ></FontAwesomeIcon>
       <FontAwesomeIcon icon={faFaceAngry} ></FontAwesomeIcon>
      <FontAwesomeIcon icon={faFaceDizzy} ></FontAwesomeIcon>
      <FontAwesomeIcon icon={faFaceFlushed} ></FontAwesomeIcon>
      <FontAwesomeIcon icon={faFaceFrown} ></FontAwesomeIcon>
      <FontAwesomeIcon icon={faFaceFrownOpen} ></FontAwesomeIcon>
      <FontAwesomeIcon icon={faFaceGrimace} ></FontAwesomeIcon>
      <FontAwesomeIcon icon={faFaceGrin} ></FontAwesomeIcon>
      <FontAwesomeIcon icon={faFaceGrinBeam} ></FontAwesomeIcon>
      <FontAwesomeIcon icon={faFaceGrinBeamSweat} ></FontAwesomeIcon>
      <FontAwesomeIcon icon={faFaceGrinTongue} ></FontAwesomeIcon>
      <FontAwesomeIcon icon={faFaceGrinHearts} ></FontAwesomeIcon>
      <FontAwesomeIcon icon={faFaceGrinTears}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faFaceGrinSquint}></FontAwesomeIcon>
      

      </div>}
    <div className=' bg-gray-400 w-full flex  items-center justify-between px-16 mt-[800px] gap-12 '   >
      
      
      <div >
        <FontAwesomeIcon className='text-3xl' icon={faFaceSmile} onClick={Triggeremoji}></FontAwesomeIcon>
        
      </div>
      <div >
        <input className=' flex flex-col w-[1350px] h-16 rounded-xl'></input>
      </div>
      <div>
      <FontAwesomeIcon className='text-3xl' icon={faMicrophone}></FontAwesomeIcon>
      </div>
      

    </div>
    </div>
  )
}

export default MessageInput