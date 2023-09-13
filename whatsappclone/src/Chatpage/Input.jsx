import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';



function Input() {
  return (
    <div className='relative pt-2 pb-2 bg-white w-[450px]'>
      <input className='w-[450px] pl-7 h-8 bg-gray-100' type='text'name='' placeholder='Search for Chats'id=''/>
      <div className='absolute top-2 left-3'>  <FontAwesomeIcon icon={faMagnifyingGlass} /></div>
    </div>
  )
}

export default Input