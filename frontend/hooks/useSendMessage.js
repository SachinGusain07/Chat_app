import React from 'react'
import { useState } from 'react';
import useConversation from '../src/zustand/useConversation';
import toast from 'react-hot-toast';

const useSendMessage = () => {
  const [loading ,setLoading] =useSendMessage();
  const {messages , setMessages ,selectedConversation} = useConversation()
  const useSendMessage = async (message)=>{
    setLoading(true)
    try {
        const res = await fetch (`/api/messages/send/{selectedConversation._id}`)
        
    } catch (error) {
        toast.error(error.message)
        
    }finally {
        setLoading(false)

    }
  }
}

export default useSendMessage
