import React from 'react';
import './Chat.css';
import Conversation from './conversationData.json';
import Sidenavbar from './Sidenavbar';
import Input from './Input';
import Chatmessage from '../ChatMessage/Chatmessage';

function Chat() {
  
  return (

   <div className='chat flex  '>
      <div>
      <Sidenavbar></Sidenavbar>
      <Input></Input>
      <div className='conversation bg-white  h-full   '>
        {Conversation.conversation.map(message => (
          <div key={message.id} className='chatbox flex items-start mb-4'>
            <img
              className='w-16 h-16 rounded-full overflow-hidden '
              src={message.profileImage}
              alt={`${message.sender}'s profile`}/>
            <div className='ml-3'>
              <span className='font-bold'>{message.sender}</span>
              <span className='text-xs text-gray-500 ml-72 mt-0 flex items-center '>{message.timestamp}</span>
              <p className='message-text'>{message.message}</p>
              <span className=' px-2 rounded-full bg-green-600  ml-80 flex items-end '>{message.count}</span>
            </div>
          </div>
        ))}


      </div>
      </div>
      <div>
        <Chatmessage></Chatmessage>
      </div>
    </div>

   
  );
}

export default Chat;
