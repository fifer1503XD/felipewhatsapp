import React from "react";
import {useSelector} from "react-redux";
import SidebarChat from "../components/SidebarChat/SidebarChat";

export default function ChatProfile(){
    const chats= useSelector(state=>state.conversation.conversations)
    return (
        <div>
            {chats.map((map)=>{
            
                        return(
                            <>
                               <SidebarChat/>
                           </>
                        )
                    })}
        </div>
    )
}



