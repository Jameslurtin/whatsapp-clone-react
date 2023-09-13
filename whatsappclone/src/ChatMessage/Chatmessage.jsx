import React from 'react'
import MessageHeader from './MessageHeader'
import MessageInput from './MessageInput'

function Chatmessage() {
  return (
    <div>
      <MessageHeader></MessageHeader>
      <div className='fixed'>
        <MessageInput></MessageInput>
      </div>
      <img className='w-[100%]' src='https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png' alt=''></img>
      <div className='mt-1 absolute top-20 ml-[650px] bg-white w-24 px-5 rounded-md'>Today</div>
     <div className='absolute top-36 '>
    
     <div className=' bg-gray-400 w-48 h-20 rounded-l-md  rounded-tr-md ml-2'>message1</div>
     <div className=' bg-green-400 w-48 h-20 rounded-l-md  rounded-tr-md ml-[1350px]'>message2</div>
     </div>
    </div>
  )
}

export default Chatmessage