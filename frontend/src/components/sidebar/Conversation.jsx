import React from 'react'
import useConversation from '../../zustand/useConversation'


const Conversation = ({conversation, lastIndex,emoji}) => {

  const {selectedConversation , setSelectedConversation} = useConversation();

  const isSelected = selectedConversation?._id==conversation._id;

  return (
    <>
    <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer 

      ${isSelected ? "bg-sky-500": ""}
    `} onClick={()=>setSelectedConversation(conversation)}>
        <div className ='avatar online'>
        <div className='w-12 rounded-full'>
            <img src ={conversation.profilepic} alt ="Profile image"/>
            </div>
        </div>

        <div className='flex flex-col flex-1'>
            <div className ='flex hap-3 justify-between'>
                <p className ='font-bold text-grey-200'>{conversation.fullname} </p>
                <span className ='text-xl'>{emoji}</span>
            </div>
        </div>
    </div>
     {!lastIndex && <div className ='divider my-0 py-0 h-1 /'></div>}
    </>
  )
}

export default Conversation
