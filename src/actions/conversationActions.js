const setUserMessenger = (userObj) => {
    console.log('ingresa')
    return {
        type: "SET_USERMESSENGER",
        userObj
    }
}
const setConversations = (userObj) => {
    console.log('ingresa')
    return {
        type: "SET_CONVERSATIONS",
        userObj
    }
}
export const searchUsser =() => {
       return async(dispatch)=>{
        let response = await fetch(`https://academlo-whats.herokuapp.com/api/v1/users`)
        let results = await response.json();
       
          dispatch(setUserMessenger(results))}
          ;}

          export const searchConversation =(idUser) => {
            return (dispatch)=>{
                return new Promise(async(resolve, reject) => {
                try{
             let response = await fetch(`https://academlo-whats.herokuapp.com/api/v1/users/5fdbf8baa158063ea44132e6/conversations`)
             let results = await response.json();
             dispatch(setConversations(results))
            }catch(error){
                console.log(error);
                reject(error);
            }

        })
    }
}

