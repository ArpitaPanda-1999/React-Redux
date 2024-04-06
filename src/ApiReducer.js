const ApiList = (state = [], action) => {
    let data = Object.assign([], state);

    if (action.type === "saveBlog") {
        data = action.bloginfo;
    }
    
    return data;
} 

export default ApiList;