const INITIAL_STATE = {
    userMessenger: "",
    conversations:"",
}



const conversationReducer = (prevState = INITIAL_STATE, action) => {

    switch(action.type){
        case "SET_USERMESSENGER":
            return {...prevState, userMessenger: action.userObj};
        case "SET_CONVERSATIONS":
         return {...prevState, conversations: action.userObj};
        case "SEARCH_USER":
            return {...prevState, user: action.userObj};
        case "DELETE_MESSAGE":
            break;
       
        default:
            return prevState;
    }

}

export default conversationReducer;