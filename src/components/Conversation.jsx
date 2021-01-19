import { useSelector} from 'react-redux'
import React from "react";
import "./components.css"
const Conversation = () => {
    let messages = useSelector(state => state.conversation.messages)
    let userActive=useSelector(state=>state.conversation.idUserActive) 
    let classMessage=""
    if(messages[0]===undefined){
        return('No se ha seleccionado una conversacion')
    
            }
    else{
        return(
            <div classname="messagesContainer">
                {
                        messages[0].messages.map((mensaje)=>{
                            
                            if(userActive===mensaje.userId){
                                classMessage="userActiveMessage"
                            }
                            else{
                                classMessage="userConversationMessage"
                            }
                            return(
                                <div className={classMessage}>
                                {mensaje.message}
                               </div>
                            )
                        })
                   }
                
               </div> 
            )
       
    }

}

export default Conversation