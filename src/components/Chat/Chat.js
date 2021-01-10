import React, {useRef}from "react";
import {useState} from "react"
import { Avatar, IconButton } from "@material-ui/core";
import {useEffect} from "react"
import {
  Message,
  AttachFile,
  InsertEmoticon,
  MoreVert,
  SearchOutlined,
} from "@material-ui/icons";
import "./Chat.css";
import MicIcon from "@material-ui/icons/Mic";
import { useSelector, useDispatch } from 'react-redux'
import Conversation from "../Conversation";
import { newMessage, sendMessage } from "../../actions/conversationActions";



const Chat =  () => {
  const inputRef= useRef();
  const formRef = useRef();
  const mysubmit=(event)=>{
    event.preventDefault();
    dispatch(sendMessage(idActive,idConversation,inputRef.current.value))
    formRef.current.reset();
  }
  const [value, setValue] = useState("");

  const handleChange = e => {
    const { value, name } = e;

    console.log(inputRef.current.value); // obteniendo el valor del input desde el ref

  };

  let  idConversation= useSelector(state => state.conversation.conversationActive._id)
    let idActive=useSelector(state=>state.conversation.idUserActive) 
  const dispatch = useDispatch();
  const userConver = useSelector(state => state.conversation.userConversation)
  let messages = useSelector(state => state.conversation.messages)
  if(userConver.firstName===undefined){
    return(
      <div className="chat">
        <div className="chat__header">
          <Avatar src={`${userConver.photoUrl}`} />
          
          <div className="chat__headerInfo">
            
            <h3>SELECCIONA UNA CONVERSACION</h3>
            <p>Visto por ultima vez a las... </p>
          </div>]
          <div className="chat__headerRight">
            <IconButton>
              <SearchOutlined />
            </IconButton>
            <IconButton>
              <AttachFile />
            </IconButton>
            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
        </div>
  
        <div className="chat__body">
            <Conversation/>
        
        </div>
  
        <div className="chat__footer">
          <InsertEmoticon />
          <form onSubmit={mysubmit} ref={formRef}>
            <input
            onSubmit="this.reset()"
              type="text"
              placeholder="Escribe un mensaje chat"
              ref={inputRef} 
              name="name"  
              onChange={handleChange} 
            
            />
            <Message onClick={(()=>dispatch(sendMessage(idActive,idConversation,inputRef.current.value)))}/>
            
          </form>
          <MicIcon />
        </div>
      </div>
    )}
    
    else{
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`${userConver.photoUrl}`} />
        
        <div className="chat__headerInfo">
          
          <h3>{userConver.firstName.toUpperCase()+" "+userConver.lastName.toUpperCase()}</h3>
          <p>Visto por ultima vez a las... </p>
        </div>]
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
          <Conversation/>
      
      </div>

      <div className="chat__footer">
        <InsertEmoticon />
        <form onSubmit={mysubmit} ref={formRef}>
          <input
          onSubmit="this.reset()"
            type="text"
            placeholder="Escribe un mensaje chat"
            ref={inputRef} 
            name="name"  
            onChange={handleChange} 
          
          />
          <Message onClick={(()=>dispatch(sendMessage(idActive,idConversation,inputRef.current.value)))}/>
          
        </form>
        <MicIcon />
      </div>
    </div>
  );
  }
};

export default Chat;
