
const Userlist = ( state = [], action) => {
    let data = Object.assign([], state);  //fetch old record if any else assign with []

    if (action.type === 'ADD_USER') {
        data.push(action.fullname);
        
    }

    if (action.type === 'DELETE_USER') {
        data.splice(action.userindex, 1);
        
    }
    return data;
} 

export default Userlist;