import React, { useState,useEffect } from "react";
import SidebarChat from "../components/SidebarChat/SidebarChat";
import {conversationActive,setIdUserActive} from "../actions/conversationActions";
import { useSelector, useDispatch } from 'react-redux'
import { ClickAwayListener } from "@material-ui/core";
export default function ChatProfile(){
    const dispatch = useDispatch();
    const idActive= useSelector(state=>state.conversation.idUserActive)
    const user = useSelector(state => state.auth)
    const chats= useSelector(state=>state.conversation.conversations)
    const userMessenger= useSelector(state=>state.conversation.userMessenger)
    let [id,setId] = useState(false)
   useEffect(()=>{
       console.log(userMessenger)
       if(userMessenger){
        setId(userMessenger.filter((userMessenger)=>
        userMessenger.uid===user.user.uid))
       }
   },[userMessenger])

   useEffect(()=>{
       if(id){
        let idactive= id[0]._id
        dispatch(setIdUserActive(idactive))
       }
   },[id])
    return (
        <div>
            {id &&
            chats
            .filter((chat,index)=>
            chat.members[0]===id[0]._id || chat.members[1]===id[0]._id,

            )
            .map((map)=>{
                
                let userConver
                if(map.members[0]!==id[0]._id){
                    userConver=map.members[0]
                    
                }
                else{
                    userConver=map.members[1]
                }
                        return(
                            <div>
                               <SidebarChat idConversation={map._id} membes={map.members} idprofile={id[0]._id} userConver={userConver} conversationActive={()=>dispatch(conversationActive())}/>
                           </div>
                        )
                    })}
        </div>
    )
}



