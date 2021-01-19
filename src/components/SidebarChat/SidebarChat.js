import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";
import {useSelector,useDispatch} from "react-redux";
import {conversationActive} from "../../actions/conversationActions";
const SidebarChat = (props) => {
  const dispatch = useDispatch();
  const userMessenger= useSelector(state=>state.conversation.userMessenger)
  const idActive= useSelector(state=>state.conversation.idUserActive)
  let id= userMessenger.filter((userMessenger)=>
   userMessenger._id===props.userConver)
   console.log(props.idConversation)
   let img="";
   if(id[0].photoUrl!==""){
    img=id[0].photoUrl
}
else{
    img="https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14044.jpg"
}
  return (
    
    <div  className="sidebarChat">
      <Avatar src={`${img}`}/>
      <div onClick={()=>dispatch(conversationActive(props.idConversation,idActive))} className="sidebarChat__info">
        <h2>{id[0].firstName.toUpperCase()  +" "+ id[0].lastName.toUpperCase() }</h2>
        <p>Ultimo mensaje...</p>
      </div>
    </div>
  );
};
export default SidebarChat;
