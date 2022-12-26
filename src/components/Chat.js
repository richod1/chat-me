import React,{useState,useEffect,useRef} from 'react'
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';
import styled from 'styled-components'
import {db} from '../firebase'

const Chat = () => {

  const [messages,setMessages]=useState([]);

  const scroll=useRef();

  useEffect(()=>{
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  },[])


  return (
    <Container>

    </Container>
  )
}

export default Chat

const Container=styled.div`

`