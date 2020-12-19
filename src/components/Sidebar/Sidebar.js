import React, {useState} from 'react';
import "./Sidebar.css";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Button, IconButton, Avatar } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "../SidebarChat/SidebarChat";
import { useSelector, useDispatch } from 'react-redux'
import MenuProfile from "../menuProfile";
import {searchUsser} from "../../actions/conversationActions";

const Sidebar = () => {

  let [showm, setshowprofile] = useState('false')
  const user = useSelector(state => state.auth)
  const showMenu = () => {
    
    setshowprofile(!showm)
    console.log(showm)
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
          </div>
          {showm ? null:(<MenuProfile />)}
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined onClick={searchUsser}/>
          <input placeholder="Busca o inicia un nuevo chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
};

export default Sidebar;
