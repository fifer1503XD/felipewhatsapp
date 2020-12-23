import React, {useRef}from "react";
import {useState,useEffect} from "react"
import "./Sidebar.css";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton, Avatar } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import { useSelector, useDispatch } from 'react-redux'
import MenuProfile from "../menuProfile";
import {searchUsser,searchConversation} from "../../actions/conversationActions";
import Profile from "../profiles";
import ChatProfile from "../../containers/ChatsProfile";


const Sidebar = () => {
  let [showm, setshowmenu] = useState('false')
  let [showp, setshowprofile] = useState('false')
  let [findUser, setFindUser] = useState('')
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth)
  const userMessenger= useSelector(state=>state.conversation.userMessenger)
  const chats= useSelector(state=>state.conversation.conversations)
  const refUser = useRef();
  
  useEffect(async ()=> {
    try{
      await dispatch(searchConversation(user.user.uid))
      
      
    }catch(error){
      alert(error.message);
    }
  },[] );

  const showMenu = () => {
    setshowmenu(!showm)
    console.log(showm)
  }
  const showProfiles = async()=> {
    await dispatch(searchUsser())
    setshowprofile(!showp)
    console.log(showp)
  }
  const handleUser = async(event)=> {
    const user = event.target.value;
    setFindUser(user)
  
  }
   return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src={`${user.user.photoURL}`} />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <div onClick={showMenu}>
            <MoreVertIcon/>
          </div>.
          {showm ? null:(<MenuProfile />)}
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined onClick={()=>dispatch(searchUsser())}/>
          <input placeholder="Busca o inicia un nuevo chat" type="text" 
          inputRef={refUser}
          onClick={showProfiles}
          onChange={handleUser}/>
          
        </div>   
      </div>
      <div className="containerprofiles"> {showp ? null:(
        userMessenger.filter((user)=>
        user.firstName
            .toLowerCase()
            .includes(findUser.toLowerCase())
        )
        .map((user)=>{
            return(
                <>
                    <Profile name={user.firstName} lastname={user.lastName} imgProfile={user.photoUrl} /> 
               </>
            )
        })

      )}</div>   
      <div className="sidebar__chats">
      <ChatProfile/>
      </div>
    </div>
  );
    };

export default Sidebar;
